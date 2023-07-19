function calcCartPriceAndDelivery() {
  const cartItems = document.querySelectorAll(".cart-item");

  const totalPriceEl = document.querySelector(".total-price");
  const deliveryCost = document.querySelector(".delivery-cost");
  const cartDelivery = document.querySelector("[data-cart-delivery]");

  let totalPrice = 0;
  cartItems.forEach((item) => {
    const amountEl = item.querySelector("[data-counter]").innerText;
    const priceEl = item.querySelector(".price__currency").innerText;

    const currentPrice = parseInt(amountEl) * parseInt(priceEl);

    totalPrice += currentPrice;
  });

  totalPriceEl.innerText = totalPrice;

  if (totalPrice > 0) {
    cartDelivery.classList.remove("none");
  } else {
    cartDelivery.classList.add("none");
  }

  if (totalPrice >= 600) {
    deliveryCost.classList.add("free");
    deliveryCost.innerText = "Бесплатно";
  } else {
    deliveryCost.classList.remove("free");
    deliveryCost.innerText = "100 ₴";
    totalPriceEl.innerText = totalPrice + 100;
  }
}
