const elements = {
  body: document.querySelector("body"),
  changeBtn: document.querySelector(".change-color"),
  colorDisplay: document.querySelector(".color"),
  widget: document.querySelector(".widget"),
};

const STYLES = {
  button: {
    borderRadius: "8px",
    padding: "8px 16px",
    width: "128px",
    height: "40px",
    backgroundColor: "#4e75ff",
    border: "none",
    color: "#fff",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  widget: {
    margin: "0 auto",
    width: "169px",
    padding: "20px",
    backgroundColor: "#f5f5f5",
    borderRadius: "10px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  },
};

const getRandomHexColor = () => {
  const color = Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padStart(6, "0");
  return `#${color}`;
};

const applyStyles = (element, styles) => Object.assign(element.style, styles);

const updateColor = () => {
  const newColor = getRandomHexColor();
  elements.body.style.backgroundColor = newColor;
  elements.colorDisplay.textContent = newColor;
};

const initialize = () => {
  applyStyles(elements.changeBtn, STYLES.button);
  applyStyles(elements.widget, STYLES.widget);

  elements.changeBtn.addEventListener("click", updateColor);

  elements.changeBtn.addEventListener("mouseenter", () => {
    elements.changeBtn.style.backgroundColor = "#6c8cff";
  });
  elements.changeBtn.addEventListener("mouseleave", () => {
    elements.changeBtn.style.backgroundColor = STYLES.button.backgroundColor;
  });
};

initialize();

// Завдання 5
/* Task Сonditions
Виконуй це завдання у файлі task-5.js
Напиши скрипт, який змінює колір фону елемента <body> через інлайн-стиль по кліку на button.change-color і задає це значення кольору текстовим вмістом для span.color.

Для генерування випадкового кольору використовуй функцію getRandomHexColor().

Зверни увагу, що функція getRandomHexColor() повертає колір у hex-форматі, в той час як колір фону на <body> буде у форматі rgb. Це нормально й не потребує якихось правок.

На що буде звертати увагу ментор при перевірці:

Фон на <body> задається тільки після кліку на button.change-color
При кожному кліку на елемент button.change-color фон <body> зафарбовується новим рандомним кольором
На <body> і span.color значення одного й того самого кольору
*/
