//------------------------DOM----------------------

const story = document.getElementById('storyLine'); //Story Line
const btn = document.querySelector('.enter'); //Button
let user = document.getElementById('userInput'); //User input
const link = document.querySelector('.backMenu'); //Go back
const room = document.querySelector('.wrapper'); //Room color 



//-----------------Choose room menu---------------

function whichDoor(){

    const option = user.value;
    user.value = '';
    switch(option){

        case 'grön':
            greenRoom();
             break;

        case 'lila':
            purpleRoom();
            break;

        case 'orange':
            orangeRoom();
            break; 

         default:
             story.innerHTML = 'Jag förstår inte vad du menar. Försök igen!';
    }
}

