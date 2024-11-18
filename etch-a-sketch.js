const container = document.querySelector('.container');
const button = document.querySelector('button');
let squares = 16;
let isDrawing = false;
function createGrid(squares) {
    for (let i = 0; i < squares; i++) {
        const parentDiv = document.createElement('div');
        parentDiv.classList.add('row');
        parentDiv.style.width = '800px';
        parentDiv.style.height = `${800 / squares}px`;
        for (let j = 0; j < squares; j++) {
            const newDiv = document.createElement('div');
            newDiv.style.width = `${800 / squares}px`;
            newDiv.style.height = `${800 / squares}px`;

            newDiv.addEventListener('mousemove', () => {    
                if(isDrawing) {
                    newDiv.style.backgroundColor = 'black';
                    newDiv.classList.add('clicked');
                    console.log('moving');
                }
            });

            newDiv.addEventListener('mouseover', () => {
                
                if(!newDiv.classList.contains('clicked') && !isDrawing) {
                    newDiv.style.backgroundColor = 'black';
                    console.log('hovering');
                }
            });
            newDiv.addEventListener('mouseout', () => {
                if(!newDiv.classList.contains('clicked') && !isDrawing) {
                    newDiv.style.backgroundColor = 'blanchedalmond';
                    console.log('leaving');
                }
            });
            newDiv.addEventListener('mousedown', (e) => {
                e.preventDefault();
                console.log('click');
                isDrawing = true;
                if(newDiv.classList.contains('clicked')) {
                    newDiv.style.backgroundColor = 'blanchedalmond'
                    newDiv.classList.remove('clicked');
                    return;
                }
                newDiv.style.backgroundColor = 'black';
                newDiv.classList.add('clicked');
            });
            newDiv.addEventListener('mouseup', () => {
                isDrawing = false;
                console.log('unclick');

            });
            parentDiv.appendChild(newDiv);
        }
        container.appendChild(parentDiv);
    }
}


button.addEventListener('click', () => {
    let input = prompt('Enter the number of squares per side for the new grid');
    if (input === null) {
        return;
    }
    if (input < 1 || input > 100) {
        alert('Please enter a number between 1 and 100');
        return;
    }
    if (typeof parseInt(input) !== 'number') {
        alert('Please enter a number');
        return;
    }
    squares = input;
    container.innerText = '';
    createGrid(squares);
});

createGrid(squares);

