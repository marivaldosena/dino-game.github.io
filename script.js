const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
let isJumping = false;
let position = 0;

// === Handle Key Up ===
function handleKeyUp(event) {
  if (event.keyCode === 32) {
    if (!isJumping) {
      jump();
    }
  }
}

// === Jump ===
function jump(seconds=20) {
  isJumping = true;
  moveUp(seconds=seconds);
  moveDown(seconds=seconds);
}

// === Move Up ===
function moveUp(max=150, seconds=20) {
  let interval = setInterval(() => {
    if (position >= max) {
      clearInterval(interval);
      isJumping = false;
      moveDown();
    } else {
      position += seconds;
      dino.style.bottom = `${position}px`;
    }
  }, seconds);
}

// === Move Down ===
function moveDown(min=0, seconds=20) {
  let interval = setInterval(() => {
    if (position <= min) {
      clearInterval(interval);
      isJumping = false;
    } else {
      position -= seconds;
      dino.style.bottom = `${position}px`;
    }
  }, seconds);
}

// === Create Cactus ===
function createCactus(seconds=20, speed=10, randomInterval=6000) {
  const cactus = document.createElement('div');
  let cactusPosition = 1000;
  let randomTime = Math.random() * randomInterval;

  cactus.style.left = 1000 + 'px';
  cactus.classList.add('cactus');
  background.appendChild(cactus);

  let interval = setInterval(() => {
    console.log(position);
    if (cactusPosition < -60) {
      clearInterval(interval);
      background.removeChild(cactus);
    } else if (cactusPosition > 0 && cactusPosition < 60 && position < 60) {
      clearInterval(interval); 
      document.body.innerHTML = '<h1 class="game-over">Game over!</h1>';
    }  else {
      cactusPosition -= speed;
      cactus.style.left = `${cactusPosition}px`;
    }
  }, seconds);

  setTimeout(createCactus, randomTime);
}

createCactus();

document.addEventListener('keyup', handleKeyUp);