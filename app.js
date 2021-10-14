const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const errorMessage = document.querySelector("#error-message");

checkButton.addEventListener("click", () => {
  errorMessage.style.display = "none";
  if (billAmount.value > 0) {
    if (cashGiven.value >= billAmount.value) {
      let amountToBeReturned = cashGiven.value - billAmount.value;
      calculateChange(amountToBeReturned);
    } else {
      showMessage(
        "The cash provided should be atleast equal to the bill amount."
      );
    }
  } else {
    showMessage("The bill amount should be greater than 0.");
  }
});

function showMessage(message) {
  errorMessage.style.display = "block";
  errorMessage.innerText = message;
}

function calculateChange() {}
