// Request to API 
const getProducts = async function () {
    const response = await fetch(url);
    return await response.json();
  }

// Displays products
async function listProducts() {
    const products = await getProducts();
  
    let container = document.getElementById('productContainer');
    
    if(products.length > 1 ){
    products.forEach((result) => {
      // Create card element
      const card = document.createElement('div');
      card.classList = 'row';
    
      // Construct card content
      const content = `
      <div class="col-12 col-lg-4">
        <div class="card mb-4 border-primary shadow">
          <img src="${result.imageUrl}" alt="name" class="card-img-top" />
          <div class="card-body">
            <h5 class="card-title">${result.name}</h5>
            <!--
            <p class="card-text">${result.description}</p>
            -->
            <p><strong>Prix : ${result.price}</strong></p>
            <a href="./product.html?id=${result._id}" class="btn btn-primary">Plus d'informations</a>
          </div>
        </div>
      </div>
    </div>
      `;
    
      // Append newyly created card element to the container
      container.innerHTML += content; 
    });
} else 
console.log(`J'ai qu'un produit, je suis triste`);
  }

