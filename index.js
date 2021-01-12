// Request to API 
const getAllProducts = async function () {
  let url = "http://localhost:3000/api/furniture";
  const response = await fetch(url);
  return await response.json();
}
getAllProducts();

// Display products
async function listProducts() {
  const products = await getAllProducts();

  let container = document.getElementById('productContainer');

  products.forEach((result) => {
    // Create card element
    let card = document.createElement('div');
    card.classList = 'row';
  
    // Construct card content
    const content = `
    <div class="col-12 col-lg-4">
      <div class="card mb-4 border-primary shadow">
        <img src="${result.imageUrl}" alt="Image du produit" class="card-img-top" />
        <div class="card-body">
          <h5 class="card-title">${result.name}</h5>
          <p><strong>Prix : ${(result.price / 100)} €</strong></p>
          <a href="./product.html?id=${result._id}" class="btn btn-primary">Plus d'informations</a>
        </div>
      </div>
    </div>
  </div>
    `;
  
    // Append newyly created card element to the container
    container.innerHTML += content; 
  });
}
listProducts();
