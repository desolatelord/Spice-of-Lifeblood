const gameData = {
    prologue: {
        text: "Gusta is a dark-haired woman who loves simple pleasures: a comfy sweater, a nice pair of jeans, and her Ugg boots. But on a cold November day, she loves one thing above all others: a pumpkin spice latte. So, she decides to go to the coffee shop.",
        image: "A_woman_with_dark_hair_wearing_a_comfy_sweater,_je.png",
        next: 'chapter1_scene1'
    },
    chapter1_scene1: {
        text: "While waiting in line to order, she sees a mysterious, handsome, redheaded stranger at the front of the line, speaking to the barista.",
        image: "A_handsome_redheaded_man_with_a_mysterious_aura_st.png",
        next: 'chapter1_scene2'
    },
    chapter1_scene2: {
        text: "ADRIAN: My name is Adrian Flămând, and I hunger...<br>SMILING BARISTA: Well, we have a wide variety of bagels, scones, and rolls!<br>ADRIAN: My hunger is too deep and ancient to be sated by any scone.",
        image: "barista.png",
        choices: [
            { text: "Interrupt – 'Sir, you’re holding up the line.'", next: 'chapter1_scene2a' },
            { text: "Let them continue", next: 'chapter1_scene2b' }
        ]
    },
    chapter1_scene2a: {
        text: "GUSTA: Sir, you’re holding up the line. We’ve been here 5 minutes already.<br>ADRIAN: What is 5 minutes compared to one thousand years of hunger?<br>GUSTA: I don’t know what that means, but mama needs her pumpkin spice.<br>ADRIAN: I have many spices of pumpkins at my castle. There you may taste of latte…",
        image: "annoyed_Gusta.png",
        choices: [
            { text: "Latte sipping in a castle? Lead me there, pretty boy!", next: 'chapter2_scene1' },
            { text: "Find another coffee shop.", next: 'epilogue1' }
        ]
    },
    chapter1_scene2b: {
        text: "SMILING BARISTA: If you don’t want breakfast, would you prefer one of our scrumptious sandwiches?<br>ADRIAN: Will a turkey and Swiss sandwich make my dead heart beat once more?<br>SMILING BARISTA: Um…",
        image: "A_handsome_redheaded_man_with_a_mysterious_aura_st.png",
        choices: [
            { text: "Interrupt – 'Sir, you’re holding up the line.'", next: 'chapter1_scene2a' },
            { text: "Find another coffee shop.", next: 'epilogue1' }
        ]
    },
    chapter2_scene1: {
        text: "Gusta follows the mysterious Adrian Flămând to the outskirts of the city. In the distance stands a brooding gothic structure. The hauntingly beautiful castle menaces the surrounding trees like a lord punishing servants.",
        image: "A_brooding_gothic_castle_with_menacing_spires_and_.png",
        next: 'chapter2_scene2'
    },
    chapter2_scene2: {
        text: "After hours of traveling, Gusta and Adrian stand at the castle entrance. Gusta is exhausted and her heart flutters with trepidation and longing for the horrors or joys that may lurk inside.",
        image: "The_entrance_of_a_gothic_castle,_with_a_large,_int.png",
        choices: [
            { text: "Enter – 'This better be a good latte.'", next: 'chapter2_scene2a' },
            { text: "Find a coffee shop.", next: 'epilogue1' }
        ]
    },
    chapter2_scene2a: {
        text: "Gusta is shocked at the exquisite interior so different from the castle exterior that contains it. A chandelier hangs from the ceiling. A long red carpet separates the well-lit Great Hall.<br>GUSTA: This is beautiful… but I’m really jonesing for some caffeine.<br>ADRIAN: Thank you, but we must delay gratification of our desires for a moment longer. Please join me upstairs.",
        image: "The_exquisite_interior_of_a_gothic_castle,_with_a_.png",
        choices: [
            { text: "Join him.", next: 'chapter2_scene3' },
            { text: "Leave and find a coffee place.", next: 'epilogue1' }
        ]
    },
    chapter2_scene3: {
        text: "Gusta follows the strange man up the winding, stone stairs. The light diminishes as they ascend.",
        image: "bottom of staircase.png",
        next: 'chapter3_scene1'
    },
    chapter3_scene1: {
        text: "At the top of the staircase, a single sconce lights the hallway. In the dimness, Gusta sees the entrance to a dark bedchamber.",
        image: "The_top_of_a_winding_stone_staircase_in_a_gothic_c.png",
        next: 'chapter3_scene2'
    },
    chapter3_scene2: {
        text: "ADRIAN: Please join me in my inner sanctum. There we will partake of our darkest wants.<br>Adrian enters the bedroom without another word.",
        image: "The_top_of_a_winding_stone_staircase_in_a_gothic_c.png",
        choices: [
            { text: "Follow him - 'There’s coffee in there, right?'", next: 'chapter4_scene1' },
            { text: "Leave and hope to find still find a place to get a pumpkin fix before the other basics buy them all up.", next: 'epilogue2' }
        ]
    },
    chapter4_scene1: {
        text: "Though it took you mere moments to enter, Adrian has changed into a red robe. He stands dramatically in front of a bed from some dark fantasy.",
        image: "Adrian,_now_wearing_a_red_robe,_stands_dramaticall.png",
        next: 'chapter4_scene2'
    },
    chapter4_scene2: {
        text: "Adrian’s eyes turn red as he bares his fangs.",
        image: "Adrian's_eyes_turn_red_as_he_reveals_his_fangs,_st.png",
        next: 'chapter4_scene3'
    },
    chapter4_scene3: {
        text: "ADRIAN: I must confess that I am a vampire. But if you would offer the taste of your blood to me, I will provide you with an eternity of pumpkin spice.",
        image: "Adrian's_eyes_turn_red_as_he_reveals_his_fangs,_st.png",
        choices: [
            { text: "My soul is a small price to pay for never-ending lattes.", next: 'epilogue4' },
            { text: "Get the heck outta of there!", next: 'epilogue3' }
        ]
    },
    epilogue1: {
        text: "Gusta seeks out a coffee shop where she can taste the flavor of pumpkin, but somewhere deep inside she feels a thirst that may never be quenched.",
        image: "Gusta_is_sitting_in_another_coffee_shop,_looking_d.png",
        restart: true
    },
    epilogue2: {
        text: "Gusta roams the city seeking out coffee shops, but at each place she stops, there is no pumpkin spice latte to be found. For the rest of her days she searches but she sates neither her thirst for caffeine nor the unspoken lust in her heart.",
        image: "Gusta_roaming_the_city_streets,_looking_desperate_.png",
        restart: true
    },
    epilogue3: {
        text: "Gusta spends an eternity as a vampiric thrall with no hope in her heart but the lingering smell of autumnal lattes.",
        image: "vampire_thrall.png",
        restart: true
    },
    epilogue4: {
        text: "Adrian and Gusta spend a lifetime together with his teeth at her neck and her lips sucking down endless ounces of autumnal lattes.",
        image: "Spiceblood.png",
        restart: true
    }
};

let currentScene = 'prologue';

function renderScene(sceneKey) {
    const scene = gameData[sceneKey];
    const sceneTextDiv = document.getElementById('scene-text');
    const choicesDiv = document.getElementById('choices');
    const sceneImageDiv = document.getElementById('scene-image');

    sceneTextDiv.innerHTML = scene.text;
    sceneImageDiv.src = scene.image ? scene.image : '';
    choicesDiv.innerHTML = '';

    if (scene.choices) {
        scene.choices.forEach(choice => {
            const button = document.createElement('button');
            button.innerText = choice.text;
            button.classList.add('choice-button');
            button.onclick = () => renderScene(choice.next);
            choicesDiv.appendChild(button);
        });
    } else if (scene.next) {
        const button = document.createElement('button');
        button.innerText = 'Next';
        button.classList.add('choice-button');
        button.onclick = () => renderScene(scene.next);
        choicesDiv.appendChild(button);
    } else if (scene.restart) {
        const button = document.createElement('button');
        button.innerText = 'Restart';
        button.classList.add('choice-button');
        button.onclick = () => renderScene('prologue');
        choicesDiv.appendChild(button);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderScene(currentScene);
});
