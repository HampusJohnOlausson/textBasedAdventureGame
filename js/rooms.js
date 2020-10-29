//-------------------Green room--------------------
/**
 * Function greenRoom selected.
 * Button changed to be clickable for upcoming options.
 * Background color changed as function running.
 */
function greenRoom(){

    room.style.backgroundColor = '#12e2a3'; /** Change of room color. */
    story.innerHTML = 'I det gröna rummet finns det en kruka och en byrå. Vilken vill du kolla i? (Krukan eller Byrån)'; //Story for this function
    btn.innerHTML = 'Svara'; /** Change of text inside of button. */
    btn.onclick = plantOrDresser;
    
    /**
     * Function plantOrDresser selected.
     * Options between plant or dresser.
     */
    function plantOrDresser(){
        const option = user.value;
        user.value = '';

        /** Options */
        if(option === 'krukan' || option === 'KRUKAN' || option === 'Krukan'){
            story.innerHTML = 'Nej, där fanns det bara jord. Vill du kolla i byrån? (Ja eller Nej)';
            btn.onclick = checkDresser;

            /**
             * Function for checking the dresser
             * Options to check or not.
             */
            function checkDresser(){
                const option = user.value;
                user.value = '';

                /** Options */
                if(option === 'ja' || option === 'JA' || option === 'Ja'){
                    story.innerHTML = 'Kanon! Du hittade nyckeln. Vill du lämna den till ägaren? (Ja eller Nej)';
                    btn.onclick = returnKey;

                }else if(option === 'nej' || option === 'NEJ' || option === 'Nej'){
                    story.innerHTML = 'Det finns inte så mycket annat att göra i detta rum';
                    btn.style.display = 'none';
                    user.style.display = 'none';
                    link.innerHTML = 'Gå ut ur rummet'; /** Link to room menu*/
                }
            }

        }else if(option === 'byrån' || option === 'BYRÅN' || option === 'Byrån'){
                story.innerHTML = 'Kanon! Du hittade nyckeln. Vill du lämna den till ägaren? (Ja eller Nej)';
                btn.innerHTML = 'Svara';
                btn.onclick = returnKey;
            
        }
    }
}

//------------------- Purple Room -----------------------
/**
 * Function purpleRoom selected.
 * Button changed to be clickable for upcoming options.
 * Background color changed as function running
 */
function purpleRoom(){
    room.style.backgroundColor = '#9c1de7'; /** Change of room color. */
    story.innerHTML = 'Du är nu i det lila rummet. Här finns det ett fönster och en dörr. Vill du gå till (Fönstret eller Dörren)?';
    btn.innerHTML = 'Svara'; 
    btn.onclick = leavePurpleRoom;

    /**
     * Function leavePurpleRoom selected
     * Option to go to another door or go to window.
     */
    function leavePurpleRoom() {
        const option = user.value;
        user.value = '';
        
        /** Options */
        if(option === 'dörren' || option === 'DÖRREN' || option === 'Dörren'){
            orangeRoom();

        }else if(option === 'fönstret' || option === 'FÖNSTRET' || option === 'Fönstret'){
            story.innerHTML = 'Pang! Oj! fönstret gick sönder. Någon kastade in en sten. Vill du titta vem det var? (Ja eller Nej)';
            btn.innerHTML = 'Vad gör du?'; 
            btn.onclick = outsideWindow;

            /**
             * Function outsideWindow selected.
             * Option to look out the window or not.
             */
            function outsideWindow() {
                const option = user.value;
                user.value = '';

                /** Options */
                if(option === 'ja' || option === 'JA' || option === 'Ja'){
                    story.innerHTML = 'Du tittar ut genom fönstret och ser en inbrottstjuv. Vem ringer du (Polisen eller Glasmästaren)?';
                    btn.innerHTML = 'Vem ringer du?'; //Changing the buttons text.
                    btn.onclick = callPolice;

                    /**
                     * Function callPolice selected
                     * Options who to call between the police or the glazier
                     */
                    function callPolice(){
                        const option = user.value;
                        user.value = '';

                        /** Options */
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

                }else if(option === 'nej' || option === 'NEJ' || option === 'Nej'){
                    story.innerHTML = 'Jakten på de försvunna nycklarna fortsätter! Gå ut och fortsätta leta när du känner för det';
                    btn.style.display = 'none';
                    user.style.display = 'none';
                    link.innerHTML = `Gå ut ur rummet`;
                }
            }
        }
    }
}

//--------------------Orange room--------------------
/**
 * Function orangeRoom selected.
 * Button changed to be clickable for upcoming options.
 * Background color changed as function running
 */
function orangeRoom(){
    room.style.backgroundColor = '#ff6d24'; /** Change of room color. */
    story.innerHTML = 'Du är nu i det oranga rummet, här finns det en till dörr och en bokhylla. Vilken vill du kolla? (Dörren eller Bokhyllan) ';
    btn.innerHTML = 'Svara';
    btn.onclick = checkDoorOrShelf;
    
    /**
     * Function checkDoorOrShelf seleted.
     * Options between the door or the bookshelf.
     */
    function checkDoorOrShelf(){
        const option = user.value;
        user.value = '';

                /** Options */
                if(option === 'dörren' || option === 'DÖRREN' || option === 'Dörren'){
                    purpleRoom();

                }else if(option === 'bokhyllan' || option === 'BOKHYLLAN' || option === 'Bokhyllan'){
                    story.innerHTML = 'Här fanns det bara massa tråkiga lexikon... Vill du gå igenom den andra dörren nu? (Ja eller Nej)';
                    btn.onclick = outOrNot;

                    /**
                     * Function outOrNot sleected.
                     * Options to go throught the other door or not.
                     */
                    function outOrNot(){
                        const option = user.value;
                        user.value = '';

                        /** Options */
                        if(option === 'ja' || option === 'JA' || option === 'Ja'){
                            purpleRoom();
                            
                        }else if(option === 'nej' || option === 'NEJ' || option === 'Nej'){
                            story.innerHTML = 'Hm... Det fanns inte så mycket mer att göra här.';
                            btn.style.display = 'none';
                            user.style.display = 'none';
                            link.innerHTML = 'Gå ut ur rummet';
                        }
                    }
                }
    }
}
//---------------------------Blue Room----------------------------
/**
 * Function orangeRoom selected.
 * Button changed to be clickable for upcoming options.
 * Background color changed as function running
 */
function blueRoom(){

    room.style.backgroundColor = '#3d6cb9'; /** Change of room color. */
    story.innerHTML = 'Välkommen till det blå ruuuummm...Oh nej! Det är ett spöke här!!! Det ända sättet att få han att försvinna är om du gissar rätt på vilket tal han tänker på! Vill du gissa eller gå ut från rummet? (Gissa eller Ut)';
    btn.onclick = guessOrNot;
    btn.innerHTML = 'Svara'; 
    /**
     * Function guessOrNot selected.
     * Options between guess number or leave room.
     */
    function guessOrNot(){

        const option = user.value;
        user.value = '';

        /** Options */
        if(option === 'gissa' || option === 'GISSA' || option === 'Gissa'){

            story.innerHTML = 'Du är modig du! Gissa på ett tal mellan (1 - 5)';
            btn.onclick = guessNumber;
            btn.innerHTML = 'Gissa';

            /**
             * Function guessNumber selected.
             * User inputs a guess to make ghost dissapear.
             */
            function guessNumber(){

                let guess = user.value;
                user.value = '';

                /**Random Math Function */
                let number = Math.floor(Math.random() * 5 + 1);

                /**Correct guess */
                if(guess == number){
                    story.innerHTML = `Bra jobbat! Du gissade ${number} och det var rätt och nu har spöket försvunnit och ingen behöver vara rädd mer!`;
                    btn.style.display = 'none';
                    user.style.display = 'none';
                    link.innerHTML = 'Gå ut ur rummet';

                    /** Guesss was to high */
                }else if(guess > number){
                    story.innerHTML = 'Fel! Det var för högt. Försök igen!';

                    /** Guess was to low */
                } else if(guess < number){
                    story.innerHTML = 'Fel! Det var för lågt. Försök igen!';
                }
            }

        }else if(option === 'ut'|| option === 'UT' || option === 'Ut'){
            story.innerHTML = 'Jag förstår dig! Det ät läskigt med spöken.';
            btn.style.display = 'none';
            user.style.display = 'none';
            link.innerHTML = 'Gå ut ur rummet';
        }
    }
}

//------------------Option to return key-------------------
/**
 * Function returnKey selected.
 * Options between returning the key or not.
 */
function returnKey(){
    const option = user.value;
    user.value = '';

    /** Options */
    if(option === 'ja' || option === 'JA' || option === 'Ja'){
        story.innerHTML = 'Tack så jättemycket för att du hittade nyckeln! säger ägaren';
        btn.style.display = 'none';
        user.style.display = 'none';
        link.innerHTML = 'Starta om jakten';

    }else if(option === 'nej' || option === 'NEJ' || option === 'Nej'){
        story.innerHTML = 'Det var inte snällt! Därav blir du utskickad från huset!';
        btn.style.display = 'none';
        user.style.display = 'none';
        link.innerHTML = 'Starta om jakten';
    }
}