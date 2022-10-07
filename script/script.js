const gridContainer = document.querySelector('.grid-container');

for(let i = 0; i < 256; i++){
    const gridItem = document.createElement('div');
    gridItem.className = 'grid-item';
    gridContainer.appendChild(gridItem);
}

const setSize = document.querySelector('button');
console.log(setSize);