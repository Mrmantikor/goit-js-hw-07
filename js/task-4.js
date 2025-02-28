const formArea = document.querySelector(".login-form");

formArea.addEventListener("submit", (event) => {
  event.preventDefault();
  const trimEmail = event.target.elements.email.value.trim();
  const trimPass = event.target.elements.password.value.trim();
  const testVal = trimEmail !== "" && trimPass !== "";
  const finalObj = {};
  if (testVal) {
    alert("All form fields must be filled in");
  } else {
    for (let element of formArea.elements) {
      if (element.name) {
        finalObj[element.name] = element.value.trim();
      }
    }
    console.log(finalObj);
  }
  formArea.reset();
});

formArea.style.display = "flex";
formArea.style.flexDirection = "column";
formArea.style.width = "408px";
formArea.style.margin = "0 auto";
formArea.style.rowGap = "16px";
formArea.style.padding = "24px";

for (let label of formArea) {
  label.style.display = "flex";
  label.style.flexDirection = "column";
  label.style.width = "360px";
  label.style.margin = "0 auto";
}

const submBut = formArea.querySelector("button");
submBut.style.borderRadius = "8px";
submBut.style.padding = "8px 16px";
submBut.style.alignItems = "center";
submBut.style.justifyContent = "center";
submBut.style.width = "86px";
submBut.style.height = "40px";
submBut.style.backgroundColor = "#4e75ff";
submBut.style.border = "none";
submBut.style.color = "#fff";
submBut.style.margin = "0 auto 0 0";

// Завдання 4
/* Task Сonditions
Виконуй це завдання у файлі task-4.js
відправлення форми form.login-form повинна відбуватися за подією submit.
Під час відправлення форми сторінка не повинна перезавантажуватися.
Якщо при сабміті у формі є незаповнені поля, виводь alert з попередженням про те, що 'All form fields must be filled in'. Не додавай на інпути атрибут required, валідація має відбуватися саме через JS.
Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт з двома властивостями, де ключ — це ім'я інпутів, а значення — відповідні значення цих інпутів, очищені від пробілів по краях. Для доступу до елементів форми використовуй властивість elements.
При сабміті форми виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.


На що буде звертати увагу ментор при перевірці:

Прослуховується подія submit
Під час відправлення форми сторінка не перезавантажується
Якщо при сабміті у формі є незаповнені поля, виводиться alert
При сабміті в консоль виводиться об’єкт з двома властивостями, де ключі — це ім’я інпутів, а значення — відповідні значення цих інпутів, очищені від пробілів по краях
Після сабміту елементи форми очищаються
*/
