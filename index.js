// Requete API
const api = "http://localhost:3000/api/furniture";

const getProduct = async function () {
  try {
    let response = await fetch(api);
    if (response.ok) {
      let data = await response.json();
      console.log(data)
    }  
}

    catch (e) { //recupère l'erreur
    console.log(e) //affiche l'erreur

}
}

/*   <div class="container">
        <div class="row mb-4">
          <div class="col">
            <div id="carouselControls" class="carousel slide" data-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="images/carousel/apprenant.jpg" class="d-block w-100" alt="Apprenant">
                </div>
                <div class="carousel-item">
                  <img src="images/carousel/apprenant2.jpg" class="d-block w-100" alt="Apprenante">
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Précédent</span>
              </a>
              <a class="carousel-control-next" href="#carouselControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Suivant</span>
              </a>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-lg-4">
            <div class="card mb-4 mb-lg-0 border-primary shadow">
              <img src="images/home/certificate.png" alt="certificate" class="card-img-top">
              <div class="card-body">
                <h5 class="card-title">Devenez diplômé</h5>
                <p class="card-text">De zéro à héros, obtenez un diplôme en informatique.</p>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-4">
            <div class="card mb-4 mb-lg-0 border-primary shadow">
                <img src="images/home/instruction.png" alt="instructor" class="card-img-top">
                <div class="card-body">
                <h5 class="card-title">Formateurs de qualités</h5>
                <p class="card-text">Tous nos cours sont réalisés par les meilleurs informaticiens.</p>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-4">
            <div class="card mb-4 mb-lg-0 border-primary shadow">
              <img src="images/home/job.png" alt="job search" class="card-img-top">
              <div class="card-body">
                <h5 class="card-title">Un travail graranti</h5>
                <p class="card-text">Nous vous garantissons un emploi à l'issue de votre formation.</p>
              </div>
            </div>
          </div>
        </div>
      </div>      */