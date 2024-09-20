// add money to the account
/*
s-1: add event handler(prevent page reload after from submit)
s-2: get money to be added to the account balance
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
  });
