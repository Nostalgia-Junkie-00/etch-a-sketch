
window.onload = () => {
    const pad = document.querySelector('.pad');
    let gridContainer = document.querySelector('.grid-container');

    let size = 64;
    let pixel = 10;
    let fill = 4096;

    console.log(size);

    gridContainer.setAttribute('style', `grid-template-columns: repeat(${size}, ${pixel}px); grid-template-rows: repeat(${size},${pixel}px)`);

    //Fill grid-container with grid-items
    for(let i = 1; i <= fill; i++){
        const gridItem = document.createElement('div');
        gridItem.className = 'grid-item';
        gridContainer.appendChild(gridItem);
    }

    draw();

    //Add Drawing effect
    function draw() {
        const gridItems = document.querySelectorAll('.grid-item');

        gridItems.forEach((gridItem) => {
            gridItem.addEventListener('mouseover', () => {
                gridItem.style.backgroundColor = "white";
            })
        })
    }
    
    //Reset Dimensions of the grid
    const setSize = document.querySelector('.size');
    setSize.addEventListener('click', () => {
        gridContainer.remove();
        const newContainer = document.createElement('div');
        newContainer.className = "grid-container";
        newContainer.style.display = "grid";

        size = prompt("Enter new size: ");
        pixel = (64 / size) * 10;
        fill = Math.pow(size, 2);

        newContainer.setAttribute('style', `grid-template-columns: repeat(${size}, ${pixel}px); grid-template-rows: repeat(${size},${pixel}px)`);
    
        for(let i = 1; i <= fill; i++){
            const gridItem = document.createElement('div');
            gridItem.className = 'grid-item';
            newContainer.appendChild(gridItem);
        }

        gridContainer = newContainer;
        pad.appendChild(gridContainer);
        draw();
    })

    //Clears the drawing board
    function clear(){
        gridContainer.remove();
        const newContainer = document.createElement('div');
        newContainer.className = "grid-container";
        newContainer.style.display = "grid";

        newContainer.setAttribute('style', `grid-template-columns: repeat(${size}, ${pixel}px); grid-template-rows: repeat(${size},${pixel}px)`);
    
        for(let i = 1; i <= fill; i++){
            const gridItem = document.createElement('div');
            gridItem.className = 'grid-item';
            newContainer.appendChild(gridItem);
        }

        gridContainer = newContainer;
        pad.appendChild(gridContainer);
        draw();
    }

    const clearbutton = document.querySelector('.clear');
    clearbutton.addEventListener('click', clear);
   
    

   
}

