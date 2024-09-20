// add money to the account
/*
s-1: add event handler (prevent page reload after from submit)
s-2: get money to be added to the account balance (get the pin number)
s-3: verify the pin number
*/

// step-1: add an event handler to the add money button inside the form
document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();

    // step-2: get money to be added to the account balance
    const addMoneyInput = document.getElementById("input-add-money").value;
    // get the pin number provided
    const pinNumber = document.getElementById("input-pin-number").value;

    console.log(addMoneyInput, pinNumber);

    // step-3: verify the pin number
    if (pinNumber === "1234") {
      console.log("Adding money on your account");

      // step-4: get the current balance
      const currentBalance =
        document.getElementById("account-balance").innerText;
      console.log(currentBalance);

      // step-5: add addMoneyInput with currentBalance
      const newBalance = parseFloat(currentBalance) + parseFloat(addMoneyInput);
      console.log(newBalance);

      // step-6: update the balance in the UI/DOM
      document.getElementById("account-balance").innerText = newBalance;
    } else {
      alert("Failed to add money !");
    }
  });
