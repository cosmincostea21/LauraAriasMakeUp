document.addEventListener("DOMContentLoaded", () => {
  const galleryContainer = document.getElementById("galleryContainer");
  const menuButtons = document.querySelectorAll("#galleryMenu button");

  const galleries = {
    eventos: [
      "img/Eventos/gallery-1.jpg",
      "img/Eventos/gallery-2.jpg",
      "img/Eventos/gallery-3.jpg",
      "img/Eventos/gallery-4.jpg",
      "img/Eventos/gallery-5.jpg",
      "img/Eventos/gallery-6.jpg"
    ],
    efectos: [
      "img/Efectos/efectos-1.jpeg",
      "img/Efectos/efectos-2.jpeg",
      "img/Efectos/efectos-3.jpeg",
      "img/Efectos/efectos-4.jpeg",
      "img/Efectos/efectos-5.jpeg",
      "img/Efectos/efectos-6.jpeg"
    ],
    artistico: [
      "img/Artistico/artistico-1.jpeg",
      "img/Artistico/artistico-2.jpeg",
      "img/Artistico/artistico-3.jpeg",
      "img/Artistico/artistico-4.jpeg",
      "img/Artistico/artistico-5.jpeg",
      "img/Artistico/artistico-6.jpeg"
    ],
    pintacaras: [
      "img/Pintacaras/pintacaras-1.jpeg",
      "img/Pintacaras/pintacaras-2.jpeg",
      "img/Pintacaras/pintacaras-3.jpeg",
    ],

  };

  function renderGallery(category) {
    galleryContainer.innerHTML = "";
    galleries[category].forEach((src) => {
      galleryContainer.innerHTML += `
        <div class="col-md-4 col-sm-6">
          <div class="gallery-item">
            <img src="${src}" class="img-fluid" alt="">
            <div class="gallery-icon">
              <a href="${src}" data-lightbox="${category}" class="btn btn-primary btn-lg-square">
                <i class="fa fa-eye"></i>
              </a>
            </div>
          </div>
        </div>
      `;
    });
  }

  renderGallery("eventos");

  menuButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      menuButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderGallery(btn.dataset.gallery);
    });
  });
});