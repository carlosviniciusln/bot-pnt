const msgerForm = get(".msger-inputarea");
const msgerInput = get(".msger-input");
const msgerChat = get(".msger-chat");

var texto1 = "Claro, vou criar um treino de 15 minutos para você. Este treino será uma rápida sessão de exercícios...";
var texto2 = "Certifique-se de aquecer antes de começar e de se hidratar adequadamente. Vamos lá...";
var texto3 = "Este treino de 15 minutos é uma ótima maneira de elevar a frequência cardíaca, fortalecer os músculos e queimar calorias...";
var texto4 = "É ótimo que você esteja pensando em começar a se exercitar, mesmo que esteja sedentário. Começar de forma gradual e segura é fund...";
var texto5 = "Consulte um profissional de saúde: Antes de iniciar qualquer programa de exercícios, é importante consultar um médico ou fisioterapeuta..."
var texto6 = "Estabeleça metas claras e alcançáveis para o seu nível atual de condicionamento físico..."
var texto7 = "Inicie com exercícios de baixa intensidade e duração curta. Por exemplo, comece com caminhadas curtas ou alongamentos simples..."
var texto8 = "À medida que se sentir mais confortável e confiante, aumente gradualmente a intensidade e a duração dos exercícios..."
var texto9 = "A consistência é fundamental para o sucesso a longo prazo. Tente se exercitar regularmente, mesmo que seja apenas por alguns minutos todos os dias..."
var texto10 = "Misture diferentes tipos de atividades, como caminhada, natação, ciclismo, ioga, alongamento e exercícios de resistência..."
var texto11 = "Preste atenção aos sinais do seu corpo. Se sentir dor excessiva, desconforto ou fadiga extrema, pare imediatamente e descanse..."
var texto12 = "Beba água suficiente antes, durante e após o exercício. Mantenha uma dieta equilibrada para fornecer energia e nutrientes ao seu corpo..."
var texto13 = "Se possível, consulte um personal trainer ou fisioterapeuta para obter orientações específicas e um plano de treinamento personalizado..."
var texto14 = "Mantenha um diário de exercícios para acompanhar seu progresso e se manter motivado..."
var texto15 = "Ter um amigo ou parceiro de treinamento pode tornar o exercício mais divertido e motivador..."
var texto16 = "Lembre-se de que o progresso será gradual, e é normal encontrar obstáculos pelo caminho. O importante é não desistir e continuar se esforçando..."
var texto17 = "Pule corda (ou simule o movimento) por 2 minutos para elevar a frequência cardíaca...."
var texto18 = "Realize cada exercício por 45 segundos com um descanso de 15 segundos entre eles. Repita o circuito duas vezes..."
var texto19 = "Fique de pé, com os pés na largura dos quadris, e agache lentamente, mantendo as costas retas. Levante-se para a posição inicial..."
var texto20 = "Deite-se de bruços, apoie os cotovelos e os antebraços no chão, e mantenha o corpo reto, apoiando-se nos dedos dos pés ou nos joelhos..."

const BOT_MSGS = [
    texto1, 
    texto2, 
    texto3, 
    texto4, 
    texto5,
    texto6,
    texto7,
    texto8,
    texto9,
    texto10,
    texto11,
    texto12,
    texto13,
    texto14,
    texto15,
    texto16,
    texto17,
    texto18,
    texto19,
    texto20,
];


const BOT_IMG = "../../assets/images/icons/pro1.png";
const PERSON_IMG = "../../assets/images/icons/profile.png";
const BOT_NAME = "BOT";
const PERSON_NAME = "Kristin Williams";

msgerForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const msgText = msgerInput.value;
    if (!msgText) return;

    appendMessage(PERSON_NAME, PERSON_IMG, "right", msgText);
    msgerInput.value = "";

    botResponse();

    const nochat = document.querySelector(".no-chat");
    nochat.classList.add("d-none");
});

function appendMessage(name, img, side, text) {
    //   Simple solution for small apps
    const msgHTML = `
    <div class="msg ${side}-msg">
      <div class="msg-bubble">
            <div class="msg-text">${text}</div>
      </div>
    </div>
  `;

    msgerChat.insertAdjacentHTML("beforeend", msgHTML);
    msgerChat.scrollTop += 500;
}

function botResponse() {
    const r = random(0, BOT_MSGS.length - 1);
    const msgText = BOT_MSGS[r];
    const delay = msgText.split(" ").length * 100;

    setTimeout(() => {
        appendMessage(BOT_NAME, BOT_IMG, "left", msgText);
    }, delay);
}

// Utils
function get(selector, root = document) {
    return root.querySelector(selector);
}

function formatDate(date) {
    const h = "0" + date.getHours();
    const m = "0" + date.getMinutes();

    return `${h.slice(-2)}:${m.slice(-2)}`;
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
