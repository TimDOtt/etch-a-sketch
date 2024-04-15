const container = document.querySelector('.container');
const userInput = document.querySelector('input');
let containerWidth = getComputedStyle(container).width;

userInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
       const value = parseInt(event.target.value);
        if (Number.isInteger(value) === true && value < 100) {
            createGrid(value);
        }
        userInput.value = '';
    }
})



function createGrid(num) {
    container.innerHTML = '';
    let squareSize = parseInt(containerWidth) / parseInt(num) - 2;
   for (i = 0; i < num; i++) {
    const row = document.createElement('div');
    row.className = 'row';
    row.style.width = squareSize + 'px';
    container.appendChild(row);
    
    for (j = 0; j < num; j++) {
        const col = document.createElement('div');
        col.className = 'col';
        col.style.height = squareSize + 'px';
        row.appendChild(col);
        col.addEventListener('mouseover', color);   
    }
   }
}

function color(e) {
    let currentColor = 'purple';
    e.target.style.backgroundColor = currentColor;
}
createGrid(16);