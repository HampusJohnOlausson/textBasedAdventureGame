//Targeting in html
const story = document.getElementById('storyLine');
const btn = document.querySelector('.enter');
const user = document.getElementById('userInput');

//Enter function
const enter = () => {

    const option = user.value;
    user.value = '';
    btn.onclick = coinToss;
 
    if(option === 'ja' || option === 'JA' || option === 'Ja'){
        coinToss();
    } else if (option === 'nej' || option === 'NEJ' || option === 'nej'){
        notReady();
    }
}
enter();

//not ready
const notReady = () => {
    story.innerHTML = 'Jag förstår! Du kanske inte är redo än... Är du redo nu?'
} 
notReady();

//Toss a coin
const coinToss = () => {

    const option = user.value;
    btn.onclick = coinToss;

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

//where is the the treaseure?

const treasureSearch = () => {

    story.innerHTML = 'Gissa i vilket rum skatten ligger? (1, 2, 3, 4)'
    const option = user.value;
    user.value = '';

    switch(option){

        case '1':
            story.innerHTML = 'Nej där var den inte';
            break;
        case '2':
            story.innerHTML = 'Ledsen, inget där!';
            break;
        case '3':
            quiz();
            break;
        case '4':
            story.innerHTML = 'Här fanns det ingenting heller dessvärre!';
            break;
        default:
            story.innerHTML = 'Hm det där var inget svar';
    }
    
}
treasureSearch();

// quiz

const quiz = () => {

    story.innerHTML = 'Kanon! Du hittade skatten';
}
quiz();