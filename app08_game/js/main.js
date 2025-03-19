/*esto es para traer el canvas del html*/
var c = document.getElementById("arkanoidCanva");
var ctx = c.getContext("2d");

/*parametro me permite dibujar el circulo "formas"*/
var radius = 10;
var x = c.width / 2;
var y = c.height - radius;
var dx = 2;
var dy = -2;

function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI);
  ctx.fillStyle = "#0066cc";
  ctx.fill();
  ctx.closePath();
}

var paddlex = c.width / 2;
var paddley = c.height - 10;
var paddlew = 60;
var paddleh = 12;

var rightMove = false;
var leftMove = false;

var brickRows = 3;
var brickColums = 5;
var brickWidth = 50;
var brickHeigh = 20;
var brickPadding = 12;
var brickofSetTop = 30;
var brickOfsetLeft = 125;

var score = 0;
var lives = 3;

var bricks = [];
for (let i = 0; i < brickColums; i++) {
  bricks[i] = [];
  for (let j = 0; j < brickRows; j++) {
    bricks[i][j] = { x: 0, y: 0, drawbrick: true };
  }
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("mousemove", mouseMoveHandler, false);

function keyDownHandler(e) {
  if (e.keyCode == 37) {
    leftMove = true;
  } else {
    if (e.keyCode == 39) {
      rightMove = true;
    }
  }
}

function keyUpHandler(e) {
  if (e.keyCode == 37) {
    leftMove = false;
  } else {
    if (e.keyCode == 39) {
      rightMove = false;
    }
  }
}

function KeyUpHandler(e) {}

function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddlex, paddley, paddlew, paddleh);
  ctx.fillStyle = "#cc0000";
  ctx.fill();
  ctx.closePath();
}

function mouseMoveHandler(e) {
  var mouseRelativeX = e.clientX - c.offsetLeft;
  if (mouseRelativeX > 0 && mouseRelativeX < c.width) {
    paddlex = mouseRelativeX - paddlew / 2;
  }
}

function drawBricks() {
  for (let i = 0; i < brickColums; i++) {
    for (let j = 0; j < brickRows; j++) {
      if (bricks[i][j].drawbrick) {
        var bx = i * (brickWidth + brickPadding) + brickOfsetLeft;
        var by = j * (brickHeigh + brickPadding) + brickofSetTop;

        bricks[i][j].x = bx;
        bricks[i][j].y = by;
        ctx.rect(bx, by, brickWidth, brickHeigh);
        ctx.fillStyle = "#cc0000";
        ctx.fill();
        ctx.closePath();
      }
    }
  }
}

function detectHits() {
  for (let i = 0; i < brickColums; i++) {
    for (let j = 0; j < brickRows; j++) {
      var brick = bricks[i][j];
      if (bricks[i][j].drawBrik) {
        if (
          x > brick.x &&
          x < brick.x + brickWidth &&
          y > brick.y &&
          y < brick.y + brickHeigh
        ) {
          dy = -dy;
          brick.drawbrick = false;
          score++;
          if (score == brickColums + brickRows) {
            alert("CONGRATULATION YOU'RE THE BEST!");
          }
        }
      }
    }
  }
}

function drawScore() {
  ctx.font = "18px Arial";
  ctx.fillStyle = "#0033cc";
  ctx.fillText("Score: " + lives, c.width - 80, 20);
}

function drawLives() {
  ctx.font = "18px Arial";
  ctx.fillStyle = "#0033cc";
  ctx.fillText("Score: " + score, 10, 20);
}

function draw() {
  ctx.clearRect(0, 0, c.width, c.height);
  drawPaddle();
  drawBall();
  drawBricks();
  detectHits();
  drawScore();
  drawLives();
  if (x + dx > c.width - radius || x + dx < radius) {
    dx = -dx;
  }

  if (y + dy < radius) {
    dy = -dy;
  } else {
    if (y + dy > c.height - radius) {
      if (x > paddlex && x < paddlex + paddlew) {
        dy = -dy;
      } else {
        lives--;
        if (lives < 1) {
          gameover();
          return;
        } else {
          x = c.width / 2;
          y = c.height - radius;
          dx = 2;
          dy = -2;
          paddlex = c.width / 2;
        }
      }
    }
  }

  if (leftMove && paddlex > 0) {
    paddlex -= 8;
  }

  if (rightMove && paddlex < c.width - paddlew) {
    paddlex += 8;
  }

  x += dx;
  y += dy;
}

function gameover() {
  document.getElementById("arkanoidCanvaGo").style.display = "block";
  ctx.font = "40px Arial";
  ctx.fillStyle = "#0033cc";
  ctx.fillText("GAME OVER", c.width / 2, c.height / 2);
}

/*función de Js para llamar a una función reiteradas veces cada n tiempos */
setInterval(draw, 10);
