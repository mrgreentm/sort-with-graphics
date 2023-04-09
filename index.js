const bubbleSortForm = document.getElementById("bubble-sort-form");
const selectionSortForm = document.getElementById("selection-sort-form");
const TOTAL_VALUE = 400;
var values = [100, 40, 60, 80, 75, 25, 10, 30];
var clicks = 0;

function removeAllChilds(algoritm) {
  console.log(algoritm)
  document.getElementById("bubble-sort").innerHTML = "";
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

function updateGraphic(algoritm) {
  removeAllChilds(algoritm);
  values.forEach((bar) => {
    let b = document.createElement("div");
    let height = (bar * 100) / TOTAL_VALUE;
    if (height > 100) height = 100;
    b.style.height = height + "%";
    b.classList.add("bar");
    document.getElementById("bubble-sort").appendChild(b);
  });
  bubbleSort();
}

const formHandler = (event) => {
  let algoritm = event.target.name;
  clicks++;
  event.preventDefault();
  switch (algoritm) {
    case "bubbleSort":
      updateGraphic("bubble-sort");
    case "selectionSort":
      updateGraphic("selection-sort");
    default:
      updateGraphic("bubble-sort");
  }
  updateGraphic();
  bubbleSortForm.reset();
  selectionSortForm.reset();
};

bubbleSortForm.addEventListener("submit", formHandler);
selectionSortForm.addEventListener("submit", formHandler);
