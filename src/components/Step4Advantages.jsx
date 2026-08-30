import React from 'react';
import LoreTooltip from './LoreTooltip';
import { 
  SPHERES_DATA, 
  SPHERE_RATING_DESCRIPTIONS, 
  BACKGROUNDS_DATA, 
  BACKGROUND_RATING_DESCRIPTIONS 
} from '../data/advantagesData';

export default function Step4Advantages({ character, setCharacter }) {
  // Puntos gastados en Esferas (máximo 6)
  const spentSpheres = Object.values(character.spheres || {}).reduce((sum, val) => sum + val, 0);
  const remainingSpheres = 6 - spentSpheres;

  // Puntos gastados en Trasfondos (máximo 7)
  const spentBackgrounds = Object.values(character.backgrounds || {}).reduce((sum, val) => sum + val, 0);
  const remainingBackgrounds = 7 - spentBackgrounds;

  const handleSphereChange = (id, delta) => {
    const currentVal = character.spheres[id] || 0;
    const newVal = currentVal + delta;
    if (newVal < 0 || newVal > 3) return; // Límite de creación inicial (máx. 3)

    if (delta > 0 && remainingSpheres <= 0) return;

    setCharacter({
      ...character,
      spheres: { ...character.spheres, [id]: newVal }
    });
  };

  const handleBackgroundChange = (id, delta) => {
    const currentVal = character.backgrounds[id] || 0;
    const newVal = currentVal + delta;
    if (newVal < 0 || newVal > 5) return;

    if (delta > 0 && remainingBackgrounds <= 0) return;

    setCharacter({
      ...character,
      backgrounds: { ...character.backgrounds, [id]: newVal }
    });
  };

  return (
    <div className="space-y-8">
      {/* SECCIÓN 1: ESFERAS */}
      <div className="space-y-4">
        <div className="bg-black/80 p-4 rounded-lg border border-zinc-800 text-sm text-zinc-300 flex justify-between items-center">
          <div>
            <span className="text-red-400 font-bold uppercase tracking-wider text-xs block mb-1">
              Selección de <LoreTooltip termKey="spheres">Las 9 Esferas (Spheres)</LoreTooltip>
            </span>
            Tienes <strong className="text-red-400 font-bold">6 puntos</strong> a repartir. Recuerda asignar al menos <strong className="text-red-400 font-bold">1 punto a tu Esfera de Afinidad</strong>.
          </div>
          <span className={`text-xs font-mono font-bold px-3 py-1 rounded border ${
            remainingSpheres === 0 
              ? 'text-zinc-500 bg-zinc-900 border-zinc-800' 
              : 'text-red-400 bg-red-950/60 border-red-800/50'
          }`}>
            {remainingSpheres} pts restantes
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {SPHERES_DATA.map((sphere) => {
            const val = character.spheres[sphere.id] || 0;
            const desc = SPHERE_RATING_DESCRIPTIONS[sphere.id]?.[val];

            return (
              <div key={sphere.id} className="p-3 bg-black/90 rounded border border-zinc-800 space-y-2 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-1">
                     <span className="text-xs font-semibold text-zinc-200">{sphere.name}</span>
                     <span className="text-xs font-mono font-bold text-red-400 bg-red-950/40 px-1.5 py-0.5 rounded border border-red-900/40 whitespace-nowrap shrink-0 ml-2">
                     {val} / 3
                     </span>
                    </div>

                  <div className="flex items-center justify-between py-1 border-t border-b border-zinc-900 my-1.5">
                    <button
                      onClick={() => handleSphereChange(sphere.id, -1)}
                      disabled={val <= 0}
                      className="w-6 h-6 bg-zinc-900 border border-zinc-700 text-zinc-300 rounded flex items-center justify-center font-bold text-xs hover:bg-zinc-800 hover:border-red-500/50 disabled:opacity-30 disabled:hover:bg-zinc-900 transition-colors"
                    >
                      -
                    </button>

                    {/* Fila de 5 Dots de World of Darkness */}
                    <div className="flex space-x-1.5 px-2">
                      {[1, 2, 3, 4, 5].map((dot) => {
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
                      onClick={() => handleSphereChange(sphere.id, 1)}
                      disabled={val >= 3 || remainingSpheres <= 0}
                      className="w-6 h-6 bg-zinc-900 border border-zinc-700 text-zinc-300 rounded flex items-center justify-center font-bold text-xs hover:bg-zinc-800 hover:border-red-500/50 disabled:opacity-30 disabled:hover:bg-zinc-900 transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>

                {desc && (
                  <div className="text-xs text-red-400/90 font-mono italic pt-1 border-t border-zinc-900">
                    • {desc}
                  </div>
                )}
                <p className="text-xs text-zinc-500 italic leading-snug">{sphere.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* SECCIÓN 2: TRASFONDOS */}
      <div className="space-y-4 pt-4 border-t border-zinc-800/80">
        <div className="bg-black/80 p-4 rounded-lg border border-zinc-800 text-sm text-zinc-300 flex justify-between items-center">
          <div>
            <span className="text-red-400 font-bold uppercase tracking-wider text-xs block mb-1">
              Distribución de Trasfondos (Backgrounds)
            </span>
            Tienes <strong className="text-red-400 font-bold">7 puntos</strong> para adquirir ventajas sociales, recursos y aliados místicos.
          </div>
          <span className={`text-xs font-mono font-bold px-3 py-1 rounded border ${
            remainingBackgrounds === 0 
              ? 'text-zinc-500 bg-zinc-900 border-zinc-800' 
              : 'text-red-400 bg-red-950/60 border-red-800/50'
          }`}>
            {remainingBackgrounds} pts restantes
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {BACKGROUNDS_DATA.map((bg) => {
            const val = character.backgrounds[bg.id] || 0;
            const desc = BACKGROUND_RATING_DESCRIPTIONS[bg.id]?.[val];

            return (
              <div key={bg.id} className="p-3 bg-black/90 rounded border border-zinc-800 space-y-2 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs font-semibold text-zinc-200">{bg.name}</span>
                    <span className="text-xs font-mono font-bold text-red-400 bg-red-950/40 px-1.5 py-0.5 rounded border border-red-900/40 whitespace-nowrap shrink-0 ml-2">
                        {val} / 5
                    </span>
                    </div>

                  <div className="flex items-center justify-between py-1 border-t border-b border-zinc-900 my-1.5">
                    <button
                      onClick={() => handleBackgroundChange(bg.id, -1)}
                      disabled={val <= 0}
                      className="w-6 h-6 bg-zinc-900 border border-zinc-700 text-zinc-300 rounded flex items-center justify-center font-bold text-xs hover:bg-zinc-800 hover:border-red-500/50 disabled:opacity-30 disabled:hover:bg-zinc-900 transition-colors"
                    >
                      -
                    </button>

                    {/* Fila de 5 Dots de World of Darkness */}
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
                      onClick={() => handleBackgroundChange(bg.id, 1)}
                      disabled={val >= 5 || remainingBackgrounds <= 0}
                      className="w-6 h-6 bg-zinc-900 border border-zinc-700 text-zinc-300 rounded flex items-center justify-center font-bold text-xs hover:bg-zinc-800 hover:border-red-500/50 disabled:opacity-30 disabled:hover:bg-zinc-900 transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>

                {desc && (
                  <div className="text-xs text-red-400/90 font-mono italic pt-1 border-t border-zinc-900">
                    • {desc}
                  </div>
                )}
                <p className="text-xs text-zinc-500 italic leading-snug">{bg.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
