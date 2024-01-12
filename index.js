const num = document.getElementById("mylabel");
const btn = document.getElementById("mybutton");
const max = document.getElementById("max");
const min = document.getElementById("min");
btn.onclick = function () {
  let m = Number(max.value);
  let n = Number(min.value);
  if (Boolean(m) & Boolean(n)) {
    num.textContent = Math.floor(Math.random() * (m - n + 1)) + n;
  } else {
    num.textContent = "";
  }
};
