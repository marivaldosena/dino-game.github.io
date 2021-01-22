const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
let isJumping = false;

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
  let position = 0;
  isJumping = true;

  moveUp(position=0);
  moveDown(position=150);
}

// === Move Up ===
function moveUp(position=0, max=150, seconds=20) {
  let interval = setInterval(() => {
    if (position >= max) {
      clearInterval(interval);
      isJumping = false;
    } else {
      position += seconds;
      dino.style.bottom = `${position}px`;
    }
  }, seconds);
}

// === Move Down ===
function moveDown(position=0, min=0, seconds=20) {
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
    
    if (cactusPosition < -60) {
      clearInterval(interval);
      background.removeChild(cactus);
    } else {
      cactusPosition -= speed;
      cactus.style.left = `${cactusPosition}px`;
    }
  }, seconds);

  setTimeout(createCactus, randomTime);
}

createCactus();
document.addEventListener('keyup', handleKeyUp);