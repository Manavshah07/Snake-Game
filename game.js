import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, SnakeIntersection } from "./snake.js";
import { update as updateFood, draw as drawFood } from "./food.js";
import { outSideGrid } from "./grid.js";


// Here we are storing value i.e. render time into the variable lastRenderTime
let lastRenderTime = 0

const gameBoard = document.getElementById('game-board');

let gameOver = false;

function main(currentTime) {
	// If my snake has dead so we implement gameOver function and we have given alery you lose and after this we want nothing to be happened so we have return the alert so after this nothing of this function or code will run
	if(gameOver) {
		if(confirm('you lost. press ok to restart')) {
			// if user clicks on okay then a true value will be return 
			window.location='/'; // This will take to the intial page i.e. home page  
		}
		return 
	}
	// window.requestAnimationFrame(main); // I have wrote this line here as i want run this function over and over again
	
	/* Here i want to know that how many seconds it has time has been passed since last render so i am storing the seconds passed into some variable*/
	const secondsSinceLastRender = (currentTime - lastRenderTime)/1000; // for counting seconds we have divided it by 1000
	
	/*We used for animation kind thing and we wrote main so that we can call function as many as times we want*/
	window.requestAnimationFrame(main);
	// console.log(secondsSinceLastRender);
	
	if(secondsSinceLastRender<1/SNAKE_SPEED) return
	console.log('Render');

	lastRenderTime = currentTime; // Here I am fetching the data that the last time it is rendered and then setting it to the current time


	update() // with the help of this function we will update the snake position as it will move from one place to other place
	draw() // with the help of this function we will design our snake and all other components which are surronding around it 


}

window.requestAnimationFrame(main)

function update() {
	updateSnake();
	updateFood();
	checkDeath();
}

function draw() {
	gameBoard.innerHTML = ' ';
	drawSnake(gameBoard);
	drawFood(gameBoard);
}

// Here we write this function as my snake will die due to the both of the condition 
function checkDeath() {
	gameOver = outSideGrid(getSnakeHead()) || SnakeIntersection()
}
 
