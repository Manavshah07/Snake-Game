import {onSnake, expandSnake} from "./snake.js";
import { randomGridPosition } from "./grid.js";


let food = getRandomFoodPosition();
const EXPANSION_RATE = 1;

// After eating food my snake size should be expanded so writing fucntion for that basis
export function update() {
    if(onSnake(food)) {
        expandSnake(EXPANSION_RATE)
        food = getRandomFoodPosition(); // Here we are changing the position of food when snake food is over
    }

}

export function draw(gameBoard) {
    const foodElement = document.createElement('div')

    foodElement.style.gridRowStart = food.y; // Here we are styling gridRowStart with y and gridColumStart with X
    foodElement.style.gridColumnStart = food.x; 
    foodElement.classList.add('food'); // Here we adding classname snake into the html code and css code is also wrritten
    gameBoard.appendChild(foodElement); // here we are adding that to the gameboard

}

function getRandomFoodPosition() {
    let newFoodPosition;
    // Here i am checking conditions that my newFoodPostion is null or if my snake becomes very long and touches itself then i want to my end the game so we are applying that second condition
    while(newFoodPosition == null || onSnake(newFoodPosition)) {
        // here i will update newFoodPosition to some random value 
        newFoodPosition = randomGridPosition();
    }
    return newFoodPosition;
}


