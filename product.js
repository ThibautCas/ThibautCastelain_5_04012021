//Getting the Id of the product to display
const params = new URLSearchParams(window.location.search);
let productId = params.get("id");

// Request to API 
let url = "http://localhost:3000/api/furniture/" + productId;
getProducts();

// Display the product
async function productDetails() {
    let product = await getProducts();
  
    document.getElementById('product-name').innerHTML = `${product.name}`;
    document.getElementById('product-img').setAttribute("src", `${product.imageUrl}`);
    document.getElementById('product-description').innerHTML = `${product.description}`;
    document.getElementById('product-price').innerHTML = `<strong>Prix : ${(product.price / 100)} €</strong>`;    

    // Display Options
    let productOption = document.getElementById('option');
    product.varnish.forEach(varnish => {
        let option = document.createElement('option');
        productOption.appendChild(option);
        option.innerHTML = varnish;
    });
};
productDetails();

// Add article to basket 
async function addToBasket() {
    let product = await getProducts();
    let basketBtn = document.getElementById("basket-btn");
    basketBtn.addEventListener('click', async function() {
        basket.push(product);
        localStorage.setItem("myBasket", JSON.stringify(basket));
        alert(`L'article a bien été ajouté à votre panier`);
    } )
}
addToBasket();
