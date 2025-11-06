document.addEventListener("DOMContentLoaded", () => {
  const galleryContainer = document.getElementById("galleryContainer");
  const menuButtons = document.querySelectorAll("#galleryMenu button");

  const galleries = {
    bodas: [
      "img/gallery-1.jpg",
      "img/gallery-2.jpg",
      "img/gallery-3.jpg",
      "img/gallery-4.jpg",
      "img/gallery-5.jpg",
      "img/gallery-6.jpg"
    ],
    cumpleaños: [
      "img/birthday-1.jpg",
      "img/birthday-2.jpg",
      "img/birthday-3.jpg",
      "img/birthday-4.jpg",
      "img/birthday-5.jpg",
      "img/birthday-6.jpg"
    ],
    corporativos: [
      "img/event-1.jpg",
      "img/event-2.jpg",
      "img/event-3.jpg",
      "img/event-4.jpg",
      "img/event-5.jpg",
      "img/event-6.jpg"
    ]
  };

  function renderGallery(category) {
    galleryContainer.innerHTML = "";

    galleries[category].forEach((src, index) => {
      // Las tres últimas fotos tendrán un tamaño más pequeño
      const isSmall = index >= galleries[category].length - 3;

      // Control de columnas
      const colClass = isSmall ? "col-md-2" : (index % 3 === 0 ? "col-md-6" : "col-md-3");

      galleryContainer.innerHTML += `
        <div class="${colClass} mb-0">
          <div class="gallery-item ${isSmall ? 'small-gallery-item' : ''}">
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

  renderGallery("bodas");

  menuButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      menuButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderGallery(btn.dataset.gallery);
    });
  });
});