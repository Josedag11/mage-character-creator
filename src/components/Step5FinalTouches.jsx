import React, { useState } from 'react';
import LoreTooltip from './LoreTooltip';
import { SPHERE_RATING_DESCRIPTIONS } from '../data/advantagesData';
import { ATTRIBUTE_CATEGORIES } from '../data/attributesData';
import { ABILITY_CATEGORIES } from '../data/abilitiesData';
import { SPHERES_DATA, BACKGROUNDS_DATA } from '../data/advantagesData';
import { ARCHETYPES } from '../data/identityData';

const DOTS_5 = [1, 2, 3, 4, 5];
const DOTS_3 = [1, 2, 3];
const DOTS_10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function Step5FinalTouches({ character, setCharacter }) {
  const [showSummary, setShowSummary] = useState(false);
  const [activeTab, setActiveTab] = useState('main');

  const freebieSpent = character.freebieSpent || {
    attributes: {},
    abilities: {},
    spheres: {},
    backgrounds: {},
    arete: 0,
    willpower: 0
  };

  // Cálculo de Freebies gastados
  const spentArete = (freebieSpent.arete || 0) * 4;
  const spentWillpower = (freebieSpent.willpower || 0) * 1;
  const spentAttributes = Object.values(freebieSpent.attributes || {}).reduce((a, b) => a + (b || 0) * 5, 0);
  const spentAbilities = Object.values(freebieSpent.abilities || {}).reduce((a, b) => a + (b || 0) * 2, 0);
  const spentSpheres = Object.values(freebieSpent.spheres || {}).reduce((a, b) => a + (b || 0) * 7, 0);
  const spentBackgrounds = Object.values(freebieSpent.backgrounds || {}).reduce((a, b) => a + (b || 0) * 1, 0);

  const totalSpent = spentArete + spentWillpower + spentAttributes + spentAbilities + spentSpheres + spentBackgrounds;
  const remainingFreebie = 15 - totalSpent;

  // Obtener descripción de regeneración de Voluntad según la Naturaleza
  const currentNatureObj = ARCHETYPES.find(a => a.name === character.nature);

  const handleCoreChange = (trait, delta, cost, maxCap) => {
    const currentBonus = freebieSpent[trait] || 0;
    const newBonus = currentBonus + delta;
    if (newBonus < 0) return;

    const currentTotal = (trait === 'arete' ? 1 : 5) + newBonus;
    if (currentTotal > maxCap) return;
    if (delta > 0 && remainingFreebie < cost) return;

    setCharacter({
      ...character,
      [trait]: currentTotal,
      freebieSpent: { ...freebieSpent, [trait]: newBonus }
    });
  };

  const handleGenericChange = (category, traitId, delta, cost, maxCap, baseVal) => {
    const catBonus = freebieSpent[category] || {};
    const currentBonus = catBonus[traitId] || 0;
    const newBonus = currentBonus + delta;
    if (newBonus < 0) return;

    const currentTotal = baseVal + newBonus;
    if (currentTotal > maxCap) return;
    if (delta > 0 && remainingFreebie < cost) return;

    const updatedCatBonus = { ...catBonus, [traitId]: newBonus };
    const updatedCharacterMap = { ...character[category], [traitId]: currentTotal };

    setCharacter({
      ...character,
      [category]: updatedCharacterMap,
      freebieSpent: { ...freebieSpent, [category]: updatedCatBonus }
    });
  };
  
// 1. Exportar personaje como archivo JSON (para guardarlo o recargarlo después)
const handleExportJSON = () => {
  const fileName = `${(character.name || 'personaje_m20').toLowerCase().replace(/\s+/g, '_')}.json`;
  const jsonStr = JSON.stringify(character, null, 2);
  const blob = new Blob([jsonStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

// 2. Exportar como PDF o Imprimir usando el diálogo nativo del navegador
const handlePrintPDF = () => {
  window.print();
};

 if (showSummary) {
    return (
      <div className="space-y-6 animate-fadeIn">
        {/* Cabecera de la Hoja con Botones de Exportación */}
        <div className="flex flex-col sm:flex-row justify-between items-center border-b border-amber-600/30 pb-3 gap-3 no-print">
          <h2 className="text-xl font-bold text-amber-400 font-cinzel tracking-wider uppercase">
            📜 Hoja de Personaje Final (M20)
          </h2>
          
          <div className="flex flex-wrap gap-2">
            <button
              onClick={handleExportJSON}
              className="bg-purple-950/80 hover:bg-purple-900 border border-purple-700/60 text-amber-300 px-3 py-1.5 rounded text-xs font-bold font-cinzel transition-all flex items-center gap-1 shadow-sm"
            >
              📥 Descargar JSON
            </button>
            
            <button
              onClick={handlePrintPDF}
              className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-slate-950 font-bold px-3 py-1.5 rounded text-xs font-cinzel transition-all shadow-[0_0_12px_rgba(245,158,11,0.3)] flex items-center gap-1"
            >
              🖨️ Exportar a PDF / Imprimir
            </button>
            
            <button
              onClick={() => setShowSummary(false)}
              className="bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-700 px-3 py-1.5 rounded text-xs font-bold uppercase font-cinzel transition-all"
            >
              ← Volver a Gastar Puntos
            </button>
          </div>
        </div>

        {/* Ficha Completa Estilo World of Darkness */}
        <div className="bg-black/95 p-6 rounded-lg border border-red-900/60 space-y-6 shadow-[0_0_25px_rgba(220,38,38,0.2)]">
          
          {/* 1. Cabecera Principal con Retrato */}
          <div className="flex flex-col md:flex-row gap-5 items-center border-b border-zinc-800 pb-5">
            <div className="w-28 h-28 bg-zinc-950 border border-red-900/60 rounded-lg overflow-hidden shrink-0 flex items-center justify-center p-1 shadow-inner">
              {character.avatar ? (
                <img src={character.avatar} alt={character.name} className="w-full h-full object-cover rounded" />
              ) : (
                <span className="text-zinc-600 text-xs italic text-center">Sin Retrato</span>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-1 w-full text-left text-xs">
              <div>
                <span className="text-zinc-500 font-bold block uppercase">Nombre:</span>
                <span className="text-base font-bold text-red-400">{character.name || 'Sin Nombre'}</span>
              </div>
              <div>
                <span className="text-zinc-500 font-bold block uppercase">Concepto:</span>
                <span className="text-sm font-semibold text-zinc-200">{character.concept || 'Sin Concepto'}</span>
              </div>
              <div>
                <span className="text-zinc-500 font-bold block uppercase">Afiliación / Sub-facción:</span>
                <span className="text-sm font-semibold text-red-400 capitalize">
                  {character.affiliation || 'Sin Afiliación'} 
                  {character.subFaction ? ` — ${character.subFaction}` : ''}
                </span>
              </div>
            </div>
          </div>

          {/* 2. Filosofía y Misticismo (Paradigma, Práctica, Esencia y Arquetipos) */}
          <div className="bg-zinc-950 p-4 rounded border border-zinc-800 space-y-3 text-xs">
            <span className="text-red-500 font-bold uppercase tracking-wider block border-b border-zinc-900 pb-1">
              Perfil Filosófico y Místico (Enfoque)
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <span className="text-zinc-500 font-bold block">Paradigma:</span>
                <p className="text-zinc-200 font-medium">{character.paradigm || 'No seleccionado'}</p>
              </div>
              <div>
                <span className="text-zinc-500 font-bold block">Práctica Mágica:</span>
                <p className="text-zinc-200 font-medium">{character.practice || 'No seleccionada'}</p>
              </div>
              <div>
                <span className="text-zinc-500 font-bold block">Esencia del Avatar:</span>
                <p className="text-zinc-200 font-medium">{character.essence || 'No seleccionada'}</p>
              </div>
              <div>
                <span className="text-zinc-500 font-bold block">Naturaleza / Conducta:</span>
                <p className="text-zinc-200 font-medium">
                  {character.nature || 'N/A'} (Naturaleza) / {character.demeanor || 'N/A'} (Conducta)
                </p>
              </div>
            </div>

            {currentNatureObj && (
              <div className="mt-2 p-2 bg-red-950/30 border border-red-900/40 rounded text-xs text-red-400/90 italic">
                💡 <strong>Regla de Voluntad ({character.nature}):</strong> {currentNatureObj.desc}
              </div>
            )}
          </div>

          {/* 3. Rasgos místico-vitales */}
          <div className="grid grid-cols-3 gap-4 text-center bg-zinc-950 p-4 rounded border border-zinc-800">
            <div>
              <span className="text-xs font-bold text-red-500 uppercase block">Areté</span>
              <span className="text-2xl font-mono font-bold text-red-400">{character.arete || 1}</span>
            </div>
            <div>
              <span className="text-xs font-bold text-red-500 uppercase block">Fuerza de Voluntad</span>
              <span className="text-2xl font-mono font-bold text-red-400">{character.willpower || 5}</span>
            </div>
            <div>
              <span className="text-xs font-bold text-red-500 uppercase block">Quintaesencia</span>
              <span className="text-2xl font-mono font-bold text-red-400">{character.backgrounds?.avatar || 0}</span>
            </div>
          </div>

          {/* 4. Atributos */}
          <div>
            <h3 className="text-xs font-bold text-red-500 uppercase tracking-wider mb-2 border-b border-zinc-800 pb-1">
              Atributos
            </h3>
            <div className="grid grid-cols-3 gap-4 text-xs">
              <div>
                <strong className="text-zinc-400 block mb-1">Físicos:</strong>
                <p>Fuerza: {character.attributes.strength}</p>
                <p>Destreza: {character.attributes.dexterity}</p>
                <p>Resistencia: {character.attributes.stamina}</p>
              </div>
              <div>
                <strong className="text-zinc-400 block mb-1">Sociales:</strong>
                <p>Carisma: {character.attributes.charisma}</p>
                <p>Manipulación: {character.attributes.manipulation}</p>
                <p>Apariencia: {character.attributes.appearance}</p>
              </div>
              <div>
                <strong className="text-zinc-400 block mb-1">Mentales:</strong>
                <p>Percepción: {character.attributes.perception}</p>
                <p>Inteligencia: {character.attributes.intelligence}</p>
                <p>Astucia: {character.attributes.wits}</p>
              </div>
            </div>
          </div>

          {/* 5. Habilidades */}
          <div>
            <h3 className="text-xs font-bold text-red-500 uppercase tracking-wider mb-2 border-b border-zinc-800 pb-1">
              Habilidades
            </h3>
            <div className="grid grid-cols-3 gap-4 text-xs">
              {Object.keys(ABILITY_CATEGORIES).map((catKey) => {
                const known = ABILITY_CATEGORIES[catKey].traits.filter((t) => (character.abilities[t.id] || 0) > 0);
                return (
                  <div key={catKey}>
                    <strong className="text-zinc-400 block mb-1">{ABILITY_CATEGORIES[catKey].label}:</strong>
                    {known.length > 0 ? (
                      known.map((t) => (
                        <p key={t.id}>{t.name}: {character.abilities[t.id]}</p>
                      ))
                    ) : (
                      <p className="text-zinc-600 italic">Ninguna</p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* 6. Esferas Mágicas Dominadas */}
          <div>
            <h3 className="text-xs font-bold text-red-500 uppercase tracking-wider mb-2 border-b border-zinc-800 pb-1">
              Esferas Mágicas Dominadas
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
              {Object.entries(character.spheres || {}).map(([key, val]) => (
                val > 0 && (
                  <div key={key} className="bg-zinc-950 p-2.5 rounded border border-zinc-800 space-y-1">
                    <div className="flex justify-between font-bold">
                      <span className="capitalize text-red-400">{key}</span>
                      <span className="font-mono text-zinc-300">{val} dots</span>
                    </div>
                    <p className="text-xs text-zinc-500 italic">
                      {SPHERE_RATING_DESCRIPTIONS[key]?.[val] || `Rango ${val}`}
                    </p>
                  </div>
                )
              ))}
            </div>
          </div>

          {/* 7. Trasfondos Adquiridos */}
          {Object.values(character.backgrounds || {}).some(v => v > 0) && (
            <div>
              <h3 className="text-xs font-bold text-red-500 uppercase tracking-wider mb-2 border-b border-zinc-800 pb-1">
                Trasfondos (Backgrounds)
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
                {Object.entries(character.backgrounds || {}).map(([key, val]) => (
                  val > 0 && (
                    <div key={key} className="bg-zinc-950 p-2 rounded border border-zinc-900 flex justify-between">
                      <span className="capitalize text-zinc-300">{key}</span>
                      <span className="font-bold text-red-400">{val} pts</span>
                    </div>
                  )
                ))}
              </div>
            </div>
          )}

        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Banner de Puntos Gratuitos */}
      <div className="bg-black/80 p-4 rounded-lg border border-zinc-800 text-sm text-zinc-300 flex justify-between items-center">
        <div>
          <span className="text-red-400 font-bold uppercase tracking-wider text-xs block mb-1">
            Toques Finales: Puntos Gratuitos (Freebie Points)
          </span>
          Tienes <strong className="text-red-400 font-bold">15 Puntos Gratuitos</strong> para personalizar cualquier rasgo según la tabla oficial de costes de M20.
        </div>
        <span className={`text-xs font-mono font-bold px-3 py-1.5 rounded border ${
          remainingFreebie === 0 
            ? 'text-zinc-500 bg-zinc-900 border-zinc-800' 
            : 'text-red-400 bg-red-950/60 border-red-800/50'
        }`}>
          {remainingFreebie} freebies restantes
        </span>
      </div>

      {/* Selector de Pestañas de Gasto */}
      <div className="flex space-x-2 border-b border-zinc-800 pb-2 overflow-x-auto">
        {[
          { id: 'main', label: 'Areté & Voluntad' },
          { id: 'attributes', label: 'Atributos (5 pts)' },
          { id: 'abilities', label: 'Habilidades (2 pts)' },
          { id: 'spheres', label: 'Esferas (7 pts)' },
          { id: 'backgrounds', label: 'Trasfondos (1 pt)' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-3 py-1.5 rounded text-xs font-bold transition-all whitespace-nowrap ${
              activeTab === tab.id
                ? 'bg-red-950/70 border border-red-500 text-red-400'
                : 'bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-zinc-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Pestaña Principal: Areté y Fuerza de Voluntad */}
      {activeTab === 'main' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Areté */}
          <div className="bg-black/90 p-4 rounded-lg border border-zinc-800 space-y-3">
            <div className="flex justify-between items-center">
              <div>
                <span className="text-xs font-bold text-red-400 uppercase tracking-wider block">
                  <LoreTooltip termKey="arete">Areté</LoreTooltip>
                </span>
                <span className="text-[10px] text-zinc-500">Coste: 4 Freebies / dot (Máx. 3 en creación)</span>
              </div>
              <span className="text-sm font-mono font-bold text-red-400 bg-red-950/40 px-2 py-0.5 rounded border border-red-900/40">
                {character.arete || 1} / 3
              </span>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-zinc-900">
              <button
                onClick={() => handleCoreChange('arete', -1, 4, 3)}
                disabled={(freebieSpent.arete || 0) <= 0}
                className="w-7 h-7 bg-zinc-900 border border-zinc-700 text-zinc-300 rounded font-bold hover:bg-zinc-800 disabled:opacity-30"
              >
                -
              </button>

              <div className="flex space-x-2">
                {DOTS_3.map((dot) => (
                  <span
                    key={dot}
                    className={`w-3.5 h-3.5 rounded-full border transition-all ${
                      dot <= (character.arete || 1)
                        ? 'bg-red-600 border-red-500 shadow-[0_0_8px_rgba(220,38,38,0.9)] scale-105'
                        : 'bg-zinc-950 border-zinc-800'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={() => handleCoreChange('arete', 1, 4, 3)}
                disabled={(character.arete || 1) >= 3 || remainingFreebie < 4}
                className="w-7 h-7 bg-zinc-900 border border-zinc-700 text-zinc-300 rounded font-bold hover:bg-zinc-800 disabled:opacity-30"
              >
                +
              </button>
            </div>
          </div>

          {/* Fuerza de Voluntad */}
          <div className="bg-black/90 p-4 rounded-lg border border-zinc-800 space-y-3">
            <div className="flex justify-between items-center">
              <div>
                <span className="text-xs font-bold text-red-400 uppercase tracking-wider block">
                  <LoreTooltip termKey="willpower">Fuerza de Voluntad (Willpower)</LoreTooltip>
                </span>
                <span className="text-[10px] text-zinc-500">Coste: 1 Freebie / dot (Base 5, Máx. 10)</span>
              </div>
              <span className="text-sm font-mono font-bold text-red-400 bg-red-950/40 px-2 py-0.5 rounded border border-red-900/40">
                {character.willpower || 5} / 10
              </span>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-zinc-900">
              <button
                onClick={() => handleCoreChange('willpower', -1, 1, 10)}
                disabled={(freebieSpent.willpower || 0) <= 0}
                className="w-7 h-7 bg-zinc-900 border border-zinc-700 text-zinc-300 rounded font-bold hover:bg-zinc-800 disabled:opacity-30"
              >
                -
              </button>

              <div className="flex space-x-1.5">
                {DOTS_10.map((dot) => (
                  <span
                    key={dot}
                    className={`w-2.5 h-2.5 rounded-full border transition-all ${
                      dot <= (character.willpower || 5)
                        ? 'bg-red-600 border-red-500 shadow-[0_0_6px_rgba(220,38,38,0.9)]'
                        : 'bg-zinc-950 border-zinc-800'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={() => handleCoreChange('willpower', 1, 1, 10)}
                disabled={(character.willpower || 5) >= 10 || remainingFreebie < 1}
                className="w-7 h-7 bg-zinc-900 border border-zinc-700 text-zinc-300 rounded font-bold hover:bg-zinc-800 disabled:opacity-30"
              >
                +
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Pestaña: Atributos */}
      {activeTab === 'attributes' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Object.keys(ATTRIBUTE_CATEGORIES).map((catKey) => (
            <div key={catKey} className="bg-black/90 p-3.5 rounded-lg border border-zinc-800 space-y-3">
              <span className="text-xs font-bold text-red-400 uppercase tracking-wider block">
                {ATTRIBUTE_CATEGORIES[catKey].label}
              </span>
              <div className="space-y-2">
                {ATTRIBUTE_CATEGORIES[catKey].traits.map((t) => {
                  const val = character.attributes[t.id] || 1;
                  const bonus = (freebieSpent.attributes || {})[t.id] || 0;
                  return (
                    <div key={t.id} className="flex justify-between items-center text-xs p-2 bg-zinc-950 rounded border border-zinc-900">
                      <span className="text-zinc-200">{t.name}</span>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => handleGenericChange('attributes', t.id, -1, 5, 5, val - bonus)}
                          disabled={bonus <= 0}
                          className="w-5 h-5 bg-zinc-900 border text-zinc-300 rounded"
                        >
                          -
                        </button>
                        <span className="font-mono text-red-400 font-bold">{val}</span>
                        <button
                          onClick={() => handleGenericChange('attributes', t.id, 1, 5, 5, val - bonus)}
                          disabled={val >= 5 || remainingFreebie < 5}
                          className="w-5 h-5 bg-zinc-900 border text-zinc-300 rounded"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Pestaña: Habilidades */}
      {activeTab === 'abilities' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Object.keys(ABILITY_CATEGORIES).map((catKey) => (
            <div key={catKey} className="bg-black/90 p-3.5 rounded-lg border border-zinc-800 space-y-3">
              <span className="text-xs font-bold text-red-400 uppercase tracking-wider block">
                {ABILITY_CATEGORIES[catKey].label}
              </span>
              <div className="space-y-2">
                {ABILITY_CATEGORIES[catKey].traits.map((t) => {
                  const val = character.abilities[t.id] || 0;
                  const bonus = (freebieSpent.abilities || {})[t.id] || 0;
                  return (
                    <div key={t.id} className="flex justify-between items-center text-xs p-2 bg-zinc-950 rounded border border-zinc-900">
                      <span className="text-zinc-200">{t.name}</span>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => handleGenericChange('abilities', t.id, -1, 2, 5, val - bonus)}
                          disabled={bonus <= 0}
                          className="w-5 h-5 bg-zinc-900 border text-zinc-300 rounded"
                        >
                          -
                        </button>
                        <span className="font-mono text-red-400 font-bold">{val}</span>
                        <button
                          onClick={() => handleGenericChange('abilities', t.id, 1, 2, 5, val - bonus)}
                          disabled={val >= 5 || remainingFreebie < 2}
                          className="w-5 h-5 bg-zinc-900 border text-zinc-300 rounded"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Pestaña: Esferas */}
      {activeTab === 'spheres' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {SPHERES_DATA.map((s) => {
            const val = character.spheres[s.id] || 0;
            const bonus = (freebieSpent.spheres || {})[s.id] || 0;
            return (
              <div key={s.id} className="bg-black/90 p-3 rounded-lg border border-zinc-800 space-y-2">
                <div className="flex justify-between items-center text-xs font-semibold text-zinc-200">
                  <span>{s.name}</span>
                  <span className="font-mono text-red-400 font-bold">{val} / 3</span>
                </div>
                <div className="flex justify-between items-center pt-1 border-t border-zinc-900">
                  <button
                    onClick={() => handleGenericChange('spheres', s.id, -1, 7, 3, val - bonus)}
                    disabled={bonus <= 0}
                    className="w-6 h-6 bg-zinc-900 border text-zinc-300 rounded font-bold"
                  >
                    -
                  </button>
                  <span className="text-[10px] text-zinc-500">Coste: 7 freebies</span>
                  <button
                    onClick={() => handleGenericChange('spheres', s.id, 1, 7, 3, val - bonus)}
                    disabled={val >= 3 || remainingFreebie < 7}
                    className="w-6 h-6 bg-zinc-900 border text-zinc-300 rounded font-bold"
                  >
                    +
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Pestaña: Trasfondos */}
      {activeTab === 'backgrounds' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {BACKGROUNDS_DATA.map((bg) => {
            const val = character.backgrounds[bg.id] || 0;
            const bonus = (freebieSpent.backgrounds || {})[bg.id] || 0;
            return (
              <div key={bg.id} className="bg-black/90 p-3 rounded-lg border border-zinc-800 space-y-2">
                <div className="flex justify-between items-center text-xs font-semibold text-zinc-200">
                  <span>{bg.name}</span>
                  <span className="font-mono text-red-400 font-bold">{val} / 5</span>
                </div>
                <div className="flex justify-between items-center pt-1 border-t border-zinc-900">
                  <button
                    onClick={() => handleGenericChange('backgrounds', bg.id, -1, 1, 5, val - bonus)}
                    disabled={bonus <= 0}
                    className="w-6 h-6 bg-zinc-900 border text-zinc-300 rounded font-bold"
                  >
                    -
                  </button>
                  <span className="text-[10px] text-zinc-500">Coste: 1 freebie</span>
                  <button
                    onClick={() => handleGenericChange('backgrounds', bg.id, 1, 1, 5, val - bonus)}
                    disabled={val >= 5 || remainingFreebie < 1}
                    className="w-6 h-6 bg-zinc-900 border text-zinc-300 rounded font-bold"
                  >
                    +
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Botón para ver Hoja Final */}
      <div className="pt-4 border-t border-zinc-800 text-center">
        <button
          onClick={() => setShowSummary(true)}
          className="bg-red-700 hover:bg-red-600 text-white font-bold py-3 px-8 rounded transition-all shadow-[0_0_20px_rgba(220,38,38,0.4)] uppercase text-xs tracking-wider"
        >
          📜 Ver Hoja de Personaje Completa
        </button>
      </div>
    </div>
  );
}