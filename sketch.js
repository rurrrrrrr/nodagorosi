let ballX;
let ballY;
let ballSpeedX;
let ballSpeedY;
let ballRadius;
let GG;
let paddleX;
let paddleY;
let paddleSpeed;
let paddleWidth;
let paddleHeight;

function setup() {
    createCanvas(600, 400);
    ballX = width / 2;
    ballY = height / 2;
    ballSpeedX = 6;
    ballSpeedY = 2;
    ballRadius = 15;
    GG = 0;
    paddleX = width / 2;
    paddleY = height - 30;
    paddleSpeed = 15;
    paddleWidth = 150;
    paddleHeight = 15;
}

function draw() {
    background(0);
    ballX = ballX + ballSpeedX;
    ballY = ballY + ballSpeedY;

    if (keyIsDown(LEFT_ARROW)){
        paddleX = paddleX - paddleSpeed;
    }
    if (keyIsDown(RIGHT_ARROW)){
        paddleX = paddleX + paddleSpeed;
    }

    if (paddleX < ballX &&
        ballX < paddleX + paddleWidth &&
        paddleY - ballRadius < ballY &&
        ballY < paddleY) {
        ballSpeedY = -ballSpeedY;
        }

    if (ballX + ballRadius > width){
        ballSpeedX = -ballSpeedX;
    }
    if (ballX - ballRadius < 0){
        ballSpeedX = -ballSpeedX;
    }
    if (ballY + ballRadius > height){
        ballSpeedY = -100;
        ballSpeedX = 200;
        GG = 1;
    }
    if (GG == 1){
         fill("white");
        textAlign(CENTER);
        text("GG",width/2,height/2);
    }
    if (ballY - ballRadius < 0){
        ballSpeedY = -ballSpeedY;
    }

    circle(ballX, ballY, ballRadius * 2);

    ballX+ballRadius == width
    width < ballX + ballRadius
    rect(paddleX, paddleY, paddleWidth, paddleHeight);
} 