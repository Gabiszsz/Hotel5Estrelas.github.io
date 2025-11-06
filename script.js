function myFunction() {
  var x = document.getElementById("myTopnav");
  
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


function calcular() {
  const nome = document.getElementById("nomeInput").value.trim();
  const diarias = parseInt(document.getElementById("qntDiarias").value);
  const quarto = document.getElementById("tipoQuarto").value;
  const mensagem = document.getElementById("mensagem");

  // Limpa mensagem anterior
  mensagem.className = "";
  mensagem.innerHTML = "";

  // Validação simples
  if (!nome || isNaN(diarias) || diarias <= 0) {
    mensagem.classList.add("erro-msg");
    mensagem.innerHTML = "⚠️ Por favor, preencha o nome e a quantidade de diárias corretamente.";
    return;
  }

  // Definição de valores por tipo de quarto
  let valor = 0;
  switch (quarto) {
    case "suiteS":
      valor = 90;
      break;
    case "suiteD":
      valor = 150;
      break;
    case "suiteM":
      valor = 200;
      break;
  }

  const preco_final = diarias * valor;
  const precoFormatado = preco_final.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  // Monta mensagem de retorno
  mensagem.classList.add("sucesso-msg");
  mensagem.innerHTML = `
    <div class="resultado">
      <h4>Olá, ${nome}!</h4>
      <p>Sua hospedagem em uma <strong>${
        document.querySelector(`#tipoQuarto option[value='${quarto}']`).textContent
      }</strong> por <strong>${diarias}</strong> diária(s) custará:</p>
      <p class="valor-final">${precoFormatado}</p>
      <p>Esperamos te ver em breve no <strong>Hotel 5 Estrelas</strong> 🌴✨</p>
    </div>
  `;
}

