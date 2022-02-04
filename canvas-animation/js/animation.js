let myCanvas = document.getElementById("aki");
let ctx = myCanvas.getContext("2d");

let xPosition = 0;
let yPosition = 0;
let xDirection = 2;

/*
function moveHorizontal() {
    // clear screen
    ctx.clearRect(0, 0, 500, 500)
        // draw rect at current position
    ctx.fillRect(xPosition, 0, 20, 20);
    // move the x position over by x pixels
    xPosition += 2;
    //did I hit the wall? if so wrap around
    if (xPosition > 500) {
        xPosition = 0;
    }
}

setInterval(moveHorizontal, 10)
*/

/*
function moveVertical() {
    // clear screen
    ctx.clearRect(0, 0, 500, 500)
        // draw rect at current position
    ctx.fillRect(0, yPosition, 20, 20);
    // move the y position over by x pixels
    yPosition += 2;
    //did I hit the wall? if so wrap around
    if (yPosition > 500) {
        yPosition = 0;
    }
}

setInterval(moveVertical, 10)
*/


function bounceHorizontal() {
    ctx.clearRect(0, 0, 500, 500)
    ctx.fillRect(xPosition, 0, 20, 20);
    xPosition = xPosition + xDirection;
    if (xPosition > 500 | xPosition < 0) {
        xDirection = -xDirection;
    }

}

setInterval(bounceHorizontal, 10)