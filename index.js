const bubbleSortForm = document.getElementById("bubble-sort-form");
const selectionSortForm = document.getElementById("selection-sort-form");
const myAudio = document.getElementById("myAudio");

const TOTAL_VALUE = 400;
var globalValues = [100, 40, 60, 80, 75, 25, 10, 30];
var values = {
  bubblesort: [...globalValues],
  selectionsort: [...globalValues],
};

var clicks = 0;

function removeAllChilds(algoritm) {
  let element = document.getElementById(algoritm + "-content");
  element.innerHTML = "";
  console.clear();
}

function bubbleSort() {
  var aux;
  for (let i = 0; i < clicks; i++) {
    for (let j = 0; j < clicks - 1 - i; j++) {
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
  for (let i = 0; i < values.selectionsort.length; i++) {
    for (let j = 0; j < values.selectionsort.length; j++) {
      if (values.selectionsort[i] > values.selectionsort[minorIndex]) {
        minorIndex = i;
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
    document.getElementById(algoritm + "-content").appendChild(b);
  });
  if (algoritm == "bubble-sort") {
    bubbleSort();
  }
  if (algoritm == "selection-sort") {
    selectionSort();
  }
}

const formHandler = (event) => {
  let algoritm = event.target.name;
  clicks++;
  event.preventDefault();
  updateGraphic(algoritm);
  myAudio.play()
  bubbleSortForm.reset();
  selectionSortForm.reset();
};

bubbleSortForm.addEventListener("submit", formHandler);
selectionSortForm.addEventListener("submit", formHandler);
