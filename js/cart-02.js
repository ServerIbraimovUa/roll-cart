const cartWrapper = document.querySelector(".cart-wrapper");

//Отслеживаем клик на странице

window.addEventListener("click", (event) => {
  //проверяем был ли совершен клик по кнопке "Добавить в Корзину"

  if (event.target.hasAttribute("data-cart")) {
    //находим карточку с товаром по которой произошол клик
    const card = event.target.closest(".card");

    //Собираем данные карточки и делаем объект информации продукта
    const productInfo = {
      id: card.dataset.id,
      imgSrc: card.querySelector(".product-img").getAttribute("src"),
      title: card.querySelector(".item-title").innerText,
      itemsInBox: card.querySelector("[data-items-in-box]").innerText,
      weight: card.querySelector(".price__weight").innerText,
      price: card.querySelector(".price__currency").innerText,
      counter: card.querySelector("[data-counter]").innerText,
    };

    //проверка наличия товара
    const itemInCart = cartWrapper.querySelector(
      `[data-id="${productInfo.id}"]`
    );
    if (itemInCart) {
      //если товар есть в корзине
      const counterEl = itemInCart.querySelector("[data-counter]");
      counterEl.innerText =
        parseInt(counterEl.innerText) + parseInt(productInfo.counter);
    } else {
      //если товара нет в корзине

      //данные карточки подставляем в шаблон для товара в корзине
      const cartItemHTML = `<div class="cart-item" data-id="${productInfo.id}">
        <div class="cart-item__top">
          <div class="cart-item__img">
            <img src="${productInfo.imgSrc}" alt="${productInfo.title}" />
          </div>
          <div class="cart-item__desc">
            <div class="cart-item__title">${productInfo.title}</div>
            <div class="cart-item__weight">${productInfo.itemsInBox}. / ${productInfo.weight}</div>
    
            <!-- cart-item__details -->
            <div class="cart-item__details">
              <div class="items items--small counter-wrapper">
                <div class="items__control" data-action="minus">
                  -
                </div>
                <div class="items__current" data-counter="">${productInfo.counter}</div>
                <div class="items__control" data-action="plus">+</div>
              </div>
    
              <div class="price">
                <div class="price__currency">${productInfo.price}</div>
              </div>
            </div>
            <!-- // cart-item__details -->
          </div>
        </div>
      </div>`;

      //добовляем в корзину
      cartWrapper.insertAdjacentHTML("beforeend", cartItemHTML);
    }

    //сброс счетчика
    card.querySelector("[data-counter]").innerText = "1";

    toggleCartStatus();

    //
    calcCartPriceAndDelivery();
  }
});
