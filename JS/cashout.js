document
  .getElementById("btn-cash-out")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const cashOut = document.getElementById("input-cash-out").value;
    const pinNumber = document.getElementById(
      "input-cash-out-pin-number"
    ).value;
    if (pinNumber === "1234") {
      const currentBalance =
        document.getElementById("account-balance").innerText;
      const newBalance = parseFloat(currentBalance) - parseFloat(cashOut);
      document.getElementById("account-balance").innerText = newBalance;
    } else {
      alert("You can't cash out your money !");
    }
  });
