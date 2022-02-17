let myCanvas = document.getElementById("aki");
let ctx = myCanvas.getContext("2d");

let xPosition = 0;
let yPosition = 0;
let xDirection = 5;

//get pargraphs items
let keyDownOutput = document.getElementById("keydown-output");
let keyUpOutput = document.getElementById("keyup-output");

//player position and movement
let playerX = 200;
let playerY = 350;
let playerXDir = 0;
let playerYDir = 0;
let playerSpeed = 5;

//ball position and movement
let ballX = 100;
let ballY = 60;
let ballXDir = 4;
let ballYDir = 4;
const BALL_RADIUS = 10;
const PADDLE_WIDTH = 100;
const PADDLE_HEIGHT = 20;

function drawPlayer() {
    ctx.fillRect(playerX, playerY, PADDLE_WIDTH, PADDLE_HEIGHT)
}

function drawBlock() {
    ctx.fillRect(75, 25, PADDLE_WIDTH, PADDLE_HEIGHT)
}

function drawBlock2() {
    ctx.fillRect(75, 150, PADDLE_WIDTH, PADDLE_HEIGHT)
}


function movePlayer() {
    playerX += (playerSpeed * playerXDir);

    //edge check
    if (playerX < 0) {
        playerX = 0;
    } else if (playerX > 500 - PADDLE_WIDTH) {
        playerX = 400;
    }

}

function drawBall() {
    ctx.beginPath();
    ctx.arc(ballX, ballY, BALL_RADIUS, 0, 2 * Math.PI);
    ctx.fillStyle = "green";
    ctx.fill();
}

function moveBall() {
    ballX += ballXDir;
    ballY += ballYDir;
}



function checkBallCollision() {
    //check vertical wall
    if ((ballY > 500 - BALL_RADIUS) || (ballY < 0 + BALL_RADIUS)) {
        ballYDir = ballYDir * -1;
    }
    if ((ballX > 500 - BALL_RADIUS) || (ballX < 0 + BALL_RADIUS)) {
        ballXDir = ballXDir * -1;
    }

    //check paddle collision 
    if (ballX + BALL_RADIUS >= playerX &&
        ballX - BALL_RADIUS <= playerX + PADDLE_WIDTH &&
        ballY + BALL_RADIUS >= playerY &&
        ballY - BALL_RADIUS <= playerY + PADDLE_HEIGHT) {
        ballYDir = ballYDir * -1
    }
}

function refreshUI() {
    ctx.clearRect(0, 0, 500, 500);
    movePlayer();
    drawPlayer();
    //animate ball
    checkBallCollision();
    moveBall();
    drawBall();
    drawBlock();
    drawBlock2();
}

//when key is pressed
function keyPressed(event) {
    // get the actual key pressed
    let key = event.keyCode;
    keyDownOutput.innerHTML = "Key Down code: " + key;

    // move player
    if (key === 37) {
        playerXDir = -1;
    }
    if (key === 39) {
        playerXDir = 1;
    }
    if (key === 38) {
        playerYDir = -1;
    }
    if (key === 40) {
        playerYDir = 1;
    }
}
//when key is released
function keyReleased(event) {
    // get the actual key pressed
    let key = event.keyCode;
    keyUpOutput.innerHTML = "Key Up code: " + key;
    // move player
    if (key === 37) {
        playerXDir = 0;
    }
    if (key === 39) {
        playerXDir = 0;
    }
    if (key === 38) {
        playerYDir = 0;
    }
    if (key === 40) {
        playerYDir = 0;
    }
}

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

/*
function bounceHorizontal() {
    ctx.clearRect(0, 0, 500, 500)
    ctx.fillRect(xPosition, 0, 20, 20);
    xPosition = xPosition + xDirection;
    if (xPosition > 500 | xPosition < 0) {
        xDirection = -xDirection;
    }

}

setInterval(bounceHorizontal, 10)
*/

setInterval(refreshUI, 30);