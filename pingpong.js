const canvas = document.getElementById('pong');
const context = canvas.getContext('2d');
const scoreDisplay = document.getElementById('score');
const startBtn = document.getElementById('startBtn');

let hitCounter = 0;
let animationId = null;

const paddleWidth = 10, paddleHeight = 100, ballRadius = 10;
const player = { x: 0, y: canvas.height / 2 - paddleHeight / 2, width: paddleWidth, height: paddleHeight, dy: 0 };
const computer = { x: canvas.width - paddleWidth, y: canvas.height / 2 - paddleHeight / 2, width: paddleWidth, height: paddleHeight, dy: 0 };
const ball = { x: canvas.width / 2, y: canvas.height / 2, radius: ballRadius, dx: 5, dy: 5 };

function drawRect(x, y, width, height, color) {
    context.fillStyle = color;
    context.fillRect(x, y, width, height);
}

function drawBall(x, y, radius, color) {
    context.fillStyle = color;
    context.beginPath();
    context.arc(x, y, radius, 0, Math.PI * 2);
    context.closePath();
    context.fill();
}

function movePaddle(paddle) {
    paddle.y += paddle.dy;
    if (paddle.y < 0) paddle.y = 0;
    if (paddle.y + paddle.height > canvas.height) paddle.y = canvas.height - paddle.height;
}

function moveBall() {
    ball.x += ball.dx;
    ball.y += ball.dy;

    if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
        ball.dy *= -1;
    }

    if (ball.x - ball.radius < player.x + player.width && ball.y > player.y && ball.y < player.y + player.height) {
        ball.dx *= -1;
        hitCounter++;
    } else if (ball.x + ball.radius > computer.x && ball.y > computer.y && ball.y < computer.y + computer.height) {
        ball.dx *= -1;
        hitCounter++;
    }

    if (ball.x - ball.radius < 0 || ball.x + ball.radius > canvas.width) {
        ball.x = canvas.width / 2;
        ball.y = canvas.height / 2;
        ball.dx *= -1;
        hitCounter = 0;
    }
}

function update() {
    movePaddle(player);
    movePaddle(computer);
    moveBall();
    computer.y += (ball.y - (computer.y + computer.height / 2)) * 0.1;
    scoreDisplay.textContent = `Hits: ${hitCounter}`;
}

function render() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawRect(player.x, player.y, player.width, player.height, '#00ff00');
    drawRect(computer.x, computer.y, computer.width, computer.height, '#0000ff');
    drawBall(ball.x, ball.y, ball.radius, '#ff0000');
}

function gameLoop() {
    update();
    render();
    animationId = requestAnimationFrame(gameLoop);
}

canvas.addEventListener('mousemove', function (event) {
    const rect = canvas.getBoundingClientRect();
    const mouseY = event.clientY - rect.top;
    player.y = mouseY - player.height / 2;
    if (player.y < 0) player.y = 0;
    if (player.y + player.height > canvas.height) player.y = canvas.height - player.height;
});

startBtn.addEventListener('click', function () {
    startBtn.style.display = 'none';
    gameLoop();
});
