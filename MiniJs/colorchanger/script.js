const body= document.getElementsByTagName("body")[0];

function clicked(name){
    body.style.backgroundColor = name;
}


function random() {
    const red = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);

    const randomColor = `rgb(${red}, ${green}, ${blue})`;
    body.style.backgroundColor = randomColor;
}