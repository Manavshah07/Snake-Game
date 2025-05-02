// Here In this file we will  write alll the code related to the inputs like if we click on up arrow then my snake will go to up diretion etc.
let inputDirection = {x:0, y:0}
let lastInputDirection = {x:0, y:0}

window.addEventListener('keydown', event => {
    // Here if we click some key then that data will be obtained their
    switch(event.key) {
        case 'ArrowUp':
            if(lastInputDirection.y !== 0) break;
            inputDirection = {x:0, y:-1};
            break;

        case 'ArrowDown':
            if(lastInputDirection.y !== 0) break;
            inputDirection = {x:0, y:1};
            break;

        case 'ArrowLeft':
            if(lastInputDirection.x !== 0) break;
            inputDirection = {x:-1, y:0};
            break;
        
        case 'ArrowRight':
            if(lastInputDirection.x !== 0) break;
            inputDirection = {x:1, y:0};
            break;
    }
})

export function getInputDirection() {
    lastInputDirection = inputDirection;
    return inputDirection
}

