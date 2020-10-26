const story = document.getElementById('storyLine');
const btn = document.querySelector('.enter');
const user = document.getElementById('userInput');

// Door options
const whichDoor = () => {

    const option = user.value;
    user.value = '';

    switch(option){
        case '1':
            coinToss();
            break;
        case '2':
            quiz();
            break;
        case '3':
            darkMode();
            break;
        case '4':
            todoList();
            break;
        default:
            story.innerHTML = 'Hm... det där var inget av svarsalternativen som uppgavs.';
    }
}
whichDoor();


//Toss a coin (Rum 1)
const coinToss = () => {

    const option = user.value;
    btn.onclick = coinToss;
    btn.innerHTML = 'Singla slant';

    let randomNumber = Math.floor(Math.floor.random() * 2) + 1;
    user.value = randomNumber;

    if(randomNumber == 1){
        story.innerHTML = 'Det blev Klave';
    }
    else if(randomNumber == 2){
        story.innerHTML = 'Det blev Krona';
    }

}
coinToss();

// Quiz (Rum 2)
const quiz = () => {

    story.innerHTML = 'Vilken är den äldsta staden i världen?';
    btn.innerHTML = 'Skicka svar';
}
quiz();

//Darkmode Toggle (Rum 3)
const darkMode = () => {

    story.innerHTML = 'Oj, Här var det mörkt! Vill du vara så snäll och tända lampan!';
    btn.innerHTML = 'ON/OFF';
}
darkMode();

const todoList = () => {

    story.innerHTML = 'Vad ska vi lägga till i vår lista? ';
    btn.innerHTML = 'Lägg till';

}
todoList();
