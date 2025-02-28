const elements = {
  boxesDiv: document.querySelector("#boxes"),
  controlsDiv: document.querySelector("#controls"),
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
  inputAmount: document.querySelector("#controls input"),
};

const STYLES = {
  button: {
    padding: "8px 16px",
    borderRadius: "8px",
    width: "120px",
    height: "40px",
    border: "none",
    color: "#fff",
  },
  createBtn: {
    defaultBg: "#4e75ff",
    hoverBg: "#6c8cff",
    marginRight: "16px",
  },
  destroyBtn: {
    defaultBg: "#ff4e4e",
    hoverBg: "#ff7070",
  },
  input: {
    border: "1px solid #808080",
    borderRadius: "8px",
    padding: "8px 50px",
    width: "150px",
    height: "40px",
    marginRight: "16px",
  },
  container: {
    borderRadius: "8px",
    padding: "20px",
    width: "486px",
    backgroundColor: "#f6f6fe",
    margin: "0 auto",
  },
  boxes: {
    padding: "32px",
    display: "flex",
    flexDirection: "row",
    columnGap: "40px",
    rowGap: "10px",
    flexWrap: "wrap",
  },
};

const applyStyles = (element, styles) => {
  Object.assign(element.style, styles);
};

const getRandomHexColor = () =>
  `#${Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padStart(6, "0")}`;

const createBoxes = (amount) => {
  const fragment = document.createDocumentFragment();
  const initialSize = 30;

  for (let i = 0; i < amount; i++) {
    const size = initialSize + i * 10;
    const box = document.createElement("div");
    applyStyles(box, {
      width: `${size}px`,
      height: `${size}px`,
      backgroundColor: getRandomHexColor(),
    });
    fragment.append(box);
  }

  elements.boxesDiv.append(fragment);
};

const destroyBoxes = () => {
  elements.boxesDiv.innerHTML = "";
};

const validateInput = (value) => {
  const num = parseInt(value, 10);
  return !isNaN(num) && num >= 1 && num <= 100;
};

const handleCreate = () => {
  const amount = elements.inputAmount.value.trim();

  if (validateInput(amount)) {
    destroyBoxes();
    createBoxes(parseInt(amount, 10));
    elements.inputAmount.value = "";
  } else {
    alert("Please enter a valid number between 1 and 100.");
  }
};

const handleHover = (element, hoverColor, defaultColor) => {
  element.addEventListener("mouseenter", () => {
    element.style.backgroundColor = hoverColor;
  });
  element.addEventListener("mouseleave", () => {
    element.style.backgroundColor = defaultColor;
  });
};

const initializeStyles = () => {
  applyStyles(elements.createBtn, {
    ...STYLES.button,
    backgroundColor: STYLES.createBtn.defaultBg,
    marginRight: STYLES.createBtn.marginRight,
  });

  applyStyles(elements.destroyBtn, {
    ...STYLES.button,
    backgroundColor: STYLES.destroyBtn.defaultBg,
  });

  // Стили контейнеров и ввода
  applyStyles(elements.controlsDiv, STYLES.container);
  applyStyles(elements.inputAmount, STYLES.input);
  applyStyles(elements.boxesDiv, {
    ...STYLES.container,
    ...STYLES.boxes,
    height: "auto",
  });

  handleHover(
    elements.createBtn,
    STYLES.createBtn.hoverBg,
    STYLES.createBtn.defaultBg
  );
  handleHover(
    elements.destroyBtn,
    STYLES.destroyBtn.hoverBg,
    STYLES.destroyBtn.defaultBg
  );
};

const initializeEvents = () => {
  elements.createBtn.addEventListener("click", handleCreate);
  elements.destroyBtn.addEventListener("click", destroyBoxes);
};

const init = () => {
  initializeStyles();
  initializeEvents();
};

init();

// Завдання 6
/* Task Сonditions
Виконуй це завдання у файлі task-6.js
Напиши скрипт створення й очищення колекції елементів з наступним функціоналом.

Є input, у який користувач вводить бажану кількість елементів. Після натискання на кнопку Create має рендеритися (додаватися в DOM) колекція з відповідною кількістю елементів і очищатися значення в інпуті. При повторному натисканні на кнопку Create поверх старої колекції має рендеритись нова. Після натискання на кнопку Destroy колекція елементів має очищатися.

Після натискання користувачем на кнопку Create треба провалідувати значення в input, воно має бути в межах від 1 до 100 включно. Тільки якщо воно задоволяє умову, мають додаватися нові <div> елементи в DOM.

Для рендеру елементів на сторінці створи функцію createBoxes(amount), яка приймає один параметр — число, що зберігає кількість елементів для рендеру.

Функція має створювати стільки <div> елементів, скільки вказано в параметрі amount. Усі ці <div> мають додаватися за одну операцію у DOM дочірніми елементами для div#boxes.

Розміри першого <div> елемента мають бути 30px на 30px.
Кожен наступний елемент повинен бути ширшим і вищим від попереднього на 10px.
Усі елементи повинні мати випадковий колір фону. Використовуй готову функцію getRandomHexColor() для отримання випадкового кольору.
Для очищення колекції після натискання на кнопку Destroy створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

На що буде звертати увагу ментор при перевірці:

Після кліку на кнопку Create, якщо в input значення поза межами діапазону 1-100, нічого не відбувається
Після кліку на кнопку Create в div#boxes за одну операцію додається така кількість різнокольорових квадратів, яка вказана в input. Значення input очищається
Після повторного кліку на кнопку Create попередні квадрати повністю прибираються і замість них додаються нові у кількості, що вказана в input. Значення input очищається
Усі квадрати в div#boxes різнокольорові і мають фон випадкового кольору
Перший квадрат у div#boxes має розміри 30px на 30px, а кожен наступний на 10px вищий і ширший від попереднього
Після натискання на кнопку Destroy усі квадрати з div#boxes мають видалятися
*/
