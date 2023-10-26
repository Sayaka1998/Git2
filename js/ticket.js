function ticketNumber() {
  var mensagem = document.getElementById("randomTicketNumber");
  mensagem.style.display = "block";

  var data = new Date();

  var randomTicketNumber = Math.floor(Math.random() * 10000000) + 1;
  randomTicketNumber =
    randomTicketNumber + data.getDate() + data.getMonth() + data.getFullYear();

  document.getElementById("ticketNumberDisplay").innerHTML = randomTicketNumber;

  setTimeout(function () {
    mensagem.style.display = "none";
  }, 3000); // Exibe a mensagem por 3 segundos
}
