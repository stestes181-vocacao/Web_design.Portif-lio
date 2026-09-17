// ---------- Alternar tema claro/escuro ----------
const btnTema = document.getElementById("btn-tema");

btnTema.addEventListener("click", function () {
  document.body.classList.toggle("escuro");

  if (document.body.classList.contains("escuro")) {
    btnTema.textContent = "☀️ Alternar tema";
  } else {
    btnTema.textContent = "🌙 Alternar tema";
  }
});

// ---------- Curiosidade sobre o vôlei ----------
const curiosidades = [
  "O vôlei foi criado em 1895, nos Estados Unidos, por William G. Morgan.",
  "A quadra de vôlei tem 18 metros de comprimento por 9 metros de largura.",
  "O saque mais rápido do vôlei já registrado ultrapassou 130 km/h.",
  "O Brasil é um dos países com mais títulos olímpicos no vôlei.",
  "Cada equipe tem no máximo 3 toques na bola antes de enviá-la para o outro lado."
];

const btnCuriosidade = document.getElementById("btn-curiosidade");
const textoCuriosidade = document.getElementById("texto-curiosidade");

btnCuriosidade.addEventListener("click", function () {
  const indice = Math.floor(Math.random() * curiosidades.length);
  textoCuriosidade.textContent = curiosidades[indice];
  textoCuriosidade.classList.remove("escondido");
});

// ---------- Placar da partida ----------
let pontosA = 0;
let pontosB = 0;

const elPontosA = document.getElementById("pontos-a");
const elPontosB = document.getElementById("pontos-b");
const mensagemVencedor = document.getElementById("mensagem-vencedor");

function atualizarPlacar() {
  elPontosA.textContent = pontosA;
  elPontosB.textContent = pontosB;

  mensagemVencedor.textContent = "";

  if (pontosA >= 25 && pontosA - pontosB >= 2) {
    mensagemVencedor.textContent = "🏆 Time A venceu o set!";
  } else if (pontosB >= 25 && pontosB - pontosA >= 2) {
    mensagemVencedor.textContent = "🏆 Time B venceu o set!";
  }
}

document.querySelectorAll(".btn-mais").forEach(function (botao) {
  botao.addEventListener("click", function () {
    const time = botao.dataset.time;
    if (time === "a") {
      pontosA++;
    } else {
      pontosB++;
    }
    atualizarPlacar();
  });
});

document.querySelectorAll(".btn-menos").forEach(function (botao) {
  botao.addEventListener("click", function () {
    const time = botao.dataset.time;
    if (time === "a" && pontosA > 0) {
      pontosA--;
    } else if (time === "b" && pontosB > 0) {
      pontosB--;
    }
    atualizarPlacar();
  });
});

document.getElementById("btn-zerar").addEventListener("click", function () {
  pontosA = 0;
  pontosB = 0;
  atualizarPlacar();
});

// ---------- Quiz rápido ----------
const opcoesQuiz = document.querySelectorAll(".opcao");
const resultadoQuiz = document.getElementById("resultado-quiz");

opcoesQuiz.forEach(function (opcao) {
  opcao.addEventListener("click", function () {
    // Reseta as classes de todas as opções
    opcoesQuiz.forEach(function (o) {
      o.classList.remove("correta", "errada");
    });

    const acertou = opcao.dataset.correta === "true";

    if (acertou) {
      opcao.classList.add("correta");
      resultadoQuiz.textContent = "✅ Resposta correta! São 6 jogadores em quadra.";
    } else {
      opcao.classList.add("errada");
      resultadoQuiz.textContent = "❌ Resposta incorreta. Tente novamente!";
    }
  });
});

// ---------- Mostrar time favorito digitado ----------
const btnMostrarTime = document.getElementById("btn-mostrar-time");
const inputTime = document.getElementById("input-time");
const saidaTime = document.getElementById("saida-time");

btnMostrarTime.addEventListener("click", function () {
  const nomeTime = inputTime.value.trim();

  if (nomeTime === "") {
    saidaTime.textContent = "Digite o nome de um time antes de continuar.";
  } else {
    saidaTime.textContent = "🏐 Torcendo pelo " + nomeTime + "!";
  }
});

// Permite confirmar com a tecla Enter no campo de texto
inputTime.addEventListener("keydown", function (evento) {
  if (evento.key === "Enter") {
    btnMostrarTime.click();
  }
});