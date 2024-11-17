const container = document.querySelector('.container');
const widthX = 1900 * 16;
const heightY = 48 * 16;
const button = document.querySelector('button');
let squares = 16;
function createGrid(squares) {
    for (let i = 0; i < squares; i++) {
        const parentDiv = document.createElement('div');
        parentDiv.classList.add('row');
        for (let j = 0; j < squares; j++) {
            const newDiv = document.createElement('div');
            newDiv.style.width = `${widthX / squares}px`;
            newDiv.style.height = `${heightY / squares}px`;
            newDiv.addEventListener('mouseover', () => {
                newDiv.style.backgroundColor = 'black';
            });
            newDiv.addEventListener('mouseout', () => {
                if(!newDiv.classList.contains('clicked')) {
                    newDiv.style.backgroundColor = 'blanchedalmond';
                }
            });
            newDiv.addEventListener('click', () => {
                if(newDiv.classList.contains('clicked')) {
                    newDiv.style.backgroundColor = 'blanchedalmond'
                    newDiv.classList.remove('clicked');
                    return;
                }
                newDiv.style.backgroundColor = 'black';
                newDiv.classList.add('clicked');
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

