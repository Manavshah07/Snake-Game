import { getInputDirection } from "./input.js";

export const SNAKE_SPEED = 5;
let newSegments = 0;

const snakeBody = [{x:11, y:11}]; // Here we will mention snakeBody as X and Y direction as my snake will travel in different directions like down, up, left, right etc.

export function update() {
    addSegments(); // whenever my update function will run i am calling this function
    // console.log('Update Snake');
    const inputDirection = getInputDirection();
    // Here we are running loop from maximum length from snake body to the 0 
    for(let i=snakeBody.length-2; i>=0; i--) {
        snakeBody[i+1] = {...snakeBody[i]}; // Here we are setting my last grid to last-1 grid and we are using spread concept so that our previous data of snake Body couldn't be manipulated and it will be as it is 
    }

    // Here we are using this to increase the size of snake
    snakeBody[0].x+=inputDirection.x;
    snakeBody[0].y+=inputDirection.y;

}

export function draw(gameBoard) {
    // console.log('Draw snake');
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div'); // Here we have created div element
        snakeElement.style.gridRowStart = segment.y; // Here we are styling gridRowStart with y and gridColumStart with X
        snakeElement.style.gridColumnStart = segment.x;
        snakeElement.classList.add('snake'); // Here we adding classname snake into the html code and css code is als wrritten
        gameBoard.appendChild(snakeElement); // here we are adding that to the gameboard
    })
}

// Here my snake will grow with the help of this function
export function expandSnake(amount) {
    newSegments+=amount; // we are appending or adding a new value of amount to newSegments
}

export function onSnake(position, {ignoreHead = false} = {}) {
    // here we are getting index from our snake body so we need to add that also
    return snakeBody.some((segment, index) => {

        if(ignoreHead && index === 0)  return false; // here at the beginning my snake size weill be small so we will return it as false
        return equalPositions(segment, position)
    })
}

// Here i want to check the snakeHead as if snake goes out of box so for that i need to know its head first
export function getSnakeHead() {
    return snakeBody[0]; // Here we are returning first element of snake body 
}

export function SnakeIntersection() {
    return onSnake(snakeBody[0], {ignoreHead: true}); // Here we are returning first element of snake body and we are adding ignoreHead and it will return true or false value
}

function equalPositions(pos1, pos2) {
    return pos1.x === pos2.x  &&  pos1.y === pos2.y // Here if both positions are equal then i will return true
}

//  we are using this function as my snake is eating particular food then i want my size of snake to be increased 
function addSegments() {
    for(let i=0; i<newSegments; i++) {
        // here we are adding one more box to increase the size of snake so we are doing it with the help of push function
        // with the help of ... (spread operator) we are getting all the previous value of snakeBody and we are not manipulating it 
        snakeBody.push({...snakeBody[snakeBody.length-1]});
    }

    newSegments = 0;
}