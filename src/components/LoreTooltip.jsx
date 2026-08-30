import React, { useState } from 'react';
import glossary from '../data/glossary.json';

export default function LoreTooltip({ termKey, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const data = glossary[termKey];

  if (!data) return <span>{children}</span>;

  return (
    <span className="relative inline-block">
      <span
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        onClick={() => setIsOpen(!isOpen)}
        className="font-semibold text-red-500 border-b border-dashed border-red-500/60 cursor-help hover:text-red-400 hover:border-red-400 transition-colors px-0.5"
      >
        {children}
      </span>

      {isOpen && (
        <div className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-2 w-80 p-4 bg-zinc-950 border border-red-600/50 rounded-lg shadow-[0_0_25px_rgba(220,38,38,0.3)] text-left pointer-events-none text-xs backdrop-blur-md">
          <div className="text-red-500 font-bold text-sm tracking-wide">{data.title}</div>
          <div className="text-red-300/70 italic mb-2 text-xs">{data.subtitle}</div>
          <p className="text-zinc-300 mb-2 leading-relaxed">{data.summary}</p>
          <div className="bg-black/90 p-2 rounded border border-red-950 mb-2 text-red-400 font-mono text-xs">
            <span className="font-bold text-red-500">Reglas: </span>{data.mechanics}
          </div>
          <p className="text-zinc-400 italic text-xs leading-snug border-t border-zinc-800 pt-1.5">{data.lore}</p>
        </div>
      )}
    </span>
  );
}