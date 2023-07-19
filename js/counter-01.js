//Находим элементы

const btnMinus = document.querySelector('[data-action="minus"]');
const btnPlus = document.querySelector('[data-action="plus"]');

const counter = document.querySelector("[data-counter]");

//Отслеживаем btnMinus

btnMinus.addEventListener("click", function () {
  //Условие счетчика больше 1
  if (parseInt(counter.innerText) > 1) {
    counter.innerText = --counter.innerText;
  }
});

//Отслеживаем btnPlus

btnPlus.addEventListener("click", function () {
  counter.innerText = ++counter.innerText;
});
