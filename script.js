const label = document.querySelector("label"); // wird verändert
const main = document.querySelector("main");
const button = document.querySelector("button");
let counter = 0;
let colorCounter = 0;

function increaseCounter() {
  counter++;
  label.innerText = counter; // <label>Text</label> wird hochgezählt

  colorCounter++;
  if (colorCounter === 101) {
    colorCounter = 1; // Counter zurücksetzen für Farbbalken
  }
  main.style.setProperty("--counter", colorCounter + "%");
}

// wenn ein Key (Enter oder " " (Space)) gedrückt wird:
document.addEventListener("keypress", function (e) {
  if (["Enter", " "].includes(e.key)) {
    increaseCounter();
  }
});

// wenn Main (weißer Bereich) geklickt wird:
main.addEventListener("click", increaseCounter);

// wenn Reset gedrückt wird:
button.addEventListener("click", resetCounter);
function resetCounter() {
  counter = 0;
  colorCounter = 0;
  label.innerText = counter;
  main.style.setProperty("--counter", 0 + "%");
  button.blur();
}
