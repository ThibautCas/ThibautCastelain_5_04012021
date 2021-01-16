function basketDisplay() {
  // checking if basket is empty
  if (localStorage.getItem("basket") !== null) {
    document.querySelector("h1").remove();
    // display articles in basket
    let container = document.getElementById("container");
    let tableTop = document.createElement("table");
    tableTop.classList = "table table-bordered text-center";
    tableTop.innerHTML = `<thead>
    <tr>
      <th scope="col">Produit</th>
      <th scope="col">Prix à l'unité</th>
      <th scope="col">Quantité</th>
      <th scope="col">Prix</th>
    </tr>
  </thead>`;
  document.getElementById("container").appendChild(tableTop);
    let customerBasket = JSON.parse(localStorage.getItem("basket"));
    customerBasket.forEach((product) => {
      let card = document.createElement("div");
      card.classList = "row";

      // Construct card content
      const content = `
    <div class="row justify-content-center">
    <table class="table table-bordered text-center">
    <tbody>
      <tr>
        <td>${product.name}</td>
        <td>${product.price / 100}</td>
        <td>${product.quantity}</td>
        <td>${(product.price / 100) * product.quantity}</td>
      </tr>
    </tbody>
  </table>
          
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
      priceTotal.classList = "row justify-content-center h4";
      priceTotal.innerHTML = `<strong>Prix total : ${ttlPrice} €</strong>`;
      document.getElementById("container").appendChild(priceTotal);
    }
    totalPrice();

    // Clear the basket
    let emptyBasket = document.createElement("button");
    emptyBasket.classList = "btn btn-warning justify-content-center m-4";
    emptyBasket.innerHTML = "Vider le panier";
    document.getElementById("container").appendChild(emptyBasket);
    emptyBasket.addEventListener("click", () => {
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
  <button type="submit" class="btn btn-success m-3">Valider la commande</button>
  </form>
  <a href="./index.html" class="btn btn-info m-5" role="button">
              Retour à l'Accueil
            </a>
            `;
    document.getElementById("container").appendChild(customerDetails);
  }
}
basketDisplay();

