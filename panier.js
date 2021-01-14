function basketDisplay() {
  // checking if basket is empty
  if (localStorage.getItem("basket") !== null) {
    document.querySelector("h1").remove();
    // display articles in basket
    let container = document.getElementById("container");
    let customerBasket = JSON.parse(localStorage.getItem("basket"));
    customerBasket.forEach((product) => {
      let card = document.createElement("div");
      card.classList = "row";

      // Construct card content
      const content = `
    <div class="row text-center">
          <div class="d-flex ">
            <div class="col-10">
              <div class="d-flex m-3">
                <div class="col-5">${product.name}</div>
                <div class="col-2"></div>
                <div class="col-5">Prix à l'unité : ${
                  product.price / 100
                } €</div>
              </div>
              <div class="d-flex m-3">
                <div class="col-4">Quantité :${product.quantity}</div>
                <div class="col-4"></div>
                <div class="col-4">Prix : ${
                  (product.price / 100) * product.quantity
                }</div>
              </div>
            </div>
            <div>picto poubelle</div>
          </div>
          
        </div>
    `;
      // Append newyly created card element to the container
      container.innerHTML += content;
    });
    // displays the price to pay
    function totalPrice() {
      let ttlPrice = 0;
      customerBasket.forEach((product) => {
        ttlPrice += (product.price / 100) * product.quantity;
      });
      let priceTotal = document.createElement("div");
      priceTotal.classList = "row text-center";
      priceTotal.innerHTML = `Prix total : ${ttlPrice} €`;
      document.getElementById("container").appendChild(priceTotal);
    }
    totalPrice();
  }
  // Displays the input for the customer's details
  let customerDetails = document.createElement("div");
  customerDetails.classList = "text-center ";
  customerDetails.innerHTML = `<div>Coordonnées</div>`;
  document.getElementById("container").appendChild(customerDetails);
}
basketDisplay();
