const container = document.querySelector('.container');
const userInput = document.querySelector('input');
const rainbow = document.querySelector('#rainbow');
let containerWidth = getComputedStyle(container).width;

createGrid(16);

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
    }
   }
    solidColor();

    rainbow.addEventListener('change', function () {
        if (this.checked) {
            rainbowColor();
        }else {
            solidColor();
        }
    });  
}

function solidColor() {
    const square = document.querySelectorAll('.col');
    square.forEach((square) => {
        square.addEventListener('mouseover', function color() {
            square.style.backgroundColor = 'purple';
        });
    }); 
}
function rainbowColor() {
    const square = document.querySelectorAll('.col');
    square.forEach((square) => {
        square.addEventListener('mouseover', function multiColor() {
            const r = generateRandomNumber(0, 255);
            const g = generateRandomNumber(0, 255);
            const b = generateRandomNumber(0, 255);
            let currentColor = 'rgb(' + r.toString() + ',' + g.toString() + ',' + b.toString() + ')';
            square.style.backgroundColor = currentColor;
        });
    }); 

}

function generateRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}
