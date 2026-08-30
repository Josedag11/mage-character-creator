import React from 'react';
import LoreTooltip from './LoreTooltip';
import { ATTRIBUTE_CATEGORIES, ATTRIBUTE_RATING_DESCRIPTIONS } from '../data/attributesData';

const PRIORITY_POINTS = { primary: 7, secondary: 5, tertiary: 3 };

export default function Step2Attributes({ character, setCharacter }) {
  const handlePriorityChange = (catKey, newPriority) => {
    const updated = { ...character.priorities };
    Object.keys(updated).forEach(k => {
      if (updated[k] === newPriority) {
        updated[k] = updated[catKey];
      }
    });
    updated[catKey] = newPriority;

    const resetAttributes = { ...character.attributes };
    Object.keys(ATTRIBUTE_CATEGORIES).forEach(cat => {
      ATTRIBUTE_CATEGORIES[cat].traits.forEach(t => {
        resetAttributes[t.id] = 1;
      });
    });

    setCharacter({ ...character, priorities: updated, attributes: resetAttributes });
  };

  const getSpentPoints = (catKey) => {
    return ATTRIBUTE_CATEGORIES[catKey].traits.reduce((sum, trait) => {
      return sum + (character.attributes[trait.id] - 1);
    }, 0);
  };

  const handleAttributeChange = (catKey, traitId, delta) => {
    const currentVal = character.attributes[traitId];
    const newVal = currentVal + delta;
    if (newVal < 1 || newVal > 5) return;

    const maxPoints = PRIORITY_POINTS[character.priorities[catKey]];
    const spent = getSpentPoints(catKey);

    if (delta > 0 && spent >= maxPoints) return;

    setCharacter({
      ...character,
      attributes: { ...character.attributes, [traitId]: newVal }
    });
  };

  return (
    <div className="space-y-6">
        <div className="bg-black/80 p-4 rounded-lg border border-zinc-800 text-sm text-zinc-300">
            <span className="text-red-400 font-bold uppercase tracking-wider text-xs block mb-1">
             Distribución de <LoreTooltip termKey="attributes">Atributos (Attributes)</LoreTooltip>
           </span>
          Asigna la prioridad de tus categorías (<strong className="text-red-400 font-bold">7 / 5 / 3 puntos</strong>). Cada Atributo inicia con <strong className="text-red-400 font-bold">1 punto base gratuito</strong>.
        </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Object.keys(ATTRIBUTE_CATEGORIES).map((catKey) => {
          const category = ATTRIBUTE_CATEGORIES[catKey];
          const priority = character.priorities[catKey];
          const maxPoints = PRIORITY_POINTS[priority];
          const spentPoints = getSpentPoints(catKey);
          const remaining = maxPoints - spentPoints;

          return (
            <div key={catKey} className="bg-black/90 border border-zinc-800/80 rounded-lg p-4 space-y-4">
              <div>
                <div className="flex justify-between items-center mb-2 gap-2">
                <span className="text-[11px] sm:text-xs font-bold text-red-400 uppercase tracking-wider whitespace-nowrap overflow-hidden text-ellipsis">
                    {category.label}
                </span>
                <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded whitespace-nowrap shrink-0 ${remaining === 0 ? 'text-zinc-500 bg-zinc-900' : 'text-red-400 bg-red-950/60 border border-red-800/50'}`}>
                    {remaining} pts restantes
                </span>
                </div>

                <select
                  value={priority}
                  onChange={(e) => handlePriorityChange(catKey, e.target.value)}
                  className="w-full bg-zinc-950 border border-zinc-800 text-xs text-zinc-300 rounded p-1.5 focus:border-red-500 focus:outline-none mb-3"
                >
                  <option value="primary">Primary (7 Puntos)</option>
                  <option value="secondary">Secondary (5 Puntos)</option>
                  <option value="tertiary">Tertiary (3 Puntos)</option>
                </select>
              </div>

              <div className="space-y-3 pt-2 border-t border-zinc-800/60">
                {category.traits.map((trait) => {
                  const val = character.attributes[trait.id];
                  const ratingDesc = ATTRIBUTE_RATING_DESCRIPTIONS[trait.id]?.[val];

                  return (
                    <div key={trait.id} className="p-2.5 bg-zinc-950/70 rounded border border-zinc-900 space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-semibold text-zinc-200">{trait.name}</span>
                        <span className="text-xs font-mono font-bold text-red-400 bg-red-950/40 px-1.5 py-0.5 rounded border border-red-900/40 whitespace-nowrap shrink-0 ml-2">
                        {val} / 5
                        </span>
                      </div>

                      <div className="flex items-center justify-between pt-1 border-t border-zinc-900/80">
                        <button
                          onClick={() => handleAttributeChange(catKey, trait.id, -1)}
                          disabled={val <= 1}
                          className="w-6 h-6 bg-zinc-900 border border-zinc-700 text-zinc-300 rounded flex items-center justify-center font-bold text-xs hover:bg-zinc-800 hover:border-red-500/50 disabled:opacity-30 disabled:hover:bg-zinc-900 transition-colors"
                        >
                          -
                        </button>

                        <div className="flex space-x-1.5 px-2">
                          {[1, 2, 3, 4, 5].map((dot) => (
                            <span
                              key={dot}
                              className={`w-3 h-3 rounded-full border transition-all ${
                                dot <= val
                                  ? 'bg-red-600 border-red-500 shadow-[0_0_8px_rgba(220,38,38,0.9)] scale-105'
                                  : 'bg-zinc-950 border-zinc-800'
                              }`}
                            />
                          ))}
                        </div>

                        <button
                          onClick={() => handleAttributeChange(catKey, trait.id, 1)}
                          disabled={val >= 5 || remaining <= 0}
                          className="w-6 h-6 bg-zinc-900 border border-zinc-700 text-zinc-300 rounded flex items-center justify-center font-bold text-xs hover:bg-zinc-800 hover:border-red-500/50 disabled:opacity-30 disabled:hover:bg-zinc-900 transition-colors"
                        >
                          +
                        </button>
                      </div>

                      {ratingDesc && (
                        <div className="text-xs text-red-400/90 font-mono italic pt-1 border-t border-zinc-900">
                          • {ratingDesc}
                        </div>
                      )}

                      <p className="text-xs text-zinc-500 italic leading-snug">{trait.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}