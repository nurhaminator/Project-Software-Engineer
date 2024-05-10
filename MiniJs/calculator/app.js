
const display = document.getElementById("display");

const body= document.getElementsByTagName("body")[0];

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = null;
}

function calculate(){
    try {
        display.value = eval(display.value);

    } catch (error) {
        display.value = "Error";
    }
    
}
function colorChange(name){
    body.style.backgroundColor = name;
}
