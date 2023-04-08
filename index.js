const form = document.getElementById("form");
const value = document.getElementById("value");
var bars = [];
const TOTAL_VALUE = 400;

function removeAllChilds() {
  document.getElementById("data-container").innerHTML = "";
}

function updateGraphic() {
  removeAllChilds();
  console.log(bars);
  bars.forEach((bar) => {
    let b = document.createElement("div");
    let height = (bar.value * 100) / TOTAL_VALUE;
    if (height > 100) height = 100;
    b.style.height = height + "%";
    b.classList.add("bar");
    document.getElementById("data-container").appendChild(b);
  });
}

const formHandler = (event) => {
  event.preventDefault();
  const data = event.target.data.value;
  const bar = { value: data };
  bars.push(bar);
  updateGraphic();
  form.reset();
};

form.addEventListener("submit", formHandler);
