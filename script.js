const container = document.getElementById("bar-container");
let bars = [];
const numBars = 10;
const delay = 1000;

function generateBars() {
  container.innerHTML = "";
  bars = [];

  for (let i = 0; i < numBars; i++) {
    const value = Math.floor(Math.random() * 300) + 20;
    const bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = `${value}px`;
    container.appendChild(bar);
    bars.push(bar);
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function bubbleSort() {
  for (let i = 0; i < bars.length - 1; i++) {
    for (let j = 0; j < bars.length - i - 1; j++) {
      bars[j].classList.add("active");
      bars[j + 1].classList.add("active");

      const height1 = parseInt(bars[j].style.height);
      const height2 = parseInt(bars[j + 1].style.height);

      if (height1 > height2) {
        await sleep(delay);
        [bars[j].style.height, bars[j + 1].style.height] =
          [bars[j + 1].style.height, bars[j].style.height];
      }

      await sleep(delay);
      bars[j].classList.remove("active");
      bars[j + 1].classList.remove("active");
    }
  }
}

// Generate initial bars
generateBars();