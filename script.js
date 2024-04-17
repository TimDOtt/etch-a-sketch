const container = document.querySelector('.container');
const userInput = document.querySelector('input');
const rainbow = document.querySelector('#rainbow');
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

rainbow.addEventListener('change', function () {
    if (this.checked) {
        createGrid(16);
    }else if (this.checked === false) {
        createGrid(16);
    };
});

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
        if (rainbow.checked) {
            col.addEventListener('mouseover', rainbowColor);
        }else {
            col.addEventListener('mouseover', color);
        }
         
    }
   }
}

// function solidColor() {
//     const square = document.querySelectorAll('.col');

//     square.forEach((square) => {
//         square.addEventListener('mouseover', function color() {
//             square.style.backgroundColor = 'purple';
//         }); 
//     }) 
// }

function generateRandomColor(min, max) {
    return Math.random() * (max - min) + min;
}

function color(e) {
    let currentColor = 'purple';
    e.target.style.backgroundColor = currentColor;
}

function rainbowColor(e) {
    const r = generateRandomColor(0, 255);
    const g = generateRandomColor(0, 255);
    const b = generateRandomColor(0, 255);
    let currentColor = 'rgb(' + r.toString() + ',' + g.toString() + ',' + b.toString() + ')';
    e.target.style.backgroundColor = currentColor;
}

// solidColor();
createGrid(16);