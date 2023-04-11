const bubbleSortForm = document.getElementById("bubble-sort-form");
const selectionSortForm = document.getElementById("selection-sort-form");
const myAudio = document.getElementById("myAudio");

const TOTAL_VALUE = 400;
var globalValues = [100, 40, 60, 80, 75, 25, 10, 30];
var values = {
  bubblesort: [...globalValues],
  selectionsort: [...globalValues],
};

var clicksBubble = 0;
var clicksSelection = 0;

function removeAllChilds(algoritm) {
  let element = document.getElementById(algoritm + "-content");
  element.innerHTML = "";
  console.clear();
}

function bubbleSort() {
  var aux;
  for (let i = 0; i < clicksBubble; i++) {
    for (let j = 0; j < clicksBubble - 1 - i; j++) {
      if (values.bubblesort[j] > values.bubblesort[j + 1]) {
        aux = values.bubblesort[j];
        values.bubblesort[j] = values.bubblesort[j + 1];
        values.bubblesort[j + 1] = aux;
      }
    }
  }
}

function selectionSort() {
  var aux;
  var minorIndex = 0;
  for (let i = 0; i < clicksSelection; i++) {
    minorIndex = i;
    for (let j = i + 1; j < clicksSelection; j++) {
      if (values.selectionsort[j] < values.selectionsort[minorIndex]) {
        minorIndex = j;
      }
    }
    aux = values.selectionsort[i];
    values.selectionsort[i] = values.selectionsort[minorIndex];
    values.selectionsort[minorIndex] = aux;
  }
}

function updateGraphic(algoritm) {
  removeAllChilds(algoritm);
  values[algoritm.replace("-", "")].forEach((bar) => {
    let b = document.createElement("div");
    let height = (bar * 100) / TOTAL_VALUE;
    if (height > 100) height = 100;
    b.style.height = height + "%";
    b.classList.add("bar");
    if (height > 0)
      document.getElementById(algoritm + "-content").appendChild(b);
  });
  if (algoritm == "bubble-sort") {
    clicksBubble++;
    bubbleSort();
  }
  if (algoritm == "selection-sort") {
    clicksSelection++;
    selectionSort();
  }
}

const formHandler = (event) => {
  let algoritm = event.target.name;
  event.preventDefault();
  updateGraphic(algoritm);
  myAudio.play();
  bubbleSortForm.reset();
  selectionSortForm.reset();
};

bubbleSortForm.addEventListener("submit", formHandler);
selectionSortForm.addEventListener("submit", formHandler);
