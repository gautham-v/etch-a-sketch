// Create a 16x16 grid of square divs
function color(e){
    this.setAttribute('style', 'background-color: #A6AAE4');
}

function createGrid (columns){
    numOfBoxes = columns*columns;
    let numOfColumns = 'auto';
    for (let i = 1; i<=numOfBoxes; i++){
        const div = document.createElement('div');
        div.classList.add('grid-item');
        container.appendChild(div);
        console.log(`div parent element: ${div.parentElement.id}`);
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


