document
  .getElementById("startBtn")
  .addEventListener("click", startScanner);

let scanner;

function startScanner() {

  scanner =
    new Html5Qrcode("reader");

  scanner.start(
    {
      facingMode: "environment"
    },
    {
      fps: 10,
      qrbox: 250
    },
    onScanSuccess
  );

}

function onScanSuccess(decodedText) {

  document.getElementById(
    "bookingInfo"
  ).innerHTML =
    "<h2>Booking ID</h2><p>" +
    decodedText +
    "</p>";

  scanner.stop();

}