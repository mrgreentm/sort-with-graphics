const form = document.getElementById("form-bubble-sort");
const value = document.getElementById("value");
const TOTAL_VALUE = 400;
var values = [100, 40, 60, 80, 75, 25, 10, 30];
var clicks = 0;

function removeAllChilds() {
  document.getElementById("data-container").innerHTML = " ";
}

function bubbleSort() {
  var aux;
  for (let i = 0; i < clicks; i++) {
    swaped = 0;
    for (let j = 0; j < clicks - 1 - i; j++) {
      if (values[j] > values[j + 1]) {
        aux = values[j];
        values[j] = values[j + 1];
        values[j + 1] = aux;
      }
    }
  }
}

function updateGraphic() {
  removeAllChilds();
  values.forEach((bar) => {
    let b = document.createElement("div");
    let height = (bar * 100) / TOTAL_VALUE;
    if (height > 100) height = 100;
    b.style.height = height + "%";
    b.classList.add("bar");
    document.getElementById("data-container").appendChild(b);
  });
  bubbleSort();
}

const formHandler = (event) => {
  clicks++;
  event.preventDefault();
  updateGraphic();
  form.reset();
};

form.addEventListener("submit", formHandler);
