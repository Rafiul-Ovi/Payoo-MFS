// console.log("Button clicking file added");

document
  .getElementById("login-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const phoneNumber = document.getElementById("phone-number").value;
    console.log(phoneNumber);
  });
