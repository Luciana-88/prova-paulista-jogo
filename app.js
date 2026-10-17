const questions = [
  {
    id: "1",
    type: "single",
    typeLabel: "RESPOSTA ÚNICA",
    title: "Qual etapa do processo de contratação está diretamente relacionada ao problema apresentado?",
    text: `
      <p>Empresas estão revisando seus processos seletivos porque formulários extensos, excesso de etapas e demora nas respostas têm levado candidatos a desistirem antes da conclusão da seleção. As organizações passaram a analisar e aperfeiçoar a jornada de candidatura para aumentar o interesse e a permanência dos profissionais.</p>
      <div class="source">Situação baseada na reportagem do Valor Econômico apresentada na Prova Paulista.</div>
    `,
    options: [
      ["A", "Recrutamento: etapa voltada à aproximação entre oportunidades de trabalho e potenciais candidatos."],
      ["B", "Seleção: etapa voltada à comparação de informações obtidas dos candidatos para decisão de contratação."],
      ["C", "Avaliação de perfil cultural: verificação da compatibilidade comportamental entre candidato e organização."],
      ["D", "Avaliação de aptidões e características individuais: análise das competências para determinada função."],
      ["E", "Verificação de referências profissionais: confirmação de informações sobre experiências e desempenho anteriores."]
    ],
    answer: "A",
    explanation: "<strong>Alternativa A.</strong> A situação descreve ações voltadas à melhoria da experiência dos candidatos antes da escolha do profissional. Isso está diretamente relacionado ao <strong>recrutamento</strong>, etapa responsável por aproximar oportunidades de trabalho e potenciais candidatos. A seleção ocorre depois da atração dos candidatos."
  },
  {
    id: "2",
    type: "single",
    typeLabel: "RESPOSTA ÚNICA",
    title: "Competência técnica + competência socioemocional",
    text: `
      <p>Uma empresa do setor administrativo está estruturando o perfil de uma vaga para assistente administrativo. A equipe de RH decidiu incluir uma competência técnica necessária para executar as atividades do cargo e uma competência socioemocional importante para o trabalho em equipe e a adaptação ao ambiente organizacional.</p>
    `,
    options: [
      ["A", "Utilizar softwares específicos da área administrativa para organizar e processar dados e colaborar com colegas para alcançar os objetivos da equipe."],
      ["B", "Elaborar relatórios utilizando ferramentas digitais e adaptar-se rapidamente às mudanças do ambiente de trabalho."],
      ["C", "Trabalhar em equipe para atingir metas organizacionais e comunicar informações de forma clara aos diferentes setores."],
      ["D", "Aplicar conhecimentos técnicos da função e desenvolver relacionamentos interpessoais produtivos no ambiente de trabalho."],
      ["E", "Demonstrar capacidade de aprendizagem contínua e utilizar estratégias de comunicação para solucionar conflitos."]
    ],
    answer: "A",
    explanation: "<strong>Alternativa A.</strong> Ela combina uma <strong>competência técnica</strong> — utilizar softwares específicos da área administrativa para organizar e processar dados — com uma <strong>competência socioemocional</strong> — colaborar com colegas para alcançar objetivos da equipe. As demais alternativas apresentam combinações que não atendem corretamente ao que foi solicitado."
  },
  {
    id: "3",
    type: "single",
    typeLabel: "RESPOSTA ÚNICA",
    title: "Qual modalidade de treinamento atende melhor às necessidades da organização?",
    text: `
      <p>Uma organização precisa capacitar colaboradores de diferentes unidades, atualizar rapidamente conhecimentos e reduzir custos operacionais. O texto da prova destaca que treinamentos online alcançam profissionais de diferentes localidades, oferecem flexibilidade e reduzem custos de deslocamento e infraestrutura.</p>
    `,
    options: [
      ["A", "Adotar treinamento online para capacitar colaboradores de diferentes unidades, garantir atualização rápida dos conteúdos e reduzir custos com deslocamentos."],
      ["B", "Adotar treinamento presencial para capacitar colaboradores de diferentes unidades, compensando os custos de deslocamento."],
      ["C", "Adotar treinamento presencial para reunir todos em um único local, priorizando dinâmicas em grupo."],
      ["D", "Adotar treinamento presencial para promover integração e fortalecer relações interpessoais entre unidades."],
      ["E", "Adotar treinamento presencial mantendo flexibilidade de acesso e reduzindo custos logísticos."]
    ],
    answer: "A",
    explanation: "<strong>Alternativa A.</strong> O treinamento online atende simultaneamente às três necessidades: alcança colaboradores distribuídos em diferentes unidades, permite atualização rápida dos conhecimentos e reduz custos operacionais relacionados a deslocamentos e infraestrutura."
  },
  {
    id: "4A",
    type: "tf",
    typeLabel: "CERTO OU ERRADO",
    title: "Avaliação de treinamento — afirmação 1 de 5",
    text: `
      <p>Uma empresa investiu R$ 250 mil em um programa de treinamento. A satisfação foi de 94%, a média de acertos passou de 61% para 87%, as técnicas ensinadas passaram a ser mais utilizadas e as reclamações dos clientes caíram de 18% para 17%. Ainda não houve estudo comparando benefícios e recursos investidos.</p>
      <div class="source">Afirmação A: Os indicadores apresentados sugerem que o treinamento contribuiu para o desenvolvimento dos participantes, mas não comprovam sua efetividade global.</div>
    `,
    tfAnswer: "Certo",
    explanation: "<strong>Certo.</strong> Os indicadores mostram evolução na satisfação e no desempenho dos participantes, evidenciando desenvolvimento. Porém, esses dados não são suficientes para comprovar a efetividade global da capacitação na organização."
  },
  {
    id: "4B",
    type: "tf",
    typeLabel: "CERTO OU ERRADO",
    title: "Avaliação de treinamento — afirmação 2 de 5",
    text: `
      <p><strong>Afirmação B:</strong> Os indicadores apresentados sugerem que parte das técnicas ensinadas no treinamento passou a ser utilizada com maior frequência nas atividades profissionais dos colaboradores.</p>
    `,
    tfAnswer: "Certo",
    explanation: "<strong>Certo.</strong> A situação informa diretamente que, três meses depois, os gestores observaram que os colaboradores estavam utilizando com maior frequência as técnicas ensinadas durante a capacitação. Isso evidencia a transferência do aprendizado para a prática profissional."
  },
  {
    id: "4C",
    type: "tf",
    typeLabel: "CERTO OU ERRADO",
    title: "Avaliação de treinamento — afirmação 3 de 5",
    text: `
      <p><strong>Afirmação C:</strong> Os indicadores apresentados permitem concluir que o treinamento atingiu plenamente os resultados pretendidos pela organização.</p>
    `,
    tfAnswer: "Errado",
    explanation: "<strong>Errado.</strong> A redução das reclamações foi pequena, de 18% para 17%, e os dados disponíveis não permitem concluir que o treinamento atingiu plenamente os resultados pretendidos."
  },
  {
    id: "4D",
    type: "tf",
    typeLabel: "CERTO OU ERRADO",
    title: "Avaliação de treinamento — afirmação 4 de 5",
    text: `
      <p><strong>Afirmação D:</strong> Os indicadores apresentados permitem concluir que os ganhos obtidos compensaram o investimento realizado no treinamento.</p>
    `,
    tfAnswer: "Errado",
    explanation: "<strong>Errado.</strong> A organização ainda não realizou estudos para comparar os benefícios gerados pelo treinamento com os recursos investidos. Portanto, não é possível concluir que houve retorno financeiro positivo."
  },
  {
    id: "4E",
    type: "tf",
    typeLabel: "CERTO OU ERRADO",
    title: "Avaliação de treinamento — afirmação 5 de 5",
    text: `
      <p><strong>Afirmação E:</strong> Os indicadores apresentados permitem analisar diferentes níveis de avaliação, mas não o custo-benefício do treinamento.</p>
    `,
    tfAnswer: "Certo",
    explanation: "<strong>Certo.</strong> O caso apresenta evidências relacionadas à reação, aprendizagem, comportamento e resultados, mas não fornece informações suficientes para avaliar o custo-benefício do treinamento."
  }
];

const state = {
  index: 0,
  score: 0,
  coins: 0,
  selected: null,
  tfSelected: null,
  answered: false,
  startTime: null,
  timerId: null
};

const $ = (id) => document.getElementById(id);
const startScreen = $("startScreen");
const gameScreen = $("gameScreen");
const feedbackScreen = $("feedbackScreen");
const endScreen = $("endScreen");

const audioCorrect = new Audio("assets/acerto.mp3");
const audioWrong = new Audio("assets/erro.mp3");
audioCorrect.preload = "auto";
audioWrong.preload = "auto";

function formatTime(totalSeconds) {
  const min = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
  const sec = String(totalSeconds % 60).padStart(2, "0");
  return `${min}:${sec}`;
}

function startTimer() {
  state.startTime = Date.now();
  state.timerId = setInterval(() => {
    const elapsed = Math.floor((Date.now() - state.startTime) / 1000);
    $("timer").textContent = formatTime(elapsed);
  }, 250);
}

function stopTimer() {
  clearInterval(state.timerId);
}

function renderQuestion() {
  const q = questions[state.index];
  state.selected = null;
  state.tfSelected = null;
  state.answered = false;

  $("progress").textContent = `${state.index + 1}/${questions.length}`;
  $("questionNumber").textContent = `DESAFIO ${state.index + 1}`;
  $("qType").textContent = q.typeLabel;
  $("questionTitle").textContent = q.title;
  $("questionText").innerHTML = q.text;
  const options = $("options");
  options.innerHTML = "";
  $("submitBtn").classList.add("hidden");

  if (q.type === "single") {
    q.options.forEach(([letter, text]) => {
      const button = document.createElement("button");
      button.className = "option";
      button.type = "button";
      button.innerHTML = `<span class="option-letter">${letter}</span><span>${text}</span>`;
      button.addEventListener("click", () => {
        document.querySelectorAll(".option").forEach(el => el.classList.remove("selected"));
        button.classList.add("selected");
        state.selected = letter;
        $("submitBtn").classList.remove("hidden");
      });
      options.appendChild(button);
    });
  } else {
    const grid = document.createElement("div");
    grid.className = "tf-grid";
    const actions = document.createElement("div");
    actions.className = "tf-actions";
    ["Certo", "Errado"].forEach(value => {
      const btn = document.createElement("button");
      btn.className = "tf-btn";
      btn.type = "button";
      btn.textContent = value;
      btn.addEventListener("click", () => {
        document.querySelectorAll(".tf-btn").forEach(el => el.classList.remove("selected"));
        btn.classList.add("selected");
        state.tfSelected = value;
        $("submitBtn").classList.remove("hidden");
      });
      actions.appendChild(btn);
    });
    grid.appendChild(actions);
    options.appendChild(grid);
  }

  $("questionText").scrollIntoView({behavior:"smooth", block:"nearest"});
}

function showFeedback(correct, q) {
  gameScreen.classList.add("hidden");
  feedbackScreen.classList.remove("hidden");
  const card = document.querySelector(".feedback-card");
  card.classList.toggle("wrong", !correct);

  $("feedbackIcon").textContent = correct ? "✓" : "✕";
  $("feedbackTitle").textContent = correct ? "PARABÉNS! VOCÊ ACERTOU!" : "QUE PENA! VOCÊ ERROU.";
  $("feedbackMessage").textContent = correct
    ? "Você conquistou uma moeda! Agora leia o gabarito explicativo para entender o raciocínio."
    : "Não tem problema! O erro faz parte da aprendizagem. Leia o gabarito explicativo e avance para o próximo desafio.";
  $("explanation").innerHTML = q.explanation;

  if (correct) {
    state.score += 1;
    state.coins += 1;
    $("score").textContent = state.score;
    $("coins").textContent = state.coins;
    playSound(audioCorrect);
    createCoinRain();
  } else {
    playSound(audioWrong);
    document.body.classList.remove("shake");
    void document.body.offsetWidth;
    document.body.classList.add("shake");
  }
}

function playSound(audio) {
  try {
    audio.currentTime = 0;
    audio.play().catch(() => {});
  } catch {}
}

function createCoinRain() {
  const rain = $("coinRain");
  rain.innerHTML = "";
  const count = 16;
  for (let i = 0; i < count; i++) {
    const img = document.createElement("img");
    img.src = "assets/moeda-limpa.png";
    img.className = "falling-coin";
    img.style.left = `${Math.random() * 96}%`;
    img.style.animationDelay = `${Math.random() * .7}s`;
    img.style.animationDuration = `${1.6 + Math.random() * 1.8}s`;
    img.style.transform = `scale(${.55 + Math.random() * .65})`;
    rain.appendChild(img);
  }
}

function submitAnswer() {
  if (state.answered) return;
  const q = questions[state.index];
  let correct = false;
  if (q.type === "single") {
    if (!state.selected) return showToast("Escolha uma alternativa antes de confirmar.");
    correct = state.selected === q.answer;
  } else {
    if (!state.tfSelected) return showToast("Escolha Certo ou Errado antes de confirmar.");
    correct = state.tfSelected === q.tfAnswer;
  }
  state.answered = true;
  showFeedback(correct, q);
}

function nextQuestion() {
  if (state.index < questions.length - 1) {
    state.index++;
    feedbackScreen.classList.add("hidden");
    gameScreen.classList.remove("hidden");
    renderQuestion();
  } else {
    finishGame();
  }
}

function finishGame() {
  stopTimer();
  const elapsed = Math.floor((Date.now() - state.startTime) / 1000);
  $("finalScore").textContent = `${state.score}/${questions.length}`;
  $("finalCoins").textContent = state.coins;
  $("finalTime").textContent = formatTime(elapsed);
  const pct = state.score / questions.length;
  $("finalMessage").textContent =
    pct === 1 ? "🏆 Perfeito! Você dominou a seção!" :
    pct >= .75 ? "⭐ Muito bem! Você teve um ótimo desempenho." :
    pct >= .5 ? "👍 Bom trabalho! Revise os gabaritos e tente novamente." :
    "💪 Continue estudando! Use os gabaritos explicativos para reforçar o conteúdo.";
  feedbackScreen.classList.add("hidden");
  gameScreen.classList.add("hidden");
  endScreen.classList.remove("hidden");
}

function startGame() {
  state.index = 0;
  state.score = 0;
  state.coins = 0;
  $("score").textContent = "0";
  $("coins").textContent = "0";
  $("timer").textContent = "00:00";
  startScreen.classList.add("hidden");
  endScreen.classList.add("hidden");
  feedbackScreen.classList.add("hidden");
  gameScreen.classList.remove("hidden");
  startTimer();
  renderQuestion();
}

function showToast(msg) {
  const t = $("toast");
  t.textContent = msg;
  t.classList.remove("hidden");
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => t.classList.add("hidden"), 1800);
}

$("startBtn").addEventListener("click", startGame);
$("submitBtn").addEventListener("click", submitAnswer);
$("nextBtn").addEventListener("click", nextQuestion);
$("restartBtn").addEventListener("click", startGame);
