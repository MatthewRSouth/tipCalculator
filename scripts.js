//set strict mode later

const WIDTH = 25;
const btnContainer = document.querySelector(".taxWrapper");

function slideBg(n) {
  const bgOffset = WIDTH * n;
  btnContainer.style.setProperty("--bg--offset", `${bgOffset}%`);
}

const btn10 = document.getElementById("btn10");
const btn15 = document.getElementById("btn15");
const btn18 = document.getElementById("btn18");
const btn20 = document.getElementById("btn20");
let currentTipPercentage = 0;
let billNum = document.getElementById("billNum");
let tipNum = document.getElementById("tipNum");

function pickTaxPercent(tipPercentage) {
  const taxInformation = document.getElementById("taxInformation");

  switch (tipPercentage) {
    case 10:
      taxInformation.innerHTML = "Poor food, poor service.";
      break;
    case 15:
      taxInformation.innerHTML = "Average food, average service.";
      break;
    case 18:
      taxInformation.innerHTML = "Above average food and service";
      break;
    case 20:
      taxInformation.innerHTML = "Excellent food and service";
      break;
    default:
      taxInformation.innerHTML = "Poor food, poor service.";
      break;
  }
  currentTipPercentage = tipPercentage;
  calcuateTipAndTotal();
}
let billAmount;
function calcuateTipAndTotal() {
  billAmount = parseFloat(document.getElementById("billNum").value);

  const tipAmount = (billAmount * currentTipPercentage) / 100;
  const totalAmount = billAmount + tipAmount;

  document.getElementById("tipNum").innerHTML = "$" + tipAmount.toFixed(2);
  document.getElementById("totalNum").innerHTML = "$" + totalAmount.toFixed(2);
}
//Event Listeners for buttons
document.getElementById("btn10").addEventListener("touchstart", function () {
  pickTaxPercent(10);
});
document.getElementById("btn15").addEventListener("touchstart", function () {
  pickTaxPercent(15);
});
document.getElementById("btn18").addEventListener("touchstart", function () {
  pickTaxPercent(18);
});
document.getElementById("btn20").addEventListener("touchstart", function () {
  pickTaxPercent(20);
});

const resetBtn = document.getElementById("reset");
resetBtn.addEventListener("touchstart", function () {
  window.location.reload();
});
