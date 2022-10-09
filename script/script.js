//Get the drawing pad and grid container
const pad = document.querySelector('.pad');
const gridContainer = document.querySelector('.grid-container');

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