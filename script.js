document.getElementById(`button`).onclick = function () {
  const output = document.getElementById(`output`);
  const value = Math.floor(Math.random() * 6 + 1);
  const number = document.getElementById(`number`);
  number.textContent = `${value}`;
  const images = `<img src="images/dice-six-faces-${value}.svg">`;
  output.innerHTML = images;
};
