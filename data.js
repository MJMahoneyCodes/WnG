// --- DATA ---
// Populated with Archetypes from Wrath & Glory Core Rulebook (pp. 91-117)
// NOTE: baseAttributes and baseSkills list the starting ratings granted by the Archetype.
// The provided script.js would need modification to correctly use these base values.

const archetypes = [
    // --- Tier 1 ---
    {
        name: "Sister Hospitaller", tier: 1, species: "Human", faction: "Adepta Sororitas",
        keywords: ["IMPERIUM", "ADEPTUS MINISTORUM", "ADEPTA SORORITAS", "[ORDER]"],
        baseAttributes: { Willpower: 3, Intellect: 3 }, // Base stats granted
        baseSkills: { Medicae: 1, Scholar: 1 },        // Base skills granted
        ability: "Loyal Compassion: +Double Rank bonus dice on Medicae (Int) Test on IMPERIUM target.",
        wargear: ["Sororitas Power Armour", "Chirurgeon’s Tools", "Chain Bayonet (wrist mounted)", "Laspistol", "Sororitas Vestments", "Copy of the Rule of the Sororitas"],
        influence: 0
    },
    {
        name: "Ministorum Priest", tier: 1, species: "Human", faction: "Adeptus Ministorum",
        keywords: ["IMPERIUM", "ADEPTUS MINISTORUM"],
        baseAttributes: { Willpower: 3 },
        baseSkills: { Scholar: 1 },
        ability: "Fiery Invective: Preach as Free Action once per combat. Allies heal 1d3+Rank Shock.",
        wargear: ["Chainsword", "Laspistol", "Rosarius", "Knife", "Ministorum Robes", "Missionary Kit"],
        influence: 0
    },
    {
        name: "Imperial Guardsman", tier: 1, species: "Human", faction: "Astra Militarum",
        keywords: ["IMPERIUM", "ASTRA MILITARUM", "[REGIMENT]"],
        baseAttributes: {},
        baseSkills: { BallisticSkill: 2 },
        ability: "Look Out, Sir!: Reflexive Action to move and take hit for ally. Resilience increases by +Rank for this.",
        wargear: ["Flak Armour", "Lasgun", "Knife", "Munitorum issue mess kit", "Grooming kit", "Uplifting Primer", "3 ration packs"],
        influence: 0
    },
    {
        name: "Inquisitorial Acolyte", tier: 1, species: "Human", faction: "The Inquisition",
        keywords: ["IMPERIUM", "INQUISITION", "[ANY]", "[ORDO]"],
        baseAttributes: {},
        baseSkills: { /* Choose one Skill at 2 */ }, // Player needs to choose
        ability: "Inquisitorial Decree: Invoke Inquisitor name for +Rank bonus dice on social tests vs IMPERIUM.",
        wargear: ["Flak Armour", "Any two IMPERIUM weapons (Value 5/Uncommon or less)", "Symbol of Authority"],
        influence: 0
    },
    {
        name: "Inquisitorial Sage", tier: 1, species: "Human", faction: "The Inquisition",
        keywords: ["IMPERIUM", "ADEPTUS ADMINISTRATUM", "INQUISITION", "[ORDO]"],
        baseAttributes: { Intellect: 3 },
        baseSkills: { Scholar: 2 },
        ability: "Administratum Records: +Rank bonus dice on Influence or Investigation (Int) tests for Imperial info.",
        wargear: ["Administratum Robes", "Laspistol", "Knife", "Auto Quill", "Data-Slate", "3 Scrolls of Ancient Records"],
        influence: 1
    },
    {
        name: "Ganger", tier: 1, species: "Human", faction: "Scum",
        keywords: ["SCUM", "[ANY]"], // [ANY] represents gang affiliation
        baseAttributes: {},
        baseSkills: { Cunning: 1 },
        ability: "Scrounger: +Rank bonus dice to Cunning (Fel) Tests. Once per session, Influence or Cunning Test to acquire item.",
        wargear: ["Knife or Sword", "Bedroll", "Canteen", "Gang colours", "Choice: Laspistol OR Autopistol OR Hand Cannon OR Stubber"],
        influence: 1
    },
    {
        name: "Corsair", tier: 1, species: "Aeldari", faction: "Aeldari",
        keywords: ["AELDARI", "ANHRATHE", "[COTERIE]"],
        baseAttributes: { Agility: 3 },
        baseSkills: { Athletics: 2 },
        ability: "Dancing on the Blade’s Edge: +Rank bonus dice on Athletics (S) or Persuasion (Fel) Interaction Attacks. +1 DN penalty to Fear Tests.",
        wargear: ["Corsair Armour", "Shuriken Pistol", "Lasblaster", "Spirit Stone", "3 Plasma Grenades", "Void Suit"],
        influence: 0
    },
    {
        name: "Ork Boy", tier: 1, species: "Ork", faction: "Ork",
        keywords: ["ORK", "[CLAN]"],
        baseAttributes: { Strength: 3, Toughness: 3 },
        baseSkills: { WeaponSkill: 2 },
        ability: "Get Stuck In: +Rank bonus dice to melee attacks for every ally engaged with the same target.",
        wargear: ["Shoota", "Slugga", "Choppa", "Ripped clothes"],
        influence: 0
    },

    // --- Tier 2 ---
    {
        name: "Sister of Battle", tier: 2, species: "Human", faction: "Adepta Sororitas",
        keywords: ["IMPERIUM", "ADEPTUS MINISTORUM", "ADEPTA SORORITAS", "[ORDER]"],
        baseAttributes: { Strength: 3, Toughness: 3, Agility: 3, Willpower: 3 },
        baseSkills: { BallisticSkill: 2, Scholar: 1, WeaponSkill: 2 },
        ability: "Purity of Faith: Allies within 15m gain +Double Rank bonus dice to Corruption Tests & vs psychic powers.",
        wargear: ["Sororitas Power Armour", "Chaplet Ecclesiasticus", "Sororitas Vestments", "Writing Kit", "Rule of the Sororitas", "Choice: Boltgun OR Bolt Pistol & Chainsword"],
        influence: 1
    },
    {
        name: "Sanctioned Psyker", tier: 2, species: "Human", faction: "Adeptus Astra Telepathica",
        keywords: ["IMPERIUM", "ADEPTUS ASTRA TELEPATHICA", "PSYKER", "SCHOLASTIA PSYKANA"],
        baseAttributes: { Willpower: 4 },
        baseSkills: { PsychicMastery: 1 },
        ability: "Psyker: Has PSYKER keyword. Knows Universal Psyker Abilities, 1 Minor Power, Smite. Can buy powers.",
        wargear: ["Laspistol", "Force Stave", "Psykana Mercy Blade", "Munitorum Issue Mess Kit", "Blanket", "Grooming kit", "2 Ration packs"],
        influence: 0
    },
    {
        name: "Skitarius", tier: 2, species: "Human", faction: "Adeptus Mechanicus",
        keywords: ["IMPERIUM", "ADEPTUS MECHANICUS", "SKITARII", "[FORGE WORLD]"],
        baseAttributes: { Toughness: 3 },
        baseSkills: { BallisticSkill: 2, Tech: 1 },
        ability: "Heavily Augmented: Immune to Bleeding. Gain +Rank bonus dice to Determination rolls.",
        wargear: ["Combi-Tool", "Galvanic Rifle", "Skitarii Auto-Cuirass"],
        influence: 0
    },
    {
        name: "Death Cult Assassin", tier: 2, species: "Human", faction: "Adeptus Ministorum",
        keywords: ["IMPERIUM", "ADEPTUS MINISTORUM"],
        baseAttributes: { Agility: 4 },
        baseSkills: { WeaponSkill: 2 },
        ability: "Glancing Blow: Use Agility instead of Toughness for Determination vs attacks. Can roll Determination vs Mortal Wounds.",
        wargear: ["Two Death Cult Power Blades", "Bodyglove", "Knife", "Laspistol", "3 doses of Stimm"],
        influence: 1
    },
    {
        name: "Tempestus Scion", tier: 2, species: "Human", faction: "Astra Militarum",
        keywords: ["IMPERIUM", "ASTRA MILITARUM", "MILITARUM TEMPESTUS"],
        baseAttributes: { Strength: 3, Toughness: 3, Agility: 3 },
        baseSkills: { BallisticSkill: 2, Stealth: 2 },
        ability: "Elite Soldier: Spend Glory to increase damage with ASTRA MILITARUM weapon, add +Rank to damage value.",
        wargear: ["Tempestus Carapace", "Hot-Shot Lasgun", "Grav-Chute", "Knife", "Munitorum Issue Mess Kit", "Uplifting Primer", "Slate Monitron", "Monoscope", "3 ration packs"],
        influence: 1
    },
    {
        name: "Rogue Trader", tier: 2, species: "Human", faction: "Rogue Trader Dynasties",
        keywords: ["IMPERIUM", "ROGUE TRADER", "[DYNASTY]"],
        baseAttributes: { Fellowship: 3 },
        baseSkills: { Awareness: 1, Cunning: 1, Insight: 2, Persuasion: 2 },
        ability: "Warrant of Trade: +Rank bonus dice to Persuasion (Fel) & Influence tests.",
        wargear: ["Imperial Frigate", "Choice: Two Wargear (Value Tier+4/Rare or less)", "Choice: Flak Coat OR Carapace Armour OR Light Power Armour"],
        influence: 2
    },
    {
        name: "Scavvy", tier: 2, species: "Human", faction: "Scum",
        keywords: ["SCUM", "[ANY]"], // [ANY] represents mutation origin/gang
        baseAttributes: { Toughness: 2 },
        baseSkills: { Survival: 1 },
        ability: "Mutant: Select two Scavvy Mutations (p.287). Select another per Rank increase.",
        wargear: ["Choice: Laspistol OR Autopistol", "Knife", "Bedroll", "Canteen", "Tattered Clothes"],
        influence: -1
    },
    {
        name: "Space Marine Scout", tier: 2, species: "Adeptus Astartes", faction: "Adeptus Astartes",
        keywords: ["IMPERIUM", "ADEPTUS ASTARTES", "[CHAPTER]"],
        baseAttributes: { Strength: 4, Toughness: 4, Agility: 4, Initiative: 4, Willpower: 3, Intellect: 3 },
        baseSkills: { Athletics: 3, Awareness: 3, BallisticSkill: 3, Stealth: 3, WeaponSkill: 3 },
        ability: "Use the Terrain: +Rank to Stealth (A) Test when there is terrain.",
        wargear: ["Scout Armour", "Astartes Combat Knife", "3 Frag Grenades", "Vox Bead", "Choice: Boltgun OR Bolt Pistol & Chainsword OR Astartes Shotgun OR Astartes Sniper Rifle & Cameleoline Cloak"],
        influence: 1
    },
    {
        name: "Ranger", tier: 2, species: "Aeldari", faction: "Aeldari",
        keywords: ["AELDARI", "ASURYANI"],
        baseAttributes: { Agility: 3 },
        baseSkills: { BallisticSkill: 2, Stealth: 1, Survival: 2 },
        ability: "From the Shadows: Vision Penalty or Cover penalties vs you increase by +Rank DN.",
        wargear: ["Cameleoline Cloak", "Aeldari Mesh Armour", "Ranger Long Rifle", "Shuriken Pistol", "Knife", "Spirit Stone", "Bedroll", "Blanket", "Magnocular Scope"],
        influence: 0
    },
    {
        name: "Kommando", tier: 2, species: "Ork", faction: "Ork",
        keywords: ["ORK", "[CLAN]"],
        baseAttributes: { Strength: 3, Toughness: 3, Agility: 3 },
        baseSkills: { Stealth: 2, Survival: 1, WeaponSkill: 2 },
        ability: "Kunnin' Plan: Allies with ORK keyword within 15m gain +Rank bonus dice to Stealth (A) Tests.",
        wargear: ["Shoota", "Slugga", "Choppa", "3 Stikkbombs", "Survival Kit"],
        influence: 0
    },

    // --- Tier 3 ---
    {
        name: "Tech-Priest", tier: 3, species: "Human", faction: "Adeptus Mechanicus",
        keywords: ["IMPERIUM", "ADEPTUS MECHANICUS", "[FORGE WORLD]"],
        baseAttributes: { Intellect: 3 },
        baseSkills: { Scholar: 1, Tech: 3 },
        ability: "Rite of Repair: +Double Rank to Tech (Int) Tests to repair. Repair Tests take half time.",
        wargear: ["Omnissian Axe", "Laspistol", "One Mechadendrite", "Any 2 Augmetics", "Combi Tool", "Light Power Armour", "Omnissian Sigil"],
        influence: 2
    },
    {
        name: "Crusader", tier: 3, species: "Human", faction: "Adeptus Ministorum",
        keywords: ["IMPERIUM", "ADEPTUS MINISTORUM"],
        baseAttributes: { Initiative: 3, Willpower: 3 },
        baseSkills: { Scholar: 1, WeaponSkill: 3 },
        ability: "Armour of Faith: +Double Rank bonus dice to melee attacks vs CHAOS or HERETIC. Resolve increases by +Rank.",
        wargear: ["Power Sword", "Storm Shield", "Carapace Armour", "Ministorum Robes"],
        influence: 1
    },
    {
        name: "Imperial Commissar", tier: 3, species: "Human", faction: "Astra Militarum",
        keywords: ["IMPERIUM", "ASTRA MILLITARUM", "OFFICIO PREFECTUS"],
        baseAttributes: { Strength: 3, Toughness: 3, Willpower: 4 },
        baseSkills: { BallisticSkill: 1, Intimidation: 2, Leadership: 2, WeaponSkill: 1 },
        ability: "Fearsome Respect: Allies within 15m gain +Double Rank bonus dice to Resolve Tests. +Double Rank bonus dice to Intimidation (Wil) Tests.",
        wargear: ["Bolt Pistol", "Chainsword", "Flak Coat", "Munitorum Issue Mess Kit", "Blanket", "Grooming Kit", "Uplifting Primer", "3 Ration Packs"],
        influence: 3
    },
    {
        name: "Desperado", tier: 3, species: "Human", faction: "Scum",
        keywords: ["SCUM", "[ANY]"], // [ANY] represents background/specialty
        baseAttributes: { Agility: 3, Intellect: 2 },
        baseSkills: { Awareness: 2, Cunning: 2, Investigation: 2 },
        ability: "Valuable Prey: +Rank bonus dice to Cunning (Fel) Tests & Tests to track individual.",
        wargear: ["Flak Coat", "Preysense Goggles", "Maps of the Heartworlds", "Combi-Tool", "Any PROJECTILE weapon", "Any melee weapon (Uncommon or lower)"],
        influence: 1
    },
    {
        name: "Tactical Space Marine", tier: 3, species: "Adeptus Astartes", faction: "Adeptus Astartes",
        keywords: ["IMPERIUM", "ADEPTUS ASTARTES", "[CHAPTER]"],
        baseAttributes: { Strength: 4, Toughness: 5, Agility: 5, Initiative: 5, Willpower: 4, Intellect: 4 },
        baseSkills: { Athletics: 3, Awareness: 3, BallisticSkill: 5, Leadership: 1, Scholar: 1, Stealth: 3, Survival: 1, WeaponSkill: 4 },
        ability: "Tactical Versatility: When making a Critical Hit, may roll twice on table and choose.",
        wargear: ["Aquila Mk VII Power Armour", "Boltgun", "Bolt Pistol", "Astartes Combat Knife", "3 Frag Grenades", "3 Krak Grenades"],
        influence: 2
    },
    {
        name: "Warlock", tier: 3, species: "Aeldari", faction: "Aeldari",
        keywords: ["AELDARI", "ASURYANI", "PSYKER", "[CRAFTWORLD]"],
        baseAttributes: { Agility: 3, Willpower: 4 },
        baseSkills: { PsychicMastery: 2 },
        ability: "Runes of Battle: Has PSYKER keyword. Knows Universal Psyker Abilities, Smite, 1 Runes of Battle power.",
        wargear: ["Rune Armour", "Witchblade", "Shuriken Pistol", "Set of Wraithbone Runes", "Spirit Stone"],
        influence: 2
    },
    {
        name: "Ork Nob", tier: 3, species: "Ork", faction: "Ork",
        keywords: ["ORK", "[CLAN]"],
        baseAttributes: { Strength: 4, Toughness: 3 },
        baseSkills: { Intimidation: 2 },
        ability: "The Green Tide: Commands Mob of Boyz (Rank x3). Can replace dead Boyz between sessions.",
        wargear: ["'Eavy Armour", "Kustom Slugga", "Kustom Choppa"],
        influence: 2
    },

    // --- Tier 4 ---
    {
        name: "Inquisitor", tier: 4, species: "Human", faction: "The Inquisition",
        keywords: ["IMPERIUM", "INQUISITION", "[ORDO]", "[ANY]"], // [ANY] represents personal leaning/specialty
        baseAttributes: { Intellect: 4, Willpower: 4 },
        baseSkills: { /* Choose two Skills at 4 */ }, // Player needs to choose
        ability: "Unchecked Authority: +Double Rank bonus dice on social tests vs IMPERIUM.",
        wargear: ["Inquisitorial Rosette", "Choice: Two weapons (Value 7/Very Rare or less)", "Choice: Flak Coat OR Carapace Armour OR Ignatus Power Armour OR Light Power Armour"],
        influence: 4
    },
    {
        name: "Primaris Intercessor", tier: 4, species: "Primaris Astartes", faction: "Adeptus Astartes",
        keywords: ["IMPERIUM", "ADEPTUS ASTARTES", "PRIMARIS", "[CHAPTER]"],
        baseAttributes: { Strength: 5, Toughness: 6, Agility: 5, Initiative: 5, Willpower: 3, Intellect: 3 },
        baseSkills: { Athletics: 3, Awareness: 3, BallisticSkill: 6, Stealth: 3, WeaponSkill: 3 },
        ability: "Intercessor Focus: +Double Rank bonus dice to Ballistic Skill (A) Tests with PRIMARIS keyword.",
        wargear: ["Mark X Tacticus Power Armour", "Bolt Rifle", "Heavy Bolt Pistol", "Astartes Combat Knife", "3 Frag Grenades", "3 Krak Grenades", "Ballistic Appeasement Autoreliquary"],
        influence: 1
    }
];

// Attributes and Skills lists remain the same as before
const attributesList = ["Strength", "Toughness", "Agility", "Initiative", "Willpower", "Intellect", "Fellowship"];
const skillsList = ["Athletics (S)", "Awareness (Int)", "Ballistic Skill (A)", "Cunning (Fel)", "Deception (Fel)", "Insight (Fel)", "Intimidation (Wil)", "Investigation (Int)", "Leadership (Wil)", "Medicae (Int)", "Persuasion (Fel)", "Pilot (A)", "Psychic Mastery (Wil)", "Scholar (Int)", "Stealth (A)", "Survival (Wil)", "Tech (Int)", "Weapon Skill (I)"];

// SIMPLIFIED XP Costs for demonstration (These would need the full tiered cost logic from W&G)
const attributeCosts = { /* ... Same as before ... */ 2: 4, 3: 6, 4: 10, 5: 15, 6: 20, 7: 25, 8: 30, 9: 35, 10: 40 }; // Added placeholders for higher costs
const skillCosts = { /* ... Same as before ... */ 1: 2, 2: 4, 3: 6, 4: 8, 5: 10, 6: 12, 7: 14, 8: 16 }; // Added placeholders for higher costs