const form = document.getElementById("form");

  form.addEventListener("submit", function(event) {
    const campoA = document.getElementById("CA");
    const campoB = document.getElementById("CB");

    if (campoB.value <= campoA.value) {
      alert("O número do campo B deve ser maior que o número do campo A.");
      event.preventDefault();
    } else {
      alert("Formulário válido!");
    }
  });
  