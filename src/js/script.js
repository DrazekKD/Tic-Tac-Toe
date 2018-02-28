// circle img
const circleSvg = "<svg class=\"svg\" version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n" + "\t width=\"453.689px\" height=\"453.689px\" viewBox=\"0 0 453.689 453.689\" style=\"enable-background:new 0 0 453.689 453.689;\"\n" + "\t xml:space=\"preserve\">\n" + "<g>\n" + "\t<g>\n" + "\t\t<path d=\"M231.245,16.365c-9.744,0-19.646,0.582-29.551,1.737c-4.649,0.592-9.272,1.285-13.729,2.049\n" + "\t\t\tc-2.869,0.442-5.512,1.29-7.894,2.511c-93.32,12.423-164.763,82.37-178.08,174.695C-14.323,310.471,71.365,417.058,193,434.952\n" + "\t\t\tc10.694,1.574,21.703,2.372,32.717,2.372c0.005,0,0,0,0.01,0c111.657,0,208.656-75.921,225.617-176.597\n" + "\t\t\tc9.78-58.016-11.34-121.679-57.93-174.67C353.899,41.115,296.299,16.365,231.245,16.365z M244.331,68.285\n" + "\t\t\tc43.407,3.062,81.091,21.048,112.071,53.506c36.444,38.182,52.704,91.861,42.432,140.084\n" + "\t\t\tc-13.065,61.383-77.612,123.521-175.675,123.521c-11.382,0-22.589-0.99-33.299-2.96c-90.146-16.539-151.098-99.701-135.874-185.4\n" + "\t\t\tc13.062-73.488,77.733-124.812,157.285-124.812c5.367,0,10.821,0.241,16.204,0.718C234.099,73.525,239.776,71.847,244.331,68.285z\n" + "\t\t\t\"/>\n" + "\t</g>\n" + "</g>\n" + "<g>\n" + "</g>\n" + "<g>\n" + "</g>\n" + "<g>\n" + "</g>\n" + "<g>\n" + "</g>\n" + "<g>\n" + "</g>\n" + "<g>\n" + "</g>\n" + "<g>\n" + "</g>\n" + "<g>\n" + "</g>\n" + "<g>\n" + "</g>\n" + "<g>\n" + "</g>\n" + "<g>\n" + "</g>\n" + "<g>\n" + "</g>\n" + "<g>\n" + "</g>\n" + "<g>\n" + "</g>\n" + "<g>\n" + "</g>\n" + "</svg>\n";
// cross img
const crossSvg = "<svg class=\"svg\" version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n" + "\t width=\"30.121px\" height=\"30.12px\" viewBox=\"0 0 30.121 30.12\" style=\"enable-background:new 0 0 30.121 30.12;\"\n" + "\t xml:space=\"preserve\">\n" + "<g>\n" + "\t<path d=\"M29.095,20.118c1.365,1.364,1.365,3.582,0,4.948l-4.027,4.027c-0.684,0.684-1.58,1.025-2.475,1.025\n" + "\t\tc-0.896,0-1.792-0.344-2.477-1.025l-5.056-5.058l-5.058,5.06c-0.684,0.684-1.58,1.024-2.475,1.024s-1.792-0.343-2.475-1.024\n" + "\t\tl-4.027-4.027c-1.367-1.367-1.367-3.584,0-4.949l5.058-5.059l-5.058-5.058c-1.367-1.367-1.367-3.584,0-4.949l4.027-4.027\n" + "\t\tc1.366-1.367,3.583-1.367,4.949,0l5.058,5.055l5.057-5.057c1.367-1.367,3.584-1.367,4.95,0l4.027,4.027\n" + "\t\tc1.365,1.365,1.365,3.582,0,4.949l-5.059,5.058L29.095,20.118z\"/>\n" + "</g>\n" + "<g>\n" + "</g>\n" + "<g>\n" + "</g>\n" + "<g>\n" + "</g>\n" + "<g>\n" + "</g>\n" + "<g>\n" + "</g>\n" + "<g>\n" + "</g>\n" + "<g>\n" + "</g>\n" + "<g>\n" + "</g>\n" + "<g>\n" + "</g>\n" + "<g>\n" + "</g>\n" + "<g>\n" + "</g>\n" + "<g>\n" + "</g>\n" + "<g>\n" + "</g>\n" + "<g>\n" + "</g>\n" + "<g>\n" + "</g>\n" + "</svg>";

// Menu variables
const twoPlayer = document.getElementById("twoPlayers");
const singlePlayer = document.getElementById("singlePlayer");

// ## Game variables Global ##
const whoMove = document.getElementById("whoMove");
// Who first moving
let move = Math.floor((Math.random()*10)+1);
//DOM fields Array
let fieldsArray =[];
//Array simulation field of game
let fieldsSimulation =[1,2,3,4,5,6,7,8,9];
// number clicks of fields  DRAW
let draw = 0;
// variable to check if someone won
let win = 0;
// color win fields
const winColor= '#007F09';
const circleFieldsColor ='#DA9D40';
const crossFieldsColor ='#CA5648';

const gameMenu = document.getElementById('gameMenu');
const ticTacToe = document.getElementById('ticTacToe');
const results = document.getElementById('results');
const whoWin = document.getElementById('whoWin');
const buttonBack = document.getElementById('buttonBack');

// ## Global function ##
// function that checks who starts the game
function whoFirstMoving() {
    if(move%2 === 0) {
        whoMove.innerHTML = "move circle";
        whoMove.style.color = circleFieldsColor;
    }else {
        whoMove.innerHTML = "move cross";
        whoMove.style.color = crossFieldsColor;
    }
}

//function assigns the "SelectMode" event to all fields
function addEventForAllFields(SelectMode) {
    for(let i=0; i<9; i++) {
        fieldsArray[i] = document.querySelector(`div[data-field-id="${i+1}"]`);
        fieldsArray[i].addEventListener('click', SelectMode);
    }
}

//function changes fields to "cross" or "circle"
// next call function "winningLogic()"
function selectField(){
    move++;
    if(move%2 === 0)
    {
        whoMove.style.color = circleFieldsColor;
        whoMove.innerHTML = "move circle";

        this.innerHTML = crossSvg;
        this.removeEventListener('click',selectField);
        this.style.backgroundColor = crossFieldsColor;

        fieldsSimulation[this.getAttribute('data-field-id') - 1] = 'cross';

    }else {
        whoMove.style.color = crossFieldsColor;
        whoMove.innerHTML = "move cross";

        this.innerHTML = circleSvg;
        this.removeEventListener('click',selectField);
        this.style.backgroundColor = circleFieldsColor;

        fieldsSimulation[this.getAttribute('data-field-id')- 1] = 'circle';

    }
    winningLogic(selectField);

}

//function checks whether someone won
function winningLogic(whatEventDelete) {
    //Count the number of moves
    draw++;
    // Win horizontal row 1,2,3
    for(let i=0;i<9;i+=3) {
        if(fieldsSimulation[i]===fieldsSimulation[i+1]&&fieldsSimulation[i+1]===fieldsSimulation[i+2]) {
            delAllEventOnFields(whatEventDelete);
            whoWin.innerHTML += `Win ${fieldsSimulation[i]}`;

            //Change color for win fields
            for (let j = i; j < (i + 3); j += 1) {
                winEffects(j);
            }
            win++;
        }
    }
    // Win vertical column 1,2,3
    for(let i=0;i<3;i++) {
        if (fieldsSimulation[i] === fieldsSimulation[i+3] && fieldsSimulation[i+3] === fieldsSimulation[i+6]) {
            delAllEventOnFields(whatEventDelete);
            whoWin.innerHTML += `Win ${fieldsSimulation[i+3]}`;

            //Change color for win fields
            for(let j=i;j<=(i+6);j+=3) {
                winEffects(j);
            }
            win++;
        }
    }
    //Win diagonally
    if (fieldsSimulation[0] === fieldsSimulation[4] && fieldsSimulation[4] === fieldsSimulation[8]) {
        delAllEventOnFields(whatEventDelete);
        whoWin.innerHTML += `Win ${fieldsSimulation[4]}`;

        //Change color for win fields
        for(let i=0;i<=8;i+=4) {
            winEffects(i);
        }
        win++;
    }else
    if (fieldsSimulation[2] === fieldsSimulation[4] && fieldsSimulation[4] === fieldsSimulation[6]) {
        delAllEventOnFields(whatEventDelete);
        whoWin.innerHTML += `Win ${fieldsSimulation[4]}`;

        //Change color for win fields
        for(let i=2;i<=6;i+=2) {
            winEffects(i);
        }
        win++;
    }else
    if(draw === 9 && win === 0) {
        whoWin.innerHTML="Draw";
        onNextGameButton();

    }

}

// function change color on win fields
function winEffects(j){
    //Change color on win fields
    fieldsArray[j].style.backgroundColor = winColor;
    // Next Game
    onNextGameButton();

}

//function after win delete all click events
function delAllEventOnFields(whatEventDelete) {
    for(let i=0; i<9; i++) {
        fieldsArray[i].removeEventListener('click', whatEventDelete);
    }
}

//function after win or draw chow 'next game button'
function onNextGameButton() {
    results.style.display = "table";
    whoMove.innerHTML ='';
    // Next Game
    buttonBack.style.display = "table";
    buttonBack.innerHTML = "<button type=\"button\" >Next Game</button>";
    buttonBack.style.margin = "0 auto";
    buttonBack.addEventListener('click', function () {
        window.location.reload(true);
    });

}

//#########################################################################################
//  Select 2 players mode
twoPlayer.addEventListener('click',turnOneTwoPlayerMode);
// Function game 2 Players mode
function turnOneTwoPlayerMode() {
    //show game field and hide menu
    gameMenu.style.display = "none";
    ticTacToe.style.display = "block";

    whoFirstMoving();
    addEventForAllFields(selectField);
}

//#########################################################################################
// Select 1 player mode
singlePlayer.addEventListener('click',turnOnSinglePlayerMode);
//Function game 1/Single Players mode
function turnOnSinglePlayerMode() {
    //show game field and hide menu
    gameMenu.style.display = "none";
    ticTacToe.style.display = "block";
    
    whoMove.style.color = circleFieldsColor;
    whoMove.innerHTML = "move circle";
    //next moves
    addEventForAllFields(onePlayer);
    function onePlayer() {
            //player moves
            move++;
            whoMove.style.color = crossFieldsColor;
            whoMove.innerHTML = "move cross";

            this.innerHTML = circleSvg;
            this.removeEventListener('click',onePlayer);
            this.style.backgroundColor = circleFieldsColor;

            fieldsSimulation[this.getAttribute('data-field-id') - 1] = 'circle';
            winningLogic(onePlayer);

            // if there is no draw and win
            if(draw !== 9 && win === 0){
                setTimeout(function () {
                    //if  'goodRandom = true' then loop is end
                    let goodRandom = false;
                    //function changes the field having the index = [numberField];
                    function clickComputerLogic(numberField) {
                        fieldsSimulation[numberField] = 'cross';
                        fieldsArray[numberField].innerHTML = crossSvg;
                        fieldsArray[numberField].style.backgroundColor = crossFieldsColor;
                        fieldsArray[numberField].removeEventListener('click',onePlayer);

                        whoMove.style.color = circleFieldsColor;
                        whoMove.innerHTML = "move circle";
                        move++;
                        goodRandom= true;
                        winningLogic(onePlayer);
                    }

                    //function checks whether there 2 same fields next to each other
                    function logicWinComputer(sing) {
                        //##Horizonatl##//
                        //row 1
                        if(fieldsSimulation[0]===sing && fieldsSimulation[1]===sing && fieldsSimulation[2] !=='cross' && fieldsSimulation[2] !== 'circle') {clickComputerLogic(2);}
                        else if(fieldsSimulation[0]===sing && fieldsSimulation[2]===sing && fieldsSimulation[1] !=='cross' && fieldsSimulation[1] !== 'circle') {clickComputerLogic(1);}
                        else if(fieldsSimulation[1]===sing && fieldsSimulation[2]===sing && fieldsSimulation[0] !=='cross' && fieldsSimulation[0] !== 'circle') {clickComputerLogic(0);}
                        //row 2
                        else if(fieldsSimulation[3]===sing && fieldsSimulation[4]===sing && fieldsSimulation[5] !=='cross' && fieldsSimulation[5] !== 'circle') {clickComputerLogic(5);}
                        else if(fieldsSimulation[3]===sing && fieldsSimulation[5]===sing && fieldsSimulation[4] !=='cross' && fieldsSimulation[4] !== 'circle') {clickComputerLogic(4);}
                        else if(fieldsSimulation[4]===sing && fieldsSimulation[5]===sing && fieldsSimulation[3] !=='cross' && fieldsSimulation[3] !== 'circle') {clickComputerLogic(3);}
                        //row 3
                        else if(fieldsSimulation[6]===sing && fieldsSimulation[7]===sing && fieldsSimulation[8] !=='cross' && fieldsSimulation[8] !== 'circle') {clickComputerLogic(8);}
                        else if(fieldsSimulation[6]===sing && fieldsSimulation[8]===sing && fieldsSimulation[7] !=='cross' && fieldsSimulation[7] !== 'circle') {clickComputerLogic(7);}
                        else if(fieldsSimulation[7]===sing && fieldsSimulation[8]===sing && fieldsSimulation[6] !=='cross' && fieldsSimulation[6] !== 'circle') {clickComputerLogic(6);}
                        //##Vertical##//
                        //column 1
                        else if(fieldsSimulation[0]===sing && fieldsSimulation[3]===sing && fieldsSimulation[6] !=='cross' && fieldsSimulation[6] !== 'circle') {clickComputerLogic(6);}
                        else if(fieldsSimulation[0]===sing && fieldsSimulation[6]===sing && fieldsSimulation[3] !=='cross' && fieldsSimulation[3] !== 'circle') {clickComputerLogic(3);}
                        else if(fieldsSimulation[3]===sing && fieldsSimulation[6]===sing && fieldsSimulation[0] !=='cross' && fieldsSimulation[0] !== 'circle') {clickComputerLogic(0);}
                        //column 2
                        else if(fieldsSimulation[1]===sing && fieldsSimulation[4]===sing && fieldsSimulation[7] !=='cross' && fieldsSimulation[7] !== 'circle') {clickComputerLogic(7);}
                        else if(fieldsSimulation[1]===sing && fieldsSimulation[7]===sing && fieldsSimulation[4] !=='cross' && fieldsSimulation[4] !== 'circle') {clickComputerLogic(4);}
                        else if(fieldsSimulation[4]===sing && fieldsSimulation[7]===sing && fieldsSimulation[1] !=='cross' && fieldsSimulation[1] !== 'circle') {clickComputerLogic(1);}
                        //column 3
                        else if(fieldsSimulation[2]===sing && fieldsSimulation[5]===sing && fieldsSimulation[8] !=='cross' && fieldsSimulation[8] !== 'circle') {clickComputerLogic(8);}
                        else if(fieldsSimulation[2]===sing && fieldsSimulation[8]===sing && fieldsSimulation[5] !=='cross' && fieldsSimulation[5] !== 'circle') {clickComputerLogic(5);}
                        else if(fieldsSimulation[5]===sing && fieldsSimulation[8]===sing && fieldsSimulation[2] !=='cross' && fieldsSimulation[2] !== 'circle') {clickComputerLogic(2);}
                        //##Diagonally##//
                        //1
                        else if(fieldsSimulation[0]===sing && fieldsSimulation[4]===sing && fieldsSimulation[8] !=='cross' && fieldsSimulation[8] !== 'circle') {clickComputerLogic(8);}
                        else if(fieldsSimulation[0]===sing && fieldsSimulation[8]===sing && fieldsSimulation[4] !=='cross' && fieldsSimulation[4] !== 'circle') {clickComputerLogic(4);}
                        else if(fieldsSimulation[4]===sing && fieldsSimulation[8]===sing && fieldsSimulation[0] !=='cross' && fieldsSimulation[0] !== 'circle') {clickComputerLogic(0);}
                        //column 2
                        else if(fieldsSimulation[2]===sing && fieldsSimulation[4]===sing && fieldsSimulation[6] !=='cross' && fieldsSimulation[6] !== 'circle') {clickComputerLogic(6);}
                        else if(fieldsSimulation[2]===sing && fieldsSimulation[6]===sing && fieldsSimulation[4] !=='cross' && fieldsSimulation[4] !== 'circle') {clickComputerLogic(4);}
                        else if(fieldsSimulation[4]===sing && fieldsSimulation[6]===sing && fieldsSimulation[2] !=='cross' && fieldsSimulation[2] !== 'circle') {clickComputerLogic(2);}
                    }

                    do{
                        logicWinComputer('cross');
                        if (goodRandom===false){
                            logicWinComputer('circle');
                            if (goodRandom===false){
                                let randomClick = Math.floor((Math.random()*9));
                                if(fieldsSimulation[randomClick] !=='cross' && fieldsSimulation[randomClick] !== 'circle') {
                                    fieldsSimulation[randomClick] = 'cross';
                                    fieldsArray[randomClick].innerHTML = crossSvg;
                                    fieldsArray[randomClick].style.backgroundColor = crossFieldsColor;
                                    fieldsArray[randomClick].removeEventListener('click',onePlayer);

                                    whoMove.style.color = circleFieldsColor;
                                    whoMove.innerHTML = "move circle";
                                    move++;
                                    goodRandom = true;
                                    winningLogic(onePlayer);
                                }
                            }
                        }
                    }while (goodRandom !== true);
                },500);
            }
        }

}




