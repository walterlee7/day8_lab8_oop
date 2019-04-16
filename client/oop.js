let container = document.getElementById('square-container');
let dice = [];

class Die {
    constructor(x, y, size) {
        this.div = document.createElement('div');
        this.div.classList.add('square');
        this.div.id = 'sq';
        this.div.style.left = `${x}px`;
        this.div.style.top = `${y}px`;

        // this.div.style.width = `${size}px`;
        this.div.style.width = `auto`;
        this.div.style.height = `${size}px`;
        this.div.style.backgroundColor = "white";
        this.div.addEventListener('click', () => {
            this.roll();
        })
        this.div.addEventListener('dblclick', () => {
            this.remove();
        })
        container.appendChild(this.div);
    }

    roll() {
        this.value = Math.floor(Math.random() * (7 - 1)) + 1;
        // let numb = `&#${this.value + 9855};`

        let numb = `&#x${this.value + 2679};`
        // console.log(numb);
        this.div.innerHTML = numb;
    }

    remove() {
        this.div.remove();
        for (let i = 0; i < dice.length; i++) {
            if (dice[i] === this) {
                dice.splice(i, 1);
            }
        }
    }
}

let dieButton = document.getElementById('generate-button');
dieButton.addEventListener('click', createDie);

function createDie() {
    let die = new Die(100, 100, 100);
    die.roll();
    dice.push(die);
}

let rollButton = document.getElementById('roll-button');
rollButton.addEventListener('click', rollDie);

function rollDie() {
    for (let i = 0; i < dice.length; i++) {
        dice[i].roll();
    }
}

let sumButton = document.getElementById('sum-button');
sumButton.addEventListener('click', sumDice);

function sumDice() {

    let sum = 0;
    for (let i = 0; i < dice.length; i++) {
        sum += dice[i].value;
    }
    alert("The sum is " + sum + ".");
}

let resetButton = document.getElementById('reset-button');
resetButton.addEventListener('click', reset);

function reset() {
    location.reload();
}





