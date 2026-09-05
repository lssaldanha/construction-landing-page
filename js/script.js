const servico = document.getElementById("servico");
const mensagemServico = document.getElementById("mensagem-servico");

const nome = document.getElementById("nome");
const telefone = document.getElementById("telefone");
const email = document.getElementById("email");
const localidade = document.getElementById("localidade");
const descricao = document.getElementById("descricao");

const formulario = document.getElementById("form-orcamento");
const mensagemEnvio = document.getElementById("mensagem-envio");

const numeroWhatsApp = "";

const botaoWhatsApp = document.querySelector(".whatsapp-link");
const secaoOrcamento = document.getElementById("orcamento");

servico.addEventListener("change", function () {
  const valorSelecionado = servico.value;

  switch (valorSelecionado) {
    case "construcao":
      mensagemServico.textContent =
        "Indique na descrição a área aproximada, localização e estado atual do projeto.";
      mensagemServico.hidden = false;
      break;

    case "reparacao":
      mensagemServico.textContent =
        "As avarias normalmente necessitam de avaliação técnica no local antes de ser possível apresentar um orçamento.";
      mensagemServico.hidden = false;
      break;

    case "remodelacao":
      mensagemServico.textContent =
        "Indique quais divisões pretende remodelar e, se possível, as medidas aproximadas.";
      mensagemServico.hidden = false;
      break;

    case "pintura":
      mensagemServico.textContent =
        "Indique as divisões ou áreas a pintar, o estado atual das superfícies e, se possível, as medidas aproximadas.";
      mensagemServico.hidden = false;
      break;

    case "eletricidade":
      mensagemServico.textContent =
        "Descreva a instalação ou alteração pretendida e indique, se possível, a quantidade de pontos, tomadas ou equipamentos envolvidos.";
      mensagemServico.hidden = false;
      break;

    case "canalizacao":
      mensagemServico.textContent =
        "Indique o tipo de instalação ou problema, a divisão afetada e quaisquer sinais visíveis que possam ajudar na avaliação.";
      mensagemServico.hidden = false;
      break;

    case "outro":
      mensagemServico.textContent =
        "Descreva o serviço com o máximo de detalhe possível para facilitar a avaliação.";
      mensagemServico.hidden = false;
      break;

    default:
      mensagemServico.textContent = "";
      mensagemServico.hidden = true;
  }
});

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  const textoServico = servico.options[servico.selectedIndex].text;

  const mensagemWhatsApp = `
Olá, gostaria de pedir um orçamento.

Nome: ${nome.value}
Telefone: ${telefone.value}
Email: ${email.value}
Localidade: ${localidade.value}
Serviço: ${textoServico}
Descrição: ${descricao.value}
`;

  const mensagemCodificada = encodeURIComponent(mensagemWhatsApp);

  const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagemCodificada}`;

  if (numeroWhatsApp) {
    window.open(urlWhatsApp, "_blank");
  } else {
    mensagemEnvio.textContent =
      "Formulário preenchido com sucesso. Este envio é demonstrativo.";

    mensagemEnvio.hidden = false;

    mensagemEnvio.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }

  formulario.reset();

  mensagemServico.textContent = "";
  mensagemServico.hidden = true;
});

formulario.addEventListener("input", function () {
  mensagemEnvio.hidden = true;
});

botaoWhatsApp.addEventListener("click", function (event) {
  event.preventDefault();

  if (numeroWhatsApp) {
    const mensagemInicial =
      "Olá, gostaria de pedir informações sobre um orçamento.";

    const mensagemCodificada = encodeURIComponent(mensagemInicial);

    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensagemCodificada}`;

    window.open(urlWhatsApp, "_blank");
  } else {
    secaoOrcamento.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
});
