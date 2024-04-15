const container = document.querySelector('.container');

function createGrid(num) {
   for (i = 0; i < num; i++) {
    const row = document.createElement('div');
    container.appendChild(row);
    row.className = 'row';
    
    for (j = 0; j < num; j++) {
        const col = document.createElement('div');
        col.className = 'col';
        row.appendChild(col);   
    }
   }
}

createGrid(16);