//Getting the Id of the product to display
const params = new URLSearchParams(window.location.search);
let productId = params.get("id");

// Request to API
const getOneProduct = async function () {
  let url = "http://localhost:3000/api/furniture/" + productId;
  const response = await fetch(url);
  return await response.json();
};
getOneProduct();

// Display the product
async function productDetails() {
  let product = await getOneProduct();

  document.getElementById("product-name").innerHTML = `${product.name}`;
  document
    .getElementById("product-img")
    .setAttribute("src", `${product.imageUrl}`);
  document.getElementById(
    "product-description"
  ).innerHTML = `${product.description}`;
  document.getElementById("product-price").innerHTML = `<strong>Prix : ${
    product.price / 100
  } €</strong>`;

  // Display Options
  let productOption = document.getElementById("option");
  product.varnish.forEach((varnish) => {
    let option = document.createElement("option");
    productOption.appendChild(option);
    option.innerHTML = varnish;
  });
  // Event Listener On button click
  let basketBtn = document.getElementById("basket-btn");
  let quantity = 0;
  basketBtn.addEventListener("click", function () {
    quantity++;
    basketBtn.textContent = `Ajouté! + ${quantity}`;
    addToBasket(product);
  });
  // Add article to basket
  function addToBasket(data) {
    let basket = [];
    let saveProducts = {
      _id: data._id,
      name: data.name,
      price: data.price,
      quantity: 1,
    };
    let productIsNew = true;

    if (localStorage.getItem("basket") === null) {
      basket.push(saveProducts);
      localStorage.setItem("basket", JSON.stringify(basket));
    } else {
      basket = JSON.parse(localStorage.getItem("basket"));
      basket.forEach((product) => {
        if (data._id === product._id) {
          product.quantity++;
          productIsNew = false;
        }
      });
      if (productIsNew) {
        basket.push(saveProducts);
      }
      localStorage.setItem("basket", JSON.stringify(basket));
      numberArticles();
    }
  }
}
productDetails();
