import { update as updateSnake, draw as drawSnake, SNAKE_SPEED } from "./snake.js";

// Here we are storing value i.e. render time into the variable lastRenderTime
let lastRenderTime = 0

const gameBoard = document.getElementById('game-board');


function main(currentTime) {
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
	updateSnake()
}

function draw() {
	gameBoard.innerHTML = ' ';
	drawSnake(gameBoard)
}
 