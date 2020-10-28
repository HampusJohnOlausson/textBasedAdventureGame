//----------------Green room----------------

function greenRoom(){

    room.style.backgroundColor = '#12e2a3';
    story.innerHTML = 'I det gröna rummet finns det en kruka och en byrå. Vilken vill du kolla i? (Krukan eller Byrån)';
    btn.innerHTML = 'Svara';
    btn.onclick = plantOrDresser;
    
    //Check plant or dresser
    function plantOrDresser(){
        const option = user.value;
        user.value = '';

        if(option === 'krukan' || option === 'KRUKAN' || option === 'Krukan'){
            story.innerHTML = 'Nej, där fanns det bara jord. Vill du kolla i byrån? (Ja eller Nej)';
            btn.onclick = checkDresser;

            //Checking the dresser
            function checkDresser(){
                const option = user.value;
                user.value = '';

                if(option === 'ja' || option === 'JA' || option === 'Ja'){
                    story.innerHTML = 'Kanon! Du hittade nyckeln. Vill du lämna den till ägaren? (Ja eller Nej)';
                    btn.onclick = returnKey;

                }else if(option === 'nej' || option === 'NEJ' || option === 'Nej'){
                    story.innerHTML = 'Det finns inte så mycket annat att göra i detta rum';
                    btn.style.display = 'none';
                    user.style.display = 'none';
                    link.innerHTML = 'Gå ur rummet';
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

function purpleRoom(){
    room.style.backgroundColor = '#9c1de7';
    story.innerHTML = 'Du är nu i det lila rummet. Här finns det bara ett fönster. Vill du fortsätta till det gröna rummet? (Ja eller Nej)';
    btn.innerHTML = 'Svara';
    btn.onclick = leavePurpleRoom;

    //Want to leave purple room
    function leavePurpleRoom() {
        const option = user.value;
        user.value = '';
    
        if(option === 'ja' || option === 'JA' || option === 'Ja'){
            greenRoom();

        }else if(option === 'nej' || option === 'NEJ' || option === 'Nej'){
            story.innerHTML = 'Pang! Oj! fönstret gick sönder. Någon kastade in en sten. Vill du titta vem det var? (Ja eller Nej)';
            btn.innerHTML = 'Vad gör du?';
            btn.onclick = outsideWindow;

            //Look out the window?
            function outsideWindow() {
                const option = user.value;
                user.value = '';

                if(option === 'ja' || option === 'JA' || option === 'Ja'){
                    story.innerHTML = 'Du tittar ut genom fönstret och ser en inbrottstjuv. Vem ringer du (Polisen eller Glasmästaren)?';
                    btn.innerHTML = 'Vem ringer du?';
                    btn.onclick = callPolice;

                    //Who to call
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

                }else if(option === 'nej' || option === 'NEJ' || option === 'Nej'){
                    story.innerHTML = 'Jakten på de försvunna nycklarna fortsätter! Gå ut och fortsätta leta när du känner för det';
                    btn.style.display = 'none';
                    user.style.display = 'none';
                    link.innerHTML = `Tillbaks till 'Val av rum'`;
                }
            }
        }
    }
}

//---------Orange room-----------

function orangeRoom(){
    room.style.backgroundColor = '#ff6d24';
    story.innerHTML = 'I det oranga rummet finns det en till dörr och en bokhylla. Vilken vill du kolla? (dörren eller bokhyllan) ';
    btn.innerHTML = 'Svara';
    btn.onclick = checkDoorOrShelf;
    
    //Check the other door or bookshelf
    function checkDoorOrShelf(){
        const option = user.value;
        user.value = '';
    
                if(option === 'dörren' || option === 'DÖRREN' || option === 'Dörren'){
                    purpleRoom();

                }else if(option === 'bokhyllan' || option === 'BOKHYLLAN' || option === 'Bokhyllan'){
                    story.innerHTML = 'Här fanns det bara massa tråkiga lexikon... Vill du gå igenom den andra dörren nu? (ja eller nej)';
                    btn.onclick = outOrNot;

                    //Go out or not
                    function outOrNot(){
                        const option = user.value;
                        user.value = '';

                        if(option === 'ja' || option === 'JA' || option === 'Ja'){
                            purpleRoom();
                            
                        }else if(option === 'nej' || option === 'NEJ' || option === 'Nej'){
                            story.innerHTML = 'Hm... Det fanns inte så mycket mer att göra här.';
                            btn.style.display = 'none';
                            user.style.display = 'none';
                            link.innerHTML = `Tillbaks till 'Val av rum'`;
                        }
                    }
                }
    }
}

//-------Option to return key----------

function returnKey(){
    const option = user.value;
    user.value = '';

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