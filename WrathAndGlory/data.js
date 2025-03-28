// --- DATA ---
// This needs to be populated extensively from the rulebook

const archetypes = [
    // Tier 1 Examples
    {
        name: "Imperial Guardsman", tier: 1, species: "Human", faction: "Astra Militarum",
        keywords: ["IMPERIUM", "ASTRA MILITARUM", "[REGIMENT]"],
        attributes: { willpower: 0, intellect: 0 }, // Base bonuses if any (usually 0, spend XP)
        skills: { ballistic: 2 }, // Base skill bonuses if any
        ability: "Look Out, Sir! +Rank bonus dice to resist Fear",
        wargear: ["Flak Armour", "Lasgun", "Knife", "Munitorum issue mess kit", "Grooming kit", "Uplifting Primer", "3 ration packs"],
        influence: 0
    },
    {
        name: "Ministorum Priest", tier: 1, species: "Human", faction: "Adeptus Ministorum",
        keywords: ["IMPERIUM", "ADEPTUS MINISTORUM"],
        attributes: { willpower: 3 },
        skills: { scholar: 1 },
        ability: "Fiery Invective: Preach as Free Action once per combat. Allies heal 1d3+Rank Shock.",
        wargear: ["Chainsword", "Laspistol", "Rosarius", "Knife", "Ministorum Robes", "Missionary Kit"],
        influence: 0
    },
     {
        name: "Ork Boy", tier: 1, species: "Ork", faction: "Ork",
        keywords: ["ORK", "[CLAN]"],
        attributes: { strength: 3, toughness: 3 },
        skills: { weaponSkill: 2 },
        ability: "Get Stuck In: +Rank bonus dice to melee attacks for every ally engaged with the same target.",
        wargear: ["Shoota", "Slugga", "Choppa", "Ripped clothes"],
        influence: 0
    },
    // Tier 2 Examples
    {
        name: "Sister of Battle", tier: 2, species: "Human", faction: "Adepta Sororitas",
        keywords: ["IMPERIUM", "ADEPTUS MINISTORUM", "ADEPTA SORORITAS", "[ORDER]"],
        attributes: { strength: 3, toughness: 3, agility: 3, willpower: 3 },
        skills: { ballistic: 2, scholar: 1, weaponSkill: 2 },
        ability: "Purity of Faith: +Double Rank bonus dice to Corruption Tests and vs psychic powers.",
        wargear: ["Sororitas Power Armour", "Chaplet Ecclesiasticus", "Sororitas Vestments", "Writing Kit", "Rule of the Sororitas", "Choice: Boltgun OR Bolt Pistol & Chainsword"],
        influence: 1
    },
     {
        name: "Space Marine Scout", tier: 2, species: "Adeptus Astartes", faction: "Adeptus Astartes",
        keywords: ["IMPERIUM", "ADEPTUS ASTARTES", "[CHAPTER]"],
        attributes: { strength: 4, toughness: 4, agility: 4, initiative: 4, willpower: 3, intellect: 3 },
        skills: { athletics: 3, awareness: 3, ballistic: 3, stealth: 3, weaponSkill: 3 },
        ability: "Use the Terrain: +Rank to Stealth (A) Test when there is terrain.",
        wargear: ["Scout Armour", "Astartes Combat Knife", "3 Frag Grenades", "Vox Bead", "Choice: Boltgun OR Bolt Pistol & Chainsword OR Astartes Shotgun OR Astartes Sniper Rifle & Cameleoline Cloak"],
        influence: 1
    },
     // Add Tier 3 and 4 Archetypes...
];

const attributesList = ["Strength", "Toughness", "Agility", "Initiative", "Willpower", "Intellect", "Fellowship"];
const skillsList = ["Athletics (S)", "Awareness (Int)", "Ballistic Skill (A)", "Cunning (Fel)", "Deception (Fel)", "Insight (Fel)", "Intimidation (Wil)", "Investigation (Int)", "Leadership (Wil)", "Medicae (Int)", "Persuasion (Fel)", "Pilot (A)", "Psychic Mastery (Wil)", "Scholar (Int)", "Stealth (A)", "Survival (Wil)", "Tech (Int)", "Weapon Skill (I)"];

// SIMPLIFIED XP Costs for demonstration
const attributeCosts = {
    // Rating: Incremental Cost
    2: 4, 3: 6, 4: 10, 5: 15, 6: 20, 7: 25, 8: 30 // Simplified
};
const skillCosts = {
    // Rating: Incremental Cost
    1: 2, 2: 4, 3: 6, 4: 8, 5: 10, 6: 12 // Simplified
};