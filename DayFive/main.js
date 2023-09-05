let imgBox = document.querySelector(`#imgBox`);
let qrImage = document.querySelector(`#qrImage`);
const btn = document.querySelector(`#generateQr`);
let userinput = document.querySelector(`#userInput`);

function generateQR() {
  if (userinput.value.length > 0) {
    qrImage.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      userinput.value;
    imgBox.classList.add("show-img");
  }
}

btn.addEventListener("click", generateQR);
