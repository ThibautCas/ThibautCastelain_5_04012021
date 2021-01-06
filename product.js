//Getting the Id of the product to display
const params = new URLSearchParams(window.location.search);
let productId = params.get("id");

// Request to API 
let url = "http://localhost:3000/api/furniture/" + productId;
getProducts();

// Display the product
async function productDetails() {
    const product = await getProducts();
  
    document.getElementById('product-name').innerHTML = `${product.name}`;
    document.getElementById('product-img').setAttribute("src", `${product.imageUrl}`);
    document.getElementById('product-description').innerHTML = `${product.description}`;
    document.getElementById('product-price').innerHTML = `<strong>Prix : ${(product.price / 100)} €</strong>`;    
};

productDetails();