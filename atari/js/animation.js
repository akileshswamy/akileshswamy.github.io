let myCanvas = document.getElementById("aki");
let ctx = myCanvas.getContext("2d");

let xPosition = 0;
let yPosition = 0;
let xDirection = 5;
let score = 0;
let lives = 3;

//get pargraphs items
let keyDownOutput = document.getElementById("keydown-output");
let keyUpOutput = document.getElementById("keyup-output");

//player position and movement
let playerX = 200;
let playerY = 450;
let playerXDir = 0;
let playerYDir = 0;
let playerSpeed = 15;

//ball position and movement
let ballX = 175;
let ballY = 350;
let ballXDir = 6;
let ballYDir = 6;
const BALL_RADIUS = 10;
const PADDLE_WIDTH = 100;
const PADDLE_HEIGHT = 10;

function drawPlayer() {
    ctx.fillRect(playerX, playerY, PADDLE_WIDTH, PADDLE_HEIGHT)
}

/*
function drawBlock() {
    ctx.fillRect(75, 25, PADDLE_WIDTH, PADDLE_HEIGHT)
}


function drawBlock2() {
    ctx.fillRect(75, 150, PADDLE_WIDTH, PADDLE_HEIGHT)
}
*/
//blocks variables
/*
let blocks = [];
let blockRow = 3;
let blockColumn = 4;
let blockWidth = 112.5;
let blockHeight = 25;
let blockWidthDiff = 25;
let blockHeightDiff = 25;

function drawBlocks() {
    for (let column = 0; column < blockColumn; column++) {
        blocks[column] = [];
        for (let row = 0; row < blockRow; row++) {
            //spacing between blocks
            let xBlock = (column * blockWidth) + blockWidthDiff;
            let yBlock = (row * blockHeight) + blockHeightDiff;
            blocks[column][row] = xBlock;
            blocks[column][row] = yBlock;
            ctx.beginPath();
            ctx.rect(xBlock, yBlock, blockWidth, blockHeight);
            ctx.fillStyle = "#0095DD";
            ctx.fill();
            ctx.closePath();
        }
    }
}
*/

let blockRow = 8;
let blockColumn = 5;
let blockWidth = 75;
let blockHeight = 20;
let blockPadding = 10;
let blockOffsetTop = 30;
let blockOffsetLeft = 40;

let blocks = [];
for (let column = 0; column < blockColumn; column++) {
    blocks[column] = [];
    for (let row = 0; row < blockRow; row++) {
        blocks[column][row] = { x: 0, y: 0, status: 1 };
    }
}

function drawblocks() {
    for (let column = 0; column < blockColumn; column++) {
        for (let row = 0; row < blockRow; row++) {
            if (blocks[column][row].status == 1) {
                let blockX = (column * (blockWidth + blockPadding)) + blockOffsetLeft;
                let blockY = (row * (blockHeight + blockPadding)) + blockOffsetTop;
                blocks[column][row].x = blockX;
                blocks[column][row].y = blockY;
                ctx.beginPath();
                ctx.rect(blockX, blockY, blockWidth, blockHeight);
                ctx.fillStyle = "green";
                ctx.fill();
                ctx.closePath();
            }
        }
    }

}

function blockBreaking() {
    for (let column = 0; column < blockColumn; column++) {
        for (let row = 0; row < blockRow; row++) {
            let block = blocks[column][row];
            if (block.status == 1) {
                if (ballX > block.x && ballX < block.x + blockWidth && ballY > block.y && ballY < block.y + blockHeight) {
                    ballYDir = -ballYDir * 1.001;
                    block.status = 0;
                    score++;
                    if (score == 40) {
                        alert("Game Over. You reached the high score! Press OK to play again!");
                        location.reload();
                    }
                }
            }
        }
    }
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

//ballY > 500 - BALL_RADIUS
//ballY < 0 + BALL_RADIUS
function checkBallCollision() {
    //check vertical wall
    if (ballY < 0 + BALL_RADIUS) {
        ballYDir = ballYDir * -1.05;
    }
    if ((ballX > 500 - BALL_RADIUS) || (ballX < 0 + BALL_RADIUS)) {
        ballXDir = ballXDir * -1.05;
    }
    if (ballY > 500 - BALL_RADIUS) {
        lives--;
        ballX = 250;
        ballY = 300;
        ballXDir = 5;
        ballYDir = 5;
        if (lives == 0) {
            alert("Game Over. Your score was " + score + "! Press OK to play again!");
            location.reload();
        }


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
    // drawBlock();
    // drawBlock2();
    drawblocks();
    blockBreaking();
    theScore();
    theLives();
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

function theScore() {
    ctx.font = "16px Arial";
    ctx.fillText("Score: " + score, 8, 20);
}

function theLives() {
    ctx.font = "16px Arial";
    ctx.fillText("Lives: " + lives, 435, 20);
}


setInterval(refreshUI, 30)