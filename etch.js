// Create a 16x16 grid of square divs
function color(e){
    //alert("Mouse over working!");
    //console.log(this.classList.value);
    this.setAttribute('style', 'background-color: #2fa745');
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
}

function clearGrid(){
    // container is going to null somewhere here
    console.log(griditems.parentElement.id);
    griditems.forEach(function (item) {
        console.log(`item's parent element's class name: ${item.parentElement.id}`);
        item.parentNode.removeChild(item);
    });
    console.log(griditems);
    console.log(container.id);
}

function resizeGrid(){
    let newsize = prompt('Enter a new grid size');
    let numOfColumns = 'auto';
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
const griditems = document.querySelectorAll('.grid-item');



griditems.forEach(function (item) {
    item.addEventListener("mouseover", color);
  });

const resizeButton = document.querySelector('.resize-btn');
resizeButton.addEventListener('click', resizeGrid);


