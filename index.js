// Requete API //
const url = "http://localhost:3000/api/furniture";

const getProducts = async function () {
  const response = await fetch(url);
  return await response.json();
}
getProducts();

async function listProducts() {
  const products = await getProducts();

  let container = document.getElementById('container');

  products.forEach((result) => {
    // Create card element
    const card = document.createElement('div');
    card.classList = 'row';
  
    // Construct card content
    const content = `
    <div class="row">
    <div class="col-12 col-lg-4">
      <div class="card mb-4 mb-lg-0 border-primary shadow">
        <img src="${result.imageUrl}" alt="name" class="card-img-top" />
        <div class="card-body">
          <h5 class="card-title">${result.name}</h5>
          <p class="card-text">${result.description}</p>
          <p><strong>Prix : ${result.price}</strong></p>
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
