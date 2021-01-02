function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var calcIdade = document.getElementById("calcularIdade");

  if (calcIdade.value.length == 0 || calcIdade.value > ano) {
    window.alert("[ERRO!!] Dados inválidos");
  } else {
    var sexo = document.getElementsByName("radsexo");
    var idade = ano - Number(calcIdade.value);
    var gênero = "";
    var imagem = document.querySelector("img.center");
    imagem.setAttribute("alt", "foto da pessoa");
    var res = document.getElementById("resultado");

    if (sexo[0].checked) {
      gênero = "Homem";
      if (idade >= 0 && idade < 3) {
        // Recém Nascido - Masculino
        imagem.setAttribute("src", "/src/images/crianca-masculina.png");
      } else if (idade >= 4 && idade < 8) {
        // Criança - Masculino
      } else if (idade >= 9 && idade < 12) {
        // Criança 2 - Masculino
      } else if (idade >= 13 && idade < 16) {
        // Pré-adolescência - Masculino
      } else if (idade >= 17 && idade < 21) {
        // Adolescente - Masculino
      } else if (idade >= 22 && idade < 35) {
        // Adulto - Masculino
      } else if (idade >= 36 && idade < 50) {
        // Segunda Idade - Masculino
      } else if (idade >= 51 && idade < 80) {
        // Senhor de Idade - Masculino
      } else if (idade >= 81 && idade < 100) {
        // Senhor de Idade - Masculino
      } else {
        // morto
      }
    } else if (sexo[1].checked) {
      gênero = "Feminino";
      if (idade >= 0 && idade < 3) {
        // Recém Nascido - Masculino
        imagem.setAttribute("src", "/src/images/bebe-feminina.jpg");
      } else if (idade >= 4 && idade < 8) {
        // Criança - Masculino
      } else if (idade >= 9 && idade < 12) {
        // Criança 2 - Masculino
      } else if (idade >= 13 && idade < 16) {
        // Pré-adolescência - Masculino
      } else if (idade >= 17 && idade < 21) {
        // Adolescente - Masculino
      } else if (idade >= 22 && idade < 35) {
        // Adulto - Masculino
      } else if (idade >= 36 && idade < 50) {
        // Segunda Idade - Masculino
      } else if (idade >= 51 && idade < 80) {
        // Senhor de Idade - Masculino
      } else if (idade >= 81 && idade < 100) {
        // Senhor de Idade - Masculino
      } else {
        // morto
      }
    }
    res.innerText = `Detectamos ${gênero} com ${idade} anos.`;
  }
}
