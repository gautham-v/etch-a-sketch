// Create a 16x16 grid of square divs
function color(e){
    let startingColor = window.getComputedStyle(this).getPropertyValue("background-color"); 
    let red = startingColor.substring(4,startingColor.indexOf(','));
    let green = startingColor.substring(startingColor.indexOf(' ')+1,startingColor.lastIndexOf(','));
    let blue = startingColor.substring(startingColor.lastIndexOf(' ')+1,startingColor.lastIndexOf(')'));

    if (startingColor === 'rgb(255, 255, 255)'){
        const randomColor = randomColorGenerator();
        this.setAttribute('style', `background-color: ${randomColor}`);
        this.redReductionValue = getDarkerValue(red);
        this.greenReductionValue = getDarkerValue(green);
        this.blueReductionValue = getDarkerValue(blue);
    }
    else {
        red = Math.max(0, red - this.redReductionValue);
        green = Math.max(0, green - this.greenReductionValue);
        blue = Math.max(0, blue - this.blueReductionValue);
        let darkerColor = `rgb(${red}, ${green}, ${blue})`;
        this.setAttribute('style', `background-color: ${darkerColor}`);
    }
}

function getDarkerValue(color){
    let reduction = Math.ceil(color/10);
    return reduction;
}

function randomColorGenerator(){
    let min = 0;
    let max = 256;
    let randomColor = 'rgb(';
    for (i = 0; i<=2; i++){
        var val = Math.floor(Math.random() * (max - min + 1) + min);
        randomColor += val + ',';
    }
    randomColor = randomColor.slice(0,-1);
    randomColor += ')'
    return randomColor;
}

function createGrid (columns){
    numOfBoxes = columns*columns;
    let numOfColumns = 'auto';
    for (let i = 1; i<=numOfBoxes; i++){
        const div = document.createElement('div');
        div.classList.add('grid-item');
        container.appendChild(div);
    }
    for (let i = 1; i<=columns-1; i++){
        numOfColumns += ' auto';
    }
    container.setAttribute('style', `grid-template-columns: ${numOfColumns}`);
    var griditems = container.querySelectorAll('div');
    griditems.forEach(function (item) {
        item.addEventListener("mouseover", color);
    });

}

function clearGrid(){
    // container is going to null somewhere here
    var griditems = container.querySelectorAll('div');
    griditems.forEach(function (item) {
        item.remove();
    });
}

function resizeGrid(){
    let newsize = prompt('Enter a new grid size');
    newsize = parseInt(newsize, 10);
    if (newsize <= 100) {
        clearGrid();
        createGrid(newsize);
    }
    else{
        alert('Too many columns!');
    }
}

const container = document.querySelector('#container');
createGrid(16);
const resizeButton = document.querySelector('.resize-btn');
resizeButton.addEventListener('click', resizeGrid);


