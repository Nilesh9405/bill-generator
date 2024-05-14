const billAmountInput = document.querySelector("#bill-amount");
const numberOfPeopleInput = document.querySelector(".number-of-people");
const generateBilInput = document.querySelector("button");
const eachPersonBillOutput = document.querySelector(".each-person-bill");
const totalBillOutput = document.querySelector(".total");
const totaTipAmountOutput = document.querySelector(".tip-amount");
const customTipBillOutput = document.querySelector(".custom-tip");
const tipContainer = document.querySelector("#tip-container");
const resetBtn = document.querySelector(".reset-btn");

let tipPercentage = 0;

generateBilInput.addEventListener("click", () => {
  const billAmount = parseInt(billAmountInput.value);
  const numberOfPeople = parseInt(numberOfPeopleInput.value);

  const tipAmount = billAmount * (tipPercentage / 100);

  const totalbill = billAmount + tipAmount;
  const eachPersonBill = totalbill / numberOfPeople;

  eachPersonBillOutput.innerText = eachPersonBill;
  totalBillOutput.innerText = totalbill;
  totaTipAmountOutput.innerText = tipAmount;
  resetBtn.disabled = false;
});

tipContainer.addEventListener("click", (e) => {
  if (e.targe !== tipContainer) {
    [...tipContainer.children].forEach((tip) =>
      tip.classList.remove("selected")
    );
    e.target.classList.add("selected");
    e.target.classList.add("selected");
    selectedTip = parseInt(e.target.innerText);
    customTipBillOutput.value = "";
  }
});

customTipBillOutput.addEventListener("input", () => {
  tipPercentage = parseInt(customTipBillOutput.value);
  [...tipContainer.children].forEach((tip) => tip.classList.remove("selected"));
});

resetBtn.addEventListener("click", () => {
  tipPercentage = 0;
  numberOfPeopleInput.value = "";
  customTipBillOutput.value = "";
  billAmountInput.value = "";

  eachPersonBillOutput.innerText = "";
  totalBillOutput.innerText = "";
  totaTipAmountOutput.innerText = "";

  [...tipContainer.children].forEach((tip) => tip.classList.remove("selected"));

  resetBtn.disabled = true;
});
