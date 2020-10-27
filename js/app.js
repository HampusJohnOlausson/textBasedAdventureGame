const story = document.getElementById('storyLine'); //Story Line
const btn = document.querySelector('.enter'); //Button
let user = document.getElementById('userInput'); //User input
const link = document.querySelector('.backMenu'); //Go back
const room = document.querySelector('.wrapper'); //Room color 

//-----------------Choose room---------------

function whichDoor(){

    const option = user.value;
    user.value = '';

    if(option === 'grön' || option === 'GRÖN' || option === 'Grön'){
        greenRoom();

    }else if(option === 'lila' || option === 'LILA' || option === 'Lila'){
        purpleRoom();
    }
}

//----------------Green room----------------

function greenRoom(){
    room.style.backgroundColor = '#12e2a3';
    story.innerHTML = 'I det gröna rummet finns det en kruka och en byrå. Vilken vill du kolla i? (Krukan eller Byrån)';
    btn.innerHTML = 'Skicka svar';
    btn.onclick = plantOrDresser;
    
    function plantOrDresser(){
        const option = user.value;
        user.value = '';

        if(option === 'krukan' || option === 'KRUKAN' || option === 'Krukan'){
            story.innerHTML = 'Nej, där fanns det bara jord. Vill du kolla i byrån? (Ja eller Nej)';
            btn.innerHTML = 'Ditt val';
            btn.onclick = checkDresser;

            function checkDresser(){
                const option = user.value;
                user.value = '';

                if(option === 'ja' || option === 'JA' || option === 'Ja'){
                    story.innerHTML = 'Kanon! Du hittade nyckeln. Vill du lämna den till ägaren? (Ja eller Nej)';
                    btn.innerHTML = 'Ditt val';
                    btn.onclick = returnKey;
                }
                else if(option === 'nej' || option === 'NEJ' || option === 'Nej'){
                    story.innerHTML = 'Det finns inte så mycket annat att göra i detta rum';
                    btn.style.display = 'none';
                    user.style.display = 'none';
                    link.innerHTML = 'Gå ur rummet';
                }
            }
        }

        else if(option === 'byrån' || option === 'BYRÅN' || option === 'Byrån'){
                story.innerHTML = 'Kanon! Du hittade nyckeln. Vill du lämna den till ägaren? (Ja eller Nej)';
                btn.innerHTML = 'Ditt val';
                btn.onclick = returnKey;
            
        }
    }
}

//Option to return key

function returnKey(){
    const option = user.value;
    user.value = '';

    if(option === 'ja' || option === 'JA' || option === 'Ja'){
        story.innerHTML = 'Tack så jättemycket för att du hittade nyckeln! säger ägaren';
        btn.style.display = 'none';
        user.style.display = 'none';
        link.innerHTML = 'Starta om jakten';
    }
    else if(option === 'nej' || option === 'NEJ' || option === 'Nej'){
        story.innerHTML = 'Det var inte snällt! Därav blir du utskickad från huset!';
        btn.style.display = 'none';
        user.style.display = 'none';
        link.innerHTML = 'Starta om jakten';
    }
   }

//------------------- Purple Room -----------------------

function purpleRoom(){
    room.style.backgroundColor = '#9c1de7';
    story.innerHTML = 'I det lila rummet finns det bara ett fönster. Vill du fortsätta till det gröna rummet? (Ja eller Nej)';
    btn.innerHTML = 'Skicka svar';
    btn.onclick = leavePurpleRoom;

    function leavePurpleRoom() {
        const option = user.value;
        user.value = '';
    
        if(option === 'ja' || option === 'JA' || option === 'Ja'){
            greenRoom();
        }else if(option === 'nej' || option === 'NEJ' || option === 'Nej'){
            story.innerHTML = 'Pang! Oj! fönstret gick sönder. Någon kastade in en sten. Vill du titta vem det var? (Ja eller Nej)';
            btn.innerHTML = 'Vad gör du?';
            btn.onclick = outsideWindow;

            function outsideWindow() {
                const option = user.value;
                user.value = '';

                if(option === 'ja' || option === 'JA' || option === 'Ja'){
                    story.innerHTML = 'Du tittar ut genom fönstret och ser en inbrottstjuv. Vem ringer du (Polisen eller Glasmästaren)?';
                    btn.innerHTML = 'Vem ringer du?';
                    btn.onclick = callPolice;

                    function callPolice(){
                        const option = user.value;
                        user.value = '';

                        if(option === 'polisen' || option === 'POLISEN' || option === 'Polisen'){
                            story.innerHTML = 'Polisen kom direkt och tog fast tjuven! Bra jobbat!';
                            btn.style.display = 'none';
                            user.style.display = 'none';
                            link.innerHTML = `Tillbaks till 'Val av rum'`;

                        }else if(option === 'glasmästaren' || option === 'GLASMÄSTAREN' || option === 'Glasmästaren'){
                            story.innerHTML = 'Glasmästaren kom en timme senare och bytte ut fönstret fast tjuven hann undan.';
                            btn.style.display = 'none';
                            user.style.display = 'none';
                            link.innerHTML = `Tillbaks till 'Val av rum'`;
                        }
                    }
                }
                else if(option === 'nej' || option === 'NEJ' || option === 'Nej'){
                    story.innerHTML = 'Jakten på de försvunna nycklarna fortsätter! Gå ut och fortsätta leta när du känner för det';
                    btn.style.display = 'none';
                    user.style.display = 'none';
                    link.innerHTML = `Tillbaks till 'Val av rum'`;
                }
            }
        }
    }
}




