export const ATTRIBUTE_CATEGORIES = {
  physical: {
    label: 'Físicos (Physical)',
    traits: [
      { id: 'strength', name: 'Fuerza (Strength)', desc: 'Potencia muscular pura y fuerza física.' },
      { id: 'dexterity', name: 'Destreza (Dexterity)', desc: 'Agilidad, reflejos, puntería y coordinación.' },
      { id: 'stamina', name: 'Resistencia (Stamina)', desc: 'Salud, aguante físico y fortaleza biológica.' }
    ]
  },
  social: {
    label: 'Sociales (Social)',
    traits: [
      { id: 'charisma', name: 'Carisma (Charisma)', desc: 'Encanto natural, presencia y magnetismo personal.' },
      { id: 'manipulation', name: 'Manipulación (Manipulation)', desc: 'Habilidad para persuadir, engañar y liderar.' },
      { id: 'appearance', name: 'Apariencia (Appearance)', desc: 'Atractivo visual e impacto de tu presencia.' }
    ]
  },
  mental: {
    label: 'Mentales (Mental)',
    traits: [
      { id: 'perception', name: 'Percepción (Perception)', desc: 'Capacidad de observación, intuición y sentidos.' },
      { id: 'intelligence', name: 'Inteligencia (Intelligence)', desc: 'Razonamiento lógico, memoria y capacidad académica.' },
      { id: 'wits', name: 'Astucia (Wits)', desc: 'Reacción rápida bajo presión y agudeza mental.' }
    ]
  }
};

// Descripciones oficiales extraídas del manual M20 (pp. 273-275)
export const ATTRIBUTE_RATING_DESCRIPTIONS = {
  strength: {
    1: 'Poor: Levantas ~20 kg (40 lbs).',
    2: 'Average: Levantas ~50 kg (100 lbs).',
    3: 'Good: Levantas ~100 kg (250 lbs).',
    4: 'Exceptional: Levantas ~200 kg (400 lbs).',
    5: 'Outstanding: Levantas ~300 kg (650 lbs).'
  },
  dexterity: {
    1: 'Poor: ¡Torpe de dedos! (Fumble-fingers!)',
    2: 'Average: Coordinado para la vida cotidiana.',
    3: 'Good: Ágil de dedos y firme de pies.',
    4: 'Exceptional: Elegancia fluida y gracia animal.',
    5: 'Outstanding: Los gatos te miran con envidia.'
  },
  stamina: {
    1: 'Poor: Frágil y enfermizo.',
    2: 'Average: Típicamente saludable.',
    3: 'Good: Resistente y tenaz.',
    4: 'Exceptional: Construido para el largo recorrido.',
    5: 'Outstanding: Nada parece agotarte.'
  },
  charisma: {
    1: 'Poor: Flor pálida en un papel tapiz insípido.',
    2: 'Average: Pareces lo suficientemente agradable.',
    3: 'Good: La gente se siente atraída hacia ti.',
    4: 'Exceptional: ¡Brillante!',
    5: 'Outstanding: Tu sola presencia inspira confianza, deseo y devoción.'
  },
  manipulation: {
    1: 'Poor: Nadie compra tus mentiras (No one buys your bullshit).',
    2: 'Average: La gente tiende a confiar en lo que dices.',
    3: 'Good: Operador hábil cuando quieres serlo.',
    4: 'Exceptional: Cuando hablas, la gente escucha.',
    5: 'Outstanding: "¡Bailen, mis marionetas, bailen!"'
  },
  appearance: {
    1: 'Poor: "Puaj" ("Ew.").',
    2: 'Average: "Estás bien" ("You\'re okay.").',
    3: 'Good: "¿Eres modelo?" ("Are you a model?").',
    4: 'Exceptional: "Toma mi número" ("Here\'s my number.").',
    5: 'Outstanding: "¡Hazme tu esclavo de amor!"'
  },
  perception: {
    1: 'Poor: "¿Eh? ¿Qué...?"',
    2: 'Average: Ojo típico para lo evidente.',
    3: 'Good: Inusualmente sensible al entorno.',
    4: 'Exceptional: Percepción aguda de tu alrededor.',
    5: 'Outstanding: Más animal que humano.'
  },
  intelligence: {
    1: 'Poor: Una vela de cumpleaños en un mundo halógeno.',
    2: 'Average: Un miembro de la mayoría.',
    3: 'Good: Suficientemente listo para sentarte en la mesa grande.',
    4: 'Exceptional: Totalmente brillante.',
    5: 'Outstanding: La deslumbrante inteligencia de un genio nato.'
  },
  wits: {
    1: 'Poor: Confuso y despistado.',
    2: 'Average: Maestro de lo evidente.',
    3: 'Good: Señor / Señora multitarea.',
    4: 'Exceptional: Tan rápido de mente que superas a los demás.',
    5: 'Outstanding: Un Shiva o Kali mental.'
  }
};