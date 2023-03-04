function nome() {
  alert("Login ou Senha incorreta");
}

function somar(a, b) {
  var total = a + b;
  alert("Valor da soma: " + total);
}

function desconto(a, b) {
  var totalDesc = a - b;
  return totalDesc;
  //document.write("Valor total com desconto será de: R$" + totalDesc + ",00")
}

var resultTotalDesc = desconto(97, 15);

document.write("Valor total com desconto será de: R$" + resultTotalDesc + ",00");
