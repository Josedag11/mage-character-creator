import React, { useState } from 'react';
import Step1Identity from './components/Step1Identity';
import Step2Attributes from './components/Step2Attributes';
import Step3Abilities from './components/Step3Abilities';
import Step4Advantages from './components/Step4Advantages';
import Step5FinalTouches from './components/Step5FinalTouches';

export default function App() {
  const [step, setStep] = useState(1);

  const [character, setCharacter] = useState({
    name: '',
    concept: '',
    affiliation: null,
    subFaction: '',
    essence: '',
    nature: '',
    demeanor: '',
    paradigm: '',
    practice: '',
    avatar: null,
    priorities: { physical: 'primary', social: 'secondary', mental: 'tertiary' },
    attributes: {
      strength: 1, dexterity: 1, stamina: 1,
      charisma: 1, manipulation: 1, appearance: 1,
      perception: 1, intelligence: 1, wits: 1
    },
    abilityPriorities: { talents: 'primary', skills: 'secondary', knowledges: 'tertiary' },
    abilities: {},
    spheres: {},
    backgrounds: {},
    arete: 1,
    willpower: 5,
    freebieSpent: {}
  });

  return (
    <div 
  className="min-h-screen text-amber-50 flex flex-col items-center justify-center p-4 sm:p-6 font-garamond relative bg-cover bg-center bg-fixed"
  style={{ 
    backgroundColor: '#07020d',
    backgroundImage: "url('/mage20cover.webp')" 
  }}
>
      {/* Capa de oscurecimiento místico en violeta e índigo */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#07020d]/90 via-[#120822]/95 to-[#07020d]/95 backdrop-blur-[2px] z-0" />

      {/* Contenedor principal con bordes dorados de M20 */}
      <div className="relative z-10 w-full max-w-5xl bg-[#0d0519]/90 border border-amber-600/40 rounded-xl p-6 sm:p-8 shadow-[0_0_40px_rgba(147,51,234,0.25)]">
        
        {/* Encabezado */}
        <header className="border-b border-amber-600/30 pb-4 mb-6 text-center">
          <h1 className="text-3xl sm:text-4xl font-black text-amber-400 font-cinzel tracking-wider uppercase drop-shadow-[0_0_12px_rgba(245,158,11,0.4)]">
            Mago: La Ascensión
          </h1>
          <p className="text-purple-300/80 text-sm mt-1 font-garamond italic">
            Creador de Personajes • {
              step === 1 ? 'Paso 1: Identidad, Misticismo y Paradigma' :
              step === 2 ? 'Paso 2: Atributos (Attributes)' :
              step === 3 ? 'Paso 3: Habilidades (Abilities)' :
              step === 4 ? 'Paso 4: Ventajas (Esferas y Trasfondos)' :
              'Paso 5: Toques Finales & Hoja de Personaje'
            }
          </p>

          {/* Indicador de pasos estilo Orbes Purpúreos */}
          <div className="flex justify-center gap-2 mt-4">
            {[1, 2, 3, 4, 5].map((s) => (
              <span 
                key={s} 
                className={`h-2 rounded-full transition-all ${step === s ? 'w-10 bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.8)]' : 'w-3 bg-purple-950/80 border border-purple-800/40'}`} 
              />
            ))}
          </div>
        </header>

        {/* Pasos */}
        {step === 1 && <Step1Identity character={character} setCharacter={setCharacter} />}
        {step === 2 && <Step2Attributes character={character} setCharacter={setCharacter} />}
        {step === 3 && <Step3Abilities character={character} setCharacter={setCharacter} />}
        {step === 4 && <Step4Advantages character={character} setCharacter={setCharacter} />}
        {step === 5 && <Step5FinalTouches character={character} setCharacter={setCharacter} />}

        {/* Navegación Inferior */}
        <div className="mt-8 pt-4 border-t border-purple-900/40 flex justify-between items-center font-cinzel">
          {step > 1 ? (
            <button
              onClick={() => setStep(step - 1)}
              className="bg-purple-950/80 hover:bg-purple-900/80 border border-purple-700/50 text-amber-200 font-bold py-2.5 px-6 rounded transition-all uppercase text-xs tracking-wider"
            >
              ← Atrás
            </button>
          ) : <div />}

          {step < 5 && (
            <button
              onClick={() => {
                if (step === 1 && !character.affiliation) {
                  alert('Por favor selecciona una Afiliación antes de continuar.');
                  return;
                }
                setStep(step + 1);
              }}
              className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-slate-950 font-bold py-2.5 px-6 rounded transition-all shadow-[0_0_20px_rgba(245,158,11,0.4)] uppercase text-xs tracking-wider"
            >
              Siguiente →
            </button>
          )}
        </div>

      </div>
    </div>
  );
}
