const circleSvg = "<svg class=\"svg\" version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n" +
    "\t width=\"453.689px\" height=\"453.689px\" viewBox=\"0 0 453.689 453.689\" style=\"enable-background:new 0 0 453.689 453.689;\"\n" +
    "\t xml:space=\"preserve\">\n" +
    "<g>\n" +
    "\t<g>\n" +
    "\t\t<path d=\"M231.245,16.365c-9.744,0-19.646,0.582-29.551,1.737c-4.649,0.592-9.272,1.285-13.729,2.049\n" +
    "\t\t\tc-2.869,0.442-5.512,1.29-7.894,2.511c-93.32,12.423-164.763,82.37-178.08,174.695C-14.323,310.471,71.365,417.058,193,434.952\n" +
    "\t\t\tc10.694,1.574,21.703,2.372,32.717,2.372c0.005,0,0,0,0.01,0c111.657,0,208.656-75.921,225.617-176.597\n" +
    "\t\t\tc9.78-58.016-11.34-121.679-57.93-174.67C353.899,41.115,296.299,16.365,231.245,16.365z M244.331,68.285\n" +
    "\t\t\tc43.407,3.062,81.091,21.048,112.071,53.506c36.444,38.182,52.704,91.861,42.432,140.084\n" +
    "\t\t\tc-13.065,61.383-77.612,123.521-175.675,123.521c-11.382,0-22.589-0.99-33.299-2.96c-90.146-16.539-151.098-99.701-135.874-185.4\n" +
    "\t\t\tc13.062-73.488,77.733-124.812,157.285-124.812c5.367,0,10.821,0.241,16.204,0.718C234.099,73.525,239.776,71.847,244.331,68.285z\n" +
    "\t\t\t\"/>\n" +
    "\t</g>\n" +
    "</g>\n" +
    "<g>\n" +
    "</g>\n" +
    "<g>\n" +
    "</g>\n" +
    "<g>\n" +
    "</g>\n" +
    "<g>\n" +
    "</g>\n" +
    "<g>\n" +
    "</g>\n" +
    "<g>\n" +
    "</g>\n" +
    "<g>\n" +
    "</g>\n" +
    "<g>\n" +
    "</g>\n" +
    "<g>\n" +
    "</g>\n" +
    "<g>\n" +
    "</g>\n" +
    "<g>\n" +
    "</g>\n" +
    "<g>\n" +
    "</g>\n" +
    "<g>\n" +
    "</g>\n" +
    "<g>\n" +
    "</g>\n" +
    "<g>\n" +
    "</g>\n" +
    "</svg>\n";


const crossSvg = "<svg class=\"svg\" version=\"1.1\" id=\"Capa_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n" +
    "\t width=\"30.121px\" height=\"30.12px\" viewBox=\"0 0 30.121 30.12\" style=\"enable-background:new 0 0 30.121 30.12;\"\n" +
    "\t xml:space=\"preserve\">\n" +
    "<g>\n" +
    "\t<path d=\"M29.095,20.118c1.365,1.364,1.365,3.582,0,4.948l-4.027,4.027c-0.684,0.684-1.58,1.025-2.475,1.025\n" +
    "\t\tc-0.896,0-1.792-0.344-2.477-1.025l-5.056-5.058l-5.058,5.06c-0.684,0.684-1.58,1.024-2.475,1.024s-1.792-0.343-2.475-1.024\n" +
    "\t\tl-4.027-4.027c-1.367-1.367-1.367-3.584,0-4.949l5.058-5.059l-5.058-5.058c-1.367-1.367-1.367-3.584,0-4.949l4.027-4.027\n" +
    "\t\tc1.366-1.367,3.583-1.367,4.949,0l5.058,5.055l5.057-5.057c1.367-1.367,3.584-1.367,4.95,0l4.027,4.027\n" +
    "\t\tc1.365,1.365,1.365,3.582,0,4.949l-5.059,5.058L29.095,20.118z\"/>\n" +
    "</g>\n" +
    "<g>\n" +
    "</g>\n" +
    "<g>\n" +
    "</g>\n" +
    "<g>\n" +
    "</g>\n" +
    "<g>\n" +
    "</g>\n" +
    "<g>\n" +
    "</g>\n" +
    "<g>\n" +
    "</g>\n" +
    "<g>\n" +
    "</g>\n" +
    "<g>\n" +
    "</g>\n" +
    "<g>\n" +
    "</g>\n" +
    "<g>\n" +
    "</g>\n" +
    "<g>\n" +
    "</g>\n" +
    "<g>\n" +
    "</g>\n" +
    "<g>\n" +
    "</g>\n" +
    "<g>\n" +
    "</g>\n" +
    "<g>\n" +
    "</g>\n" +
    "</svg>";

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Menu variables
const singlePlayer = document.getElementById("singlePlayer");
const twoPlayer = document.getElementById("twoPlayer");
const ranking = document.getElementById("ranking");
const menu = 0;

//  Select single  player mode
singlePlayer.addEventListener('click',turnOneSinglePlayerMode);


/// Main function game
function turnOneSinglePlayerMode() {

    const gameMenu = document.getElementById('gameMenu');
    gameMenu.style.display = "none";

    const ticTacToe = document.getElementById('ticTacToe');
    ticTacToe.style.display = "block";

    let move = 0;
    let fieldsArray =[];
    const whoMove = document.getElementById("whoMove");

    function selectField(){
        move++;
        if(move%2 === 0)
        {

            this.innerHTML = crossSvg;
            this.removeEventListener('click',selectField);
            this.style.backgroundColor = "#DB6759";
        }else {

            this.innerHTML = circleSvg;
            this.removeEventListener('click',selectField);
            this.style.backgroundColor = "#EBAE51";
        }

    }



    for(let i=0; i<9; i++) {
        fieldsArray[i] = document.querySelector(`div[data-field-id="${i+1}"]`);
        fieldsArray[i].addEventListener('click', selectField);
    }
    
}






