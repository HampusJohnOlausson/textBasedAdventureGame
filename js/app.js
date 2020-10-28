//------------------------DOM----------------------

const story = document.getElementById('storyLine'); //Story Line
const btn = document.querySelector('.enter'); //Button
let user = document.getElementById('userInput'); //User input
const link = document.querySelector('.backMenu'); //Go back
const room = document.querySelector('.wrapper'); //Room color 


//-----------------Choose room menu---------------

/**
 * whichRoom function selected.
 * User options to select a color that starts a function.
 */
function whichRoom(){

    const option = user.value;
    user.value = '';

    /**
     * Switch statement with room options, that search for the users input in order to interact.
     * As user inputs option, function of the selected room is running. 
    */
    switch(option){

        case 'grön':
            //greenRoom function option.
            greenRoom();
             break;

        case 'lila':
            //purpleRoom function option.
            purpleRoom();
            break;

        case 'orange':
            //orangeRoom function option.
            orangeRoom();
            break; 

            //Error message! Non of the options.
         default:
             story.innerHTML = 'Jag förstår inte vad du menar. Försök igen!';
    }
}

