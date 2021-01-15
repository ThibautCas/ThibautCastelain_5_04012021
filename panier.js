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
          </div>
          
        </div>
    `;
      // Append newyly created card element to the container
      container.innerHTML += content;
    });
    // Displays the price to pay
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
 
  // Clear the basket
  let emptyBasket = document.createElement("button");
  emptyBasket.classList = "btn btn-warning text-center m-4";
  emptyBasket.innerHTML = 'Vider le panier';
  document.getElementById("container").appendChild(emptyBasket);
  emptyBasket.addEventListener('click', () => {
    localStorage.clear();
    location.reload();
    });

  // Displays the input for the customer's details
  let customerDetails = document.createElement("div");
  customerDetails.innerHTML = `<form>
  <div class="form-group">
    <label for="firstName">Prénom</label>
    <input type="text" class="form-control" id="firstName" placeholder="Jean" required>
  </div>
  <div class="form-group">
    <label for="lastName">Nom</label>
    <input type="text" class="form-control" id="lastName" placeholder="Dupont" required>
  </div>
  <div class="form-group">
    <label for="address">Adresse</label>
    <input type="text" class="form-control" id="address" placeholder="12 rue de la Paix" required>
  </div>
  <div class="form-group">
    <label for="city">Ville</label>
    <input type="text" class="form-control" id="city" placeholder="Paris" required>
  </div>
  <div class="form-group">
    <label for="email">Adresse e-mail</label>
    <input type="email" class="form-control" id="email" placeholder="jeandupont@mail.com" required>
  </div>
  <button type="submit" class="btn btn-success">Valider la commande</button>
</form>`;
  document.getElementById("container").appendChild(customerDetails);
   }
}
basketDisplay();
