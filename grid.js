const GRID_SIZE = 21;

// Here we are setting the randomGridPosition of the Snake
export function randomGridPosition() {
    return {
        x : Math.floor(Math.random()*GRID_SIZE)+1,
        y : Math.floor(Math.random()*GRID_SIZE)+1
    }
}

export function outSideGrid(position) {
    // Here we are just checkig the condition and returning true or false
    return (
        position.x < 1 || position.x > GRID_SIZE || position.y < 1 || position.y > GRID_SIZE 
    )
}