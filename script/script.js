//Get elements
const pad = document.querySelector('.pad');
let gridContainer = document.querySelector('.grid-container');
const blackBtn = document.querySelector('.black');
const rainbowBtn = document.querySelector('.rainbow');
const sizeBtn = document.querySelector('.size');
const clearBtn = document.querySelector('.clear');

//Color changer function
let color = 'black';

function getColor() {
    switch (color) {
        case 'black':
            return 'black';
            break;
        case 'rainbow':
            let red = Math.floor(Math.random() * 256);
            let green = Math.floor(Math.random() * 256);
            let blue = Math.floor(Math.random() * 256);
            
            return `rgb(${red}, ${green}, ${blue})`
            break;
        default:
            return 'black';
    }
}

blackBtn.addEventListener('click', () => {
    color = 'black';
})

rainbowBtn.addEventListener('click', () => {
    color = 'rainbow';
})

//Fill grid container with grid items
let wXh = 4096;

function fillGrid() {
    for (let i = 1; i <= wXh; i++){
        const gridItem = document.createElement('div');
        gridItem.className = 'grid-item';
        gridItem.addEventListener('mouseover', () => {
            gridItem.style.backgroundColor = getColor();
        })
        gridContainer.appendChild(gridItem);
    }
}

fillGrid();

//Set the size of the grid
function setGridSize() {
    let size = prompt("Enter dimension number: ");
    let pixel = (64 * 10) / size;
    if (size > 64){
        alert("Error, size cannot exceed 64 pixels. Please enter a smaller value.");
    } else {
        //Remove initial grid
        gridContainer.remove();

        //Create a new grid;
        const newGrid = document.createElement('div');
        newGrid.className = 'grid-container';
        newGrid.style.display = 'grid';
        newGrid.setAttribute('style', `grid-template-columns: repeat(${size}, ${pixel}px); grid-template-rows: repeat(${size}, ${pixel}px)`);
        gridContainer = newGrid;
        pad.appendChild(gridContainer);

        //Fill grid
        wXh = Math.pow(size, 2);
        fillGrid();
    }
}

sizeBtn.addEventListener('click', setGridSize);

//Clear the grid
function clearGrid() {
    const gridItems = document.querySelectorAll('.grid-item');
    if(gridItems.length === 0){
        console.log("No items")
    }else {
        gridItems.forEach((gridItem) => {
            gridItem.style.backgroundColor = 'white';
        })
    }
}

clearBtn.addEventListener('click', clearGrid);
