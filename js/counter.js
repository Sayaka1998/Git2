function updateCounter() {
  var counterElement = document.getElementById("counter");
  var counterCurrent = parseInt(counterElement.textContent);
  counterElement.textContent = counterCurrent + 1;
  localStorage.setItem("counter", counterCurrent + 1);
}

var addProductButton = document.getElementById("addProductButton");
addProductButton.addEventListener("click", function () {
  updateCounter();
});

function removeCounter() {
  var counterElement = document.getElementById("counter");
  counterElement.textContent = 0;
  localStorage.setItem("counter", 0);

  // Limpar o localStorage
  localStorage.clear();
}

var removeProductButton = document.getElementById("clear-cart");
removeProductButton.addEventListener("click", function () {
  removeCounter();
});

// Evento para inicializar o contador na carga da página
window.addEventListener("DOMContentLoaded", function () {
  var counter = localStorage.getItem("counter");
  if (counter) {
    document.getElementById("counter").textContent = counter;
  }
});




