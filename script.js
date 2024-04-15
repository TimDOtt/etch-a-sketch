const container = document.querySelector('.container');
const row = document.querySelectorAll('.row');
const col = document.querySelectorAll('.col');

function createGrid(num) {
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
    let currentColor = 'green';
    e.target.style.backgroundColor = currentColor;
}

createGrid(16);