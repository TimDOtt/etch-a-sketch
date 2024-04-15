const container = document.querySelector('.container');
const userInput = document.querySelector('input');

userInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        
        if (event.target.value < 100){
            createGrid(event.target.value);
        }
        userInput.value = '';
    }
})

function createGrid(num) {
    container.innerHTML = '';
   for (i = 0; i < num; i++) {
    const row = document.createElement('div');
    container.appendChild(row);
    row.className = 'row';
    row.addEventListener('mouseover', color);
    for (j = 0; j < num; j++) {
        const col = document.createElement('div');
        col.className = 'col';
        row.appendChild(col);
        col.addEventListener('mouseover', color);   
    }
   }
}

function color(e) {
    let currentColor = 'purple';
    e.target.style.backgroundColor = currentColor;
}

// createGrid(16);