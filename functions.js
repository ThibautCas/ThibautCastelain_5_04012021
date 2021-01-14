// Display number of aticles in basket
function numberArticles () {
      let nb = 0;
      if(localStorage.getItem('basket') !== null) {
          let customerBasket = JSON.parse(localStorage.getItem('basket'));
          customerBasket.forEach((product) => {
              nb = nb + product.quantity;
          });
      }
      let numberBtn = document.querySelector('.badge-pill');
      numberBtn.textContent = `${nb}`;
}
numberArticles();
