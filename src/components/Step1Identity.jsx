import React from 'react';
import LoreTooltip from './LoreTooltip';
import { 
  SAMPLE_CONCEPTS,
  SUB_FACTIONS, 
  AVATAR_ESSENCES, 
  ARCHETYPES, 
  PARADIGMS, 
  PRACTICES 
} from '../data/identityData';

export default function Step1Identity({ character, setCharacter }) {
  const handleImageUpload = (e) => {
    const file = e.target.files;
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCharacter({ ...character, avatar: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const currentSubFactions = character.affiliation ? SUB_FACTIONS[character.affiliation] : [];

  return (
    <div className="space-y-8">
      {/* 1. Retrato, Nombre y Concepto */}
      <div className="bg-black/90 p-5 rounded-lg border border-zinc-800 space-y-4">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          {/* Avatar Upload */}
          <div className="flex flex-col items-center justify-center shrink-0">
            <span className="text-xs font-bold text-red-400 uppercase tracking-wider mb-2">
              Retrato del Mago
            </span>
            <div className="relative w-28 h-28 bg-zinc-950 border border-zinc-800 rounded-lg overflow-hidden flex items-center justify-center group shadow-md">
              {character.avatar ? (
                <img src={character.avatar} alt="Avatar" className="w-full h-full object-cover" />
              ) : (
                <span className="text-zinc-600 text-[11px] italic text-center p-2">Haz clic para Subir Foto</span>
              )}
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
            </div>
          </div>

          <div className="flex-1 space-y-3 w-full">
            <div>
              <label className="block text-xs font-bold text-red-400 uppercase tracking-wider mb-1">
                Nombre del Personaje
              </label>
              <input
                type="text"
                placeholder="ej. Jacobo Alforte"
                value={character.name || ''}
                onChange={(e) => setCharacter({ ...character, name: e.target.value })}
                className="w-full bg-zinc-950 border border-zinc-800 rounded p-2 text-xs text-zinc-100 focus:border-red-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-red-400 uppercase tracking-wider mb-1">
                Concepto (Concept)
              </label>
              <input
                type="text"
                placeholder="Selecciona abajo o escribe tu concepto propio..."
                value={character.concept || ''}
                onChange={(e) => setCharacter({ ...character, concept: e.target.value })}
                className="w-full bg-zinc-950 border border-zinc-800 rounded p-2 text-xs text-zinc-100 focus:border-red-500 focus:outline-none mb-2"
              />
            </div>
          </div>
        </div>

        {/* Tarjetas de Sugerencia de Concepto */}
        <div>
          <span className="text-[11px] text-zinc-500 font-semibold block mb-2">
            Sugerencias de Conceptos Oficiales M20:
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-2">
            {SAMPLE_CONCEPTS.map((c) => (
              <button
                key={c.id}
                onClick={() => setCharacter({ ...character, concept: c.name })}
                className={`p-2 rounded border text-[11px] font-medium transition-all text-left ${
                  character.concept === c.name
                    ? 'bg-red-950/70 border-red-500 text-red-400 shadow-[0_0_10px_rgba(220,38,38,0.3)]'
                    : 'bg-zinc-950 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200'
                }`}
                title={c.desc}
              >
                {c.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 2. Selección de Afiliación Principal */}
      <div className="space-y-3">
        <label className="block text-xs font-bold text-red-400 uppercase tracking-wider">
          1. Selecciona tu Afiliación Principal (Affiliation)
        </label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {[
            { id: 'traditions', title: 'Las Nueve Tradiciones', desc: 'Defensores de la magia mística, la diversidad de paradigmas y el libre albedrío.' },
            { id: 'technocracy', title: 'Unión Tecnocrática', desc: 'Guardianes del orden social, la Ciencia Inspirada y la protección del Consenso.' },
            { id: 'disparates', title: 'Dispares y Huérfanos', desc: 'Gremios independientes y magos autodespertados fuera de las grandes facciones.' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setCharacter({ ...character, affiliation: item.id, subFaction: '' })}
              className={`p-3.5 rounded-lg border text-left space-y-1 transition-all ${
                character.affiliation === item.id
                  ? 'bg-red-950/60 border-red-500 text-red-400 shadow-[0_0_15px_rgba(220,38,38,0.3)]'
                  : 'bg-black/80 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200'
              }`}
            >
              <div className="font-bold text-xs uppercase tracking-wider text-zinc-100">{item.title}</div>
              <div className="text-xs text-zinc-400 leading-snug">{item.desc}</div>
            </button>
          ))}
        </div>
      </div>

      {/* 3. Selección de Sub-facción (Tradición / Convención / Gremio) */}
      {character.affiliation && (
        <div className="bg-black/90 p-5 rounded-lg border border-red-900/50 space-y-3">
          <label className="block text-xs font-bold text-red-400 uppercase tracking-wider">
            2. Elige tu Sub-facción (Tradición, Convención o Gremio)
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {currentSubFactions.map((sub) => (
              <button
                key={sub.id}
                onClick={() => setCharacter({ ...character, subFaction: sub.name })}
                className={`p-3 rounded border text-left space-y-1 transition-all ${
                  character.subFaction === sub.name
                    ? 'bg-red-950/80 border-red-500 text-red-400 shadow-[0_0_12px_rgba(220,38,38,0.4)]'
                    : 'bg-zinc-950 border-zinc-800/80 text-zinc-300 hover:border-zinc-700'
                }`}
              >
                <div className="flex justify-between items-center">
                  <span className="font-bold text-xs text-zinc-100">{sub.name}</span>
                  <span className="text-[10px] font-mono text-red-400 bg-red-950/40 px-1 py-0.5 rounded border border-red-900/40">
                    {sub.sphere}
                  </span>
                </div>
                <p className="text-xs text-zinc-400 italic leading-snug">{sub.desc}</p>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* 4. Esencia del Avatar */}
      <div className="space-y-3">
        <label className="block text-xs font-bold text-red-400 uppercase tracking-wider">
          3. Esencia del Avatar (Essence)
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
          {AVATAR_ESSENCES.map((ess) => (
            <button
              key={ess.id}
              onClick={() => setCharacter({ ...character, essence: ess.name })}
              className={`p-3 rounded-lg border text-left space-y-1 transition-all ${
                character.essence === ess.name
                  ? 'bg-red-950/70 border-red-500 text-red-400 shadow-[0_0_12px_rgba(220,38,38,0.3)]'
                  : 'bg-black/80 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200'
              }`}
            >
              <div className="font-bold text-xs text-zinc-200">{ess.name}</div>
              <p className="text-xs text-zinc-500 leading-snug">{ess.desc}</p>
            </button>
          ))}
        </div>
      </div>

      {/* 5. Arquetipos (Nature & Demeanor) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-black/80 p-4 rounded-lg border border-zinc-800">
        <div>
          <label className="block text-xs font-bold text-red-400 uppercase tracking-wider mb-2">
            Naturaleza (Nature - Verdadero Yo)
          </label>
          <select
            value={character.nature || ''}
            onChange={(e) => setCharacter({ ...character, nature: e.target.value })}
            className="w-full bg-zinc-950 border border-zinc-800 text-xs text-zinc-200 rounded p-2 focus:border-red-500 focus:outline-none mb-2"
          >
            <option value="">-- Selecciona Naturaleza --</option>
            {ARCHETYPES.map((arch) => (
              <option key={arch.id} value={arch.name}>{arch.name}</option>
            ))}
          </select>
          <p className="text-xs text-zinc-500 italic">Determina cómo recuperas puntos de Fuerza de Voluntad.</p>
        </div>

        <div>
          <label className="block text-xs font-bold text-red-400 uppercase tracking-wider mb-2">
            Conducta (Demeanor - Máscara Social)
          </label>
          <select
            value={character.demeanor || ''}
            onChange={(e) => setCharacter({ ...character, demeanor: e.target.value })}
            className="w-full bg-zinc-950 border border-zinc-800 text-xs text-zinc-200 rounded p-2 focus:border-red-500 focus:outline-none mb-2"
          >
            <option value="">-- Selecciona Conducta --</option>
            {ARCHETYPES.map((arch) => (
              <option key={arch.id} value={arch.name}>{arch.name}</option>
            ))}
          </select>
          <p className="text-xs text-zinc-500 italic">La personalidad que muestras públicamente a los demás.</p>
        </div>
      </div>

      {/* 6. Enfoque Mágico (Paradigma y Práctica) */}
      <div className="space-y-4 bg-black/90 p-5 rounded-lg border border-zinc-800">
        <span className="text-xs font-bold text-red-400 uppercase tracking-wider block">
          Enfoque Mágico (Focus: Paradigm & Practice)
        </span>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Paradigma */}
          <div className="space-y-2">
            <label className="block text-xs font-semibold text-zinc-300">
              Paradigma (Creencia sobre la Realidad)
            </label>
            <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
              {PARADIGMS.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setCharacter({ ...character, paradigm: p.name })}
                  className={`w-full p-2 rounded border text-left space-y-0.5 transition-all ${
                    character.paradigm === p.name
                      ? 'bg-red-950/80 border-red-500 text-red-400'
                      : 'bg-zinc-950 border-zinc-900 text-zinc-400 hover:border-zinc-800'
                  }`}
                >
                  <div className="text-xs font-bold text-zinc-200">{p.name}</div>
                  <p className="text-xs text-zinc-500 leading-snug">{p.desc}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Práctica */}
          <div className="space-y-2">
            <label className="block text-xs font-semibold text-zinc-300">
              Práctica Mágica (Método de Canalización)
            </label>
            <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
              {PRACTICES.map((pr) => (
                <button
                  key={pr.id}
                  onClick={() => setCharacter({ ...character, practice: pr.name })}
                  className={`w-full p-2 rounded border text-left space-y-0.5 transition-all ${
                    character.practice === pr.name
                      ? 'bg-red-950/80 border-red-500 text-red-400'
                      : 'bg-zinc-950 border-zinc-900 text-zinc-400 hover:border-zinc-800'
                  }`}
                >
                  <div className="text-xs font-bold text-zinc-200">{pr.name}</div>
                  <p className="text-xs text-zinc-500 leading-snug">{pr.desc}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
