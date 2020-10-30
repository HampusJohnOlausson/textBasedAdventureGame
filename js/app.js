//------------------------DOM----------------------
/**
 * @type {HTMLParagraphElement}
 * Describes the events and ask the user questions.
 */
const story = document.getElementById('storyLine'); 

/**
 * @type {HTMLButtonElement}
 * A button to submit the users answer
 */
const btn = document.querySelector('.enter'); 

/**
 * @type {HTMLInputElement}
 * Input so the user can enter their answer.
 */
let user = document.getElementById('userInput');

/**
 * @type {HTMLLinkElement}
 * A-link that takes the user back to room options.
 */
const link = document.querySelector('.backMenu');

/**
 * @type {HTMLDivElement}
 * Div element that wraps the whole content of the page.
 */
const room = document.querySelector('.wrapper'); 

//-----------------Choose room menu---------------
/**
 * whichRoom function selected.
 * User options to select a color that starts a function.
 */
function whichRoom(){

    const option = user.value;
    user.value = '';
    /*
     * Switch statement with room options, that search for the users input in order to interact.
     * As user inputs option, function of the selected room is running. 
    */
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
        
        case 'blå':
           
            blueRoom();
            break;

            /* Error message! false user input*/
         default:
             story.innerHTML = 'Jag förstår inte vad du menar. Försök igen!';
    }
}


