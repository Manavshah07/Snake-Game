import { getInputDirection } from "./input.js";

export const SNAKE_SPEED = 1;

const snakeBody = [{x:10, y:11}, {x:11, y:11}, {x:12, y:11}]; // Here we will mention snakeBody as X and Y direction as my snake will travel in different directions like down, up, left, right etc.

export function update() {
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