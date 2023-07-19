//Прослушка на всем окне

window.addEventListener("click", function (event) {
  let counter;

  if (
    event.target.dataset.action === "plus" ||
    event.target.dataset.action === "minus"
  ) {
    //Search parent wrapper
    const counterWrapper = event.target.closest(".counter-wrapper");

    counter = counterWrapper.querySelector("[data-counter]");
  }
  //Plus
  if (event.target.dataset.action === "plus") {
    counter.innerText = ++counter.innerText;
  }

  //Minus
  if (event.target.dataset.action === "minus") {
    //Условие счетчика больше 1
    if (parseInt(counter.innerText) > 1) {
      counter.innerText = --counter.innerText;
    } else if (
      event.target.closest(".cart-wrapper") &&
      parseInt(counter.innerText) === 1
    ) {
      event.target.closest(".cart-item").remove();

      toggleCartStatus();

      //
      calcCartPriceAndDelivery();
    }
  }

  if (
    event.target.hasAttribute("data-action") &&
    event.target.closest(".cart-wrapper")
  ) {
    calcCartPriceAndDelivery();
  }
});
