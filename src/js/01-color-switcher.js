const refs = {
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
  body: document.querySelector('body'),
}

refs.startBtn.addEventListener("click", clickStart);
refs.stopBtn.addEventListener("click", clickStop);

function clickStart() {
    refs.startBtn.disabled = true;
    timerId = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function clickStop() {
  clearTimeout(timerId);
  refs.body.style.backgroundColor = 'transparent';
  refs.startBtn.disabled = false;
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
