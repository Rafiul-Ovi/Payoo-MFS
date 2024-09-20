// console.log("Button clicking file added");

document
  .getElementById("login-btn")
  .addEventListener("click", function (event) {
    event.preventDefault(); // to prevent reload

    const phoneNumber = document.getElementById("phone-number").value;
    const pinNumber = document.getElementById("pin-number").value;
    console.log(phoneNumber, pinNumber);

    if (phoneNumber === "01310005567" && pinNumber === "1234") {
      console.log("Logged In");
      window.location.href = "/home.html";
    } else {
      alert("Wrong Input");
    }
  });
