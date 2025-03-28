document.addEventListener('DOMContentLoaded', () => {
    const tierSelect = document.getElementById('tierSelect');
    const archetypeSelect = document.getElementById('archetypeSelect');
    const startingXPElement = document.getElementById('startingXP');
    const remainingXPElement = document.getElementById('remainingXP');
    const characterDetailsElement = document.getElementById('characterDetails');
    const customizationElement = document.getElementById('customization');
    const attributesListElement = document.getElementById('attributesList');
    const skillsListElement = document.getElementById('skillsList');
    const outputAreaElement = document.getElementById('outputArea');

    let currentCharacter = {};
    let startingXP = 0;
    let remainingXP = 0;

    // --- Initialization ---
    customizationElement.style.display = 'none'; // Hide customization initially

    // --- Event Listeners ---
    tierSelect.addEventListener('change', handleTierChange);
    archetypeSelect.addEventListener('change', handleArchetypeChange);

    // --- Functions ---
    function handleTierChange() {
        const selectedTier = parseInt(tierSelect.value);
        archetypeSelect.innerHTML = '<option value="">-- Select Archetype --</option>'; // Reset
        archetypeSelect.disabled = true;
        characterDetailsElement.style.display = 'none';
        customizationElement.style.display = 'none';
        outputAreaElement.textContent = "Select an Archetype to begin...";


        if (!selectedTier) {
            startingXP = 0;
            remainingXP = 0;
            updateXPDisplay();
            return;
        }

        startingXP = selectedTier * 100; // W&G starting XP rule
        remainingXP = startingXP;
        updateXPDisplay();

        populateArchetypes(selectedTier);
        archetypeSelect.disabled = false;
        characterDetailsElement.style.display = 'block'; // Show details box but empty
        clearCharacterDetails();
    }

    function populateArchetypes(tier) {
        const filteredArchetypes = archetypes.filter(arch => arch.tier === tier);
        filteredArchetypes.forEach(arch => {
            const option = document.createElement('option');
            option.value = arch.name;
            option.textContent = arch.name;
            archetypeSelect.appendChild(option);
        });
    }

    function handleArchetypeChange() {
        const selectedArchetypeName = archetypeSelect.value;
        clearCharacterDetails();
        customizationElement.style.display = 'none';
        outputAreaElement.textContent = "Select an Archetype to begin...";


        if (!selectedArchetypeName) return;

        const selectedArchetype = archetypes.find(arch => arch.name === selectedArchetypeName);
        if (!selectedArchetype) return;

        currentCharacter = {
            name: "", // Placeholder for player input
            tier: selectedArchetype.tier,
            archetype: selectedArchetype.name,
            species: selectedArchetype.species,
            faction: selectedArchetype.faction,
            keywords: [...selectedArchetype.keywords],
            ability: selectedArchetype.ability,
            wargear: [...selectedArchetype.wargear],
            influence: selectedArchetype.influence || 0,
            attributes: {},
            skills: {},
        };

        // Initialize Attributes and Skills
        attributesList.forEach(attr => { currentCharacter.attributes[attr] = 1; });
        skillsList.forEach(skill => { currentCharacter.skills[skill] = 0; });

         // Apply any base bonuses from archetype (if designed that way - simplified here)
        // Example: if (selectedArchetype.attributes.willpower) { currentCharacter.attributes.Willpower += selectedArchetype.attributes.willpower; }
        // Example: if (selectedArchetype.skills.ballistic) { currentCharacter.skills['Ballistic Skill (A)'] += selectedArchetype.skills.ballistic; }


        remainingXP = startingXP; // Reset XP when changing archetype
        updateXPDisplay();
        displayArchetypeDetails(selectedArchetype);
        populateStats();
        customizationElement.style.display = 'block';
        updateCharacterSheetOutput();

    }

     function displayArchetypeDetails(archetype) {
        document.getElementById('archName').textContent = archetype.name;
        document.getElementById('archSpecies').textContent = archetype.species;
        document.getElementById('archFaction').textContent = archetype.faction;
        document.getElementById('archKeywords').textContent = archetype.keywords.join(', ');
        document.getElementById('archAbility').textContent = archetype.ability;
        document.getElementById('archWargear').textContent = archetype.wargear.join(', ');
        document.getElementById('archInfluence').textContent = archetype.influence || 0;
        characterDetailsElement.style.display = 'block';
    }

     function clearCharacterDetails() {
        document.getElementById('archName').textContent = '-';
        document.getElementById('archSpecies').textContent = '-';
        document.getElementById('archFaction').textContent = '-';
        document.getElementById('archKeywords').textContent = '-';
        document.getElementById('archAbility').textContent = '-';
        document.getElementById('archWargear').textContent = '-';
        document.getElementById('archInfluence').textContent = '-';
     }


    function populateStats() {
        attributesListElement.innerHTML = '';
        skillsListElement.innerHTML = '';

        attributesList.forEach(attr => {
            const li = createStatListItem(attr, currentCharacter.attributes[attr], 'attribute');
            attributesListElement.appendChild(li);
        });

        skillsList.forEach(skill => {
             // Hide Psychic Mastery if not a PSYKER (needs keyword check)
            if (skill === "Psychic Mastery (Wil)" && !currentCharacter.keywords.includes("PSYKER")) {
               return; // Skip adding this skill if not a Psyker
            }
            const li = createStatListItem(skill, currentCharacter.skills[skill], 'skill');
            skillsListElement.appendChild(li);
        });
    }

    function createStatListItem(name, value, type) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="stat-name">${name}</span>
            <span class="stat-value" id="${type}Value-${name}">${value}</span>
            <div>
                <button class="decrease" data-name="${name}" data-type="${type}">-</button>
                <button class="increase" data-name="${name}" data-type="${type}">+</button>
            </div>
        `;
        li.querySelector('.increase').addEventListener('click', handleStatChange);
        li.querySelector('.decrease').addEventListener('click', handleStatChange);
        updateButtonStates(li.querySelector('.decrease'), li.querySelector('.increase'), value, type); // Initial state
        return li;
    }

     function handleStatChange(event) {
        const button = event.target;
        const name = button.dataset.name;
        const type = button.dataset.type; // 'attribute' or 'skill'
        const isIncrease = button.classList.contains('increase');
        const valueElement = document.getElementById(`${type}Value-${name}`);
        let currentValue = parseInt(valueElement.textContent);
        const costTable = type === 'attribute' ? attributeCosts : skillCosts;
        const baseValue = type === 'attribute' ? 1 : 0;

        let cost = 0;
        let newValue = currentValue;

        if (isIncrease) {
            newValue = currentValue + 1;
            cost = costTable[newValue] || 9999; // Get incremental cost for the *new* level
            // Add max value checks here later (based on species for attributes)
        } else {
            if (currentValue <= baseValue) return; // Cannot decrease below base
            cost = -(costTable[currentValue] || 0); // Refund the cost of the *current* level
            newValue = currentValue - 1;
        }

         // Check XP
        if (isIncrease && remainingXP < cost) {
            alert("Not enough XP!");
            return;
        }

        // Update Data
        remainingXP -= cost;
        if (type === 'attribute') {
            currentCharacter.attributes[name] = newValue;
        } else {
            currentCharacter.skills[name] = newValue;
        }

        // Update UI
        valueElement.textContent = newValue;
        updateXPDisplay();

         // Update button states for this specific stat
         const decreaseBtn = button.parentElement.querySelector('.decrease');
         const increaseBtn = button.parentElement.querySelector('.increase');
         updateButtonStates(decreaseBtn, increaseBtn, newValue, type);
         updateCharacterSheetOutput(); // Update summary
    }

    function updateButtonStates(decreaseBtn, increaseBtn, currentValue, type) {
         const baseValue = type === 'attribute' ? 1 : 0;
         decreaseBtn.disabled = currentValue <= baseValue;

         const nextValue = currentValue + 1;
         const costTable = type === 'attribute' ? attributeCosts : skillCosts;
         const nextCost = costTable[nextValue] || 9999; // Cost for the *next* level
         // Add max value checks here too
         increaseBtn.disabled = remainingXP < nextCost;
    }


    function updateXPDisplay() {
        startingXPElement.textContent = startingXP;
        remainingXPElement.textContent = remainingXP;
         // Update ALL increase button states whenever XP changes
        document.querySelectorAll('button.increase').forEach(btn => {
            const name = btn.dataset.name;
            const type = btn.dataset.type;
            const valueElement = document.getElementById(`${type}Value-${name}`);
            if (valueElement) { // Check if element exists (might not if archetype changed)
                const currentValue = parseInt(valueElement.textContent);
                const nextValue = currentValue + 1;
                const costTable = type === 'attribute' ? attributeCosts : skillCosts;
                const nextCost = costTable[nextValue] || 9999; // Use a large number if cost not defined (max level)
                // Add max level checks later
                btn.disabled = remainingXP < nextCost;
            } else {
                btn.disabled = true; // Disable if stat element doesn't exist
            }
        });
         // Update ALL decrease button states
        document.querySelectorAll('button.decrease').forEach(btn => {
            const name = btn.dataset.name;
            const type = btn.dataset.type;
            const valueElement = document.getElementById(`${type}Value-${name}`);
             if (valueElement) {
                 const currentValue = parseInt(valueElement.textContent);
                 const baseValue = type === 'attribute' ? 1 : 0;
                 btn.disabled = currentValue <= baseValue;
             } else {
                 btn.disabled = true;
             }
        });
    }

    function updateCharacterSheetOutput() {
        if (!currentCharacter.archetype) {
            outputAreaElement.textContent = "Select an Archetype to begin...";
            return;
        }

        let output = `--- CHARACTER SUMMARY ---\n`;
        output += `Tier: ${currentCharacter.tier}\n`;
        output += `Archetype: ${currentCharacter.archetype}\n`;
        output += `Species: ${currentCharacter.species}\n`;
        output += `Faction: ${currentCharacter.faction}\n`;
        output += `Keywords: ${currentCharacter.keywords.join(', ')}\n`;
        output += `Remaining XP: ${remainingXP}\n\n`;

        output += `--- ATTRIBUTES ---\n`;
        attributesList.forEach(attr => {
            output += `${attr}: ${currentCharacter.attributes[attr]}\n`;
        });

        output += `\n--- SKILLS ---\n`;
        skillsList.forEach(skill => {
            // Only show skills with points or relevant ones like Psychic Mastery
             if (currentCharacter.skills[skill] > 0 || (skill === "Psychic Mastery (Wil)" && currentCharacter.keywords.includes("PSYKER"))) {
               output += `${skill}: ${currentCharacter.skills[skill]}\n`;
            }
        });

         output += `\n--- ABILITY ---\n${currentCharacter.ability}\n`;
         output += `\n--- WARGEAR ---\n${currentCharacter.wargear.join('\n')}\n`;


        outputAreaElement.textContent = output;
    }

});