import React, { useState } from 'react';
import LoreTooltip from './LoreTooltip';
import { ABILITY_CATEGORIES, ABILITY_RATING_DESCRIPTIONS, SECONDARY_ABILITIES } from '../data/abilitiesData';

const PRIORITY_POINTS = { primary: 13, secondary: 9, tertiary: 5 };
const DOTS = [1, 2, 3, 4, 5];

export default function Step3Abilities({ character, setCharacter }) {
  const [showSecondary, setShowSecondary] = useState(false);

  const handlePriorityChange = (catKey, newPriority) => {
    const updated = { ...character.abilityPriorities };
    Object.keys(updated).forEach(k => {
      if (updated[k] === newPriority) {
        updated[k] = updated[catKey];
      }
    });
    updated[catKey] = newPriority;

    const resetAbilities = { ...character.abilities };
    Object.keys(ABILITY_CATEGORIES).forEach(cat => {
      ABILITY_CATEGORIES[cat].traits.forEach(t => {
        resetAbilities[t.id] = 0;
      });
    });

    setCharacter({ ...character, abilityPriorities: updated, abilities: resetAbilities });
  };

  const getSpentPoints = (catKey) => {
    return ABILITY_CATEGORIES[catKey].traits.reduce((sum, trait) => {
      return sum + (character.abilities[trait.id] || 0);
    }, 0);
  };

  const handleAbilityChange = (catKey, traitId, delta) => {
    const currentVal = character.abilities[traitId] || 0;
    const newVal = currentVal + delta;
    if (newVal < 0 || newVal > 3) return; // Límite inicial de 3 dots

    const maxPoints = PRIORITY_POINTS[character.abilityPriorities[catKey]];
    const spent = getSpentPoints(catKey);

    if (delta > 0 && spent >= maxPoints) return;

    setCharacter({
      ...character,
      abilities: { ...character.abilities, [traitId]: newVal }
    });
  };

  return (
    <div className="space-y-6">
      <div className="bg-black/80 p-4 rounded-lg border border-zinc-800 text-sm text-zinc-300 flex justify-between items-center">
        <div>
          <span className="text-red-400 font-bold uppercase tracking-wider text-xs block mb-1">
            Distribución de <LoreTooltip termKey="abilities">Habilidades (Abilities)</LoreTooltip>
          </span>
          Asigna la prioridad de tus categorías (<strong className="text-red-400 font-bold">13 / 9 / 5 puntos</strong>). Máximo <strong className="text-red-400 font-bold">3 puntos</strong> en creación.
        </div>
        <button
          onClick={() => setShowSecondary(!showSecondary)}
          className="bg-zinc-900 hover:bg-zinc-800 text-red-400 border border-red-900/50 px-3 py-1.5 rounded text-xs font-bold transition-all whitespace-nowrap shrink-0 ml-2"
        >
          {showSecondary ? 'Ocultar Secundarias' : '+ Ver Habilidades Secundarias'}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Object.keys(ABILITY_CATEGORIES).map((catKey) => {
          const category = ABILITY_CATEGORIES[catKey];
          const priority = character.abilityPriorities[catKey];
          const maxPoints = PRIORITY_POINTS[priority];
          const spentPoints = getSpentPoints(catKey);
          const remaining = maxPoints - spentPoints;

          return (
            <div key={catKey} className="bg-black/90 border border-zinc-800/80 rounded-lg p-4 space-y-4 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-2 gap-2">
                  <span className="text-[11px] sm:text-xs font-bold text-red-400 uppercase tracking-wider min-w-0">
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
                  <option value="primary">Primary (13 Puntos)</option>
                  <option value="secondary">Secondary (9 Puntos)</option>
                  <option value="tertiary">Tertiary (5 Puntos)</option>
                </select>

                <div className="space-y-3 pt-3 border-t border-zinc-800/60">
                  {category.traits.map((trait) => {
                    const val = character.abilities[trait.id] || 0;
                    const ratingDesc = ABILITY_RATING_DESCRIPTIONS[trait.id]?.[val];

                    return (
                      <div key={trait.id} className="p-2.5 bg-zinc-950/70 rounded border border-zinc-900 space-y-2">
                        {/* Fila Superior: Nombre e Indicador */}
                        <div className="flex justify-between items-center">
                          <span className="text-xs font-semibold text-zinc-200 pr-2">{trait.name}</span>
                          <span className="text-xs font-mono font-bold text-red-400 bg-red-950/40 px-1.5 py-0.5 rounded border border-red-900/40 whitespace-nowrap shrink-0 ml-2">
                            {val} / 3
                          </span>
                        </div>

                        {/* Fila Inferior: 5 Dots */}
                        <div className="flex items-center justify-between pt-1 border-t border-zinc-900/80">
                          <button
                            onClick={() => handleAbilityChange(catKey, trait.id, -1)}
                            disabled={val <= 0}
                            className="w-6 h-6 bg-zinc-900 border border-zinc-700 text-zinc-300 rounded flex items-center justify-center font-bold text-xs hover:bg-zinc-800 hover:border-red-500/50 disabled:opacity-30 disabled:hover:bg-zinc-900 transition-colors"
                          >
                            -
                          </button>

                          <div className="flex space-x-1.5 px-2">
                            {DOTS.map((dot) => {
                              const isCreationCap = dot > 3;
                              const isFilled = dot <= val;

                              return (
                                <span
                                  key={dot}
                                  className={`w-3 h-3 rounded-full border transition-all ${
                                    isFilled
                                      ? 'bg-red-600 border-red-500 shadow-[0_0_8px_rgba(220,38,38,0.9)] scale-105'
                                      : isCreationCap
                                      ? 'bg-zinc-950/40 border-zinc-800/50 opacity-30 cursor-not-allowed'
                                      : 'bg-zinc-950 border-zinc-800'
                                  }`}
                                  title={isCreationCap ? 'Límite de creación inicial (máx. 3)' : `Nivel ${dot}`}
                                />
                              );
                            })}
                          </div>

                          <button
                            onClick={() => handleAbilityChange(catKey, trait.id, 1)}
                            disabled={val >= 3 || remaining <= 0}
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
            </div>
          );
        })}
      </div>

      {showSecondary && (
        <div className="bg-black/90 p-5 rounded-lg border border-red-900/50 space-y-4">
          <span className="text-xs font-bold text-red-400 uppercase tracking-wider block">
            Habilidades Secundarias (Secondary Abilities - M20 Optional Rules)
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {SECONDARY_ABILITIES.map((sec) => {
              const val = character.abilities[sec.id] || 0;
              return (
                <div key={sec.id} className="p-2.5 bg-zinc-950 rounded border border-zinc-900 space-y-1">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-semibold text-zinc-200">{sec.name}</span>
                    <div className="flex items-center space-x-1">
                      <button
                        onClick={() => handleAbilityChange('talents', sec.id, -1)}
                        disabled={val <= 0}
                        className="w-5 h-5 bg-zinc-900 border text-zinc-300 rounded text-xs"
                      >
                        -
                      </button>
                      <span className="font-mono text-red-400 px-1">{val}</span>
                      <button
                        onClick={() => handleAbilityChange('talents', sec.id, 1)}
                        disabled={val >= 3}
                        className="w-5 h-5 bg-zinc-900 border text-zinc-300 rounded text-xs"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <p className="text-xs text-zinc-500 italic">{sec.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}