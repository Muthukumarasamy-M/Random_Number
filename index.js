const numLabel = document.getElementById("mylabel");
const shuffleButton = document.getElementById("mybutton");
const maxInput = document.getElementById("max");
const minInput = document.getElementById("min");

shuffleButton.addEventListener("click", () => {
  const maxNumber = Number(maxInput.value);
  const minNumber = Number(minInput.value);

  if (!isNaN(maxNumber) && !isNaN(minNumber)) {
    const randomNumber =
      Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
    numLabel.textContent = randomNumber;
  } else {
    numLabel.textContent = "";
  }
});
