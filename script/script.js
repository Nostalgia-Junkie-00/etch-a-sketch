//Get elements
const pad = document.querySelector('.pad');
const gridContainer = document.querySelector('.grid-container');
const clearBtn = document.querySelector('.clear');

//Fill grid container with grid items
let width = 64;
let height = 64;
let wXh = width * height;

function fillGrid() {
    for (let i = 1; i <= wXh; i++){
        const gridItem = document.createElement('div');
        gridItem.className = 'grid-item';
        gridItem.addEventListener('mouseover', () => {
            gridItem.style.backgroundColor = 'white';
        })
        gridContainer.appendChild(gridItem);
    }
}

fillGrid();

//Clear the grid
function clearGrid() {
    const gridItems = document.querySelectorAll('.grid-item');
    if(gridItems.length === 0){
        console.log("No items")
    }else {
        gridItems.forEach((gridItem) => {
            gridItem.style.backgroundColor = 'blue';
        })
    }
}

clearBtn.addEventListener('click', clearGrid);

