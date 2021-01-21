const dino = document.querySelector('.dino');

function handleKeyUp(event) {
  if (event.keyCode === 32) {
    jump();
  }
}

function jump(seconds=20) {
  let position = 0;

  moveUp(position=0);
  moveDown(position=150);
}

function moveUp(position=0, max=150, seconds=20) {
  let interval = setInterval(() => {
    if (position >= max) {
      clearInterval(interval);
    } else {
      position += seconds;
      dino.style.bottom = `${position}px`;
    }
  }, seconds);
}

function moveDown(position=0, min=0, seconds=20) {
  let interval = setInterval(() => {
    if (position <= min) {
      clearInterval(interval);
    } else {
      position -= seconds;
      dino.style.bottom = `${position}px`;
    }
  }, seconds);
}

document.addEventListener('keyup', handleKeyUp);