//Getting the Id of the product to display
const params = new URLSearchParams(window.location.search);
let productId = params.get("id");

// Request to API 
let url = "http://localhost:3000/api/furniture/"+productId;


getProducts();
listProducts();

