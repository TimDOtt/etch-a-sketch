const container = document.querySelector('.container');
const userInput = document.querySelector('input');
let containerWidth = getComputedStyle(container).width;

userInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
       const value = parseInt(event.target.value);
        if (Number.isInteger(value) === true && value < 65 && value > 0) {
            createGrid(value);
        }
        userInput.value = '';
    }
})



function createGrid(num) {
    container.innerHTML = '';
    let squareSize = parseInt(containerWidth) / parseInt(num);
   for (i = 1; i <= num; i++) {
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
function generateRandomColor(min, max) {
    return Math.random() * (max - min) + min;
}


function color(e) {
    const r = generateRandomColor(0, 255);
    console.log(r);
    const g = generateRandomColor(0, 255);
    const b = generateRandomColor(0, 255);
    let currentColor = 'rgb(' + r.toString() + ',' + g.toString() + ',' + b.toString() + ')';
    e.target.style.backgroundColor = currentColor;
}
createGrid(16);