const refs = {
  getStartBtn: document.querySelector('[data-start]'),
  getStopBtn: document.querySelector('[data-stop]'),
  getBody: document.querySelector('body'),
}

refs.getStartBtn.addEventListener("click", clickStart);
refs.getStopBtn.addEventListener("click", clickStop);

refs.getStopBtn.disabled = true;

function clickStart() {
  refs.getStartBtn.disabled = true;
  refs.getStopBtn.disabled = false;
  timerId = setInterval(() => {
  refs.getBody.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function clickStop() {
  clearTimeout(timerId);
  refs.getStartBtn.disabled = false;
  refs.getStopBtn.disabled = true;
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


