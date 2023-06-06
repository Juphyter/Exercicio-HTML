function somarNumeros() {
    var numero1 = prompt("Digite o primeiro número:");
    var numero2 = prompt("Digite o segundo número:");
  
    numero1 = parseFloat(numero1);
    numero2 = parseFloat(numero2);
  
    if (!isNaN(numero1) && !isNaN(numero2)) {
      var soma = numero1 + numero2;
      alert ("A soma dos números é: " + soma);
    } else {
      alert ("Por favor, insira números válidos.");
    }
}
  
somarNumeros();