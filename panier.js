function basketDisplay() {
  // checking if basket is empty
  if (localStorage.getItem("basket") !== null) {
    document.querySelector("h1").remove();
    // display articles in basket
    let tableTop = document.createElement("table");
    tableTop.classList = "table table-bordered text-center m-0";
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

      // Construct card content
      const content = `
    <tbody>
      <tr>
        <td>${product.name}</td>
        <td>${product.price / 100}</td>
        <td>${product.quantity}</td>
        <td>${(product.price / 100) * product.quantity}</td>
      </tr>
    </tbody>
          
    `;
      // Append newyly created card element to the container
      tableTop.innerHTML += content;
    });
    // Displays the price to pay
    function totalPrice() {
      let ttlPrice = 0;
      customerBasket.forEach((product) => {
        ttlPrice += (product.price / 100) * product.quantity;
      });
      let priceTotal = document.createElement("div");
      priceTotal.classList = "row justify-content-center h4 m-5";
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
    customerDetails.innerHTML = `
    <h2 class="text-center m-5">Vos coordonnées</h2>
    <form>
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
  <div class="d-flex justify-content-between m-5">
    <a href="./index.html" class="btn btn-info" role="button">
              Retour à l'Accueil
    </a>
    <button type="submit" class="btn btn-success">Valider la commande</button>
  </div>
  </form>
            `;
    document.getElementById("container").appendChild(customerDetails);
  }
}
basketDisplay();

