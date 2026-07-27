const track = document.querySelector(".projects-track");
const slides = document.querySelectorAll(".project-slide");
const previousButton = document.querySelector(".previous-button");
const nextButton = document.querySelector(".next-button");
const dots = document.querySelectorAll(".carousel-dot");

let currentProject = 0;

function updateProjectCarousel() {
  if (!track) return;

  track.style.transform = `translateX(-${currentProject * 100}%)`;

  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentProject);
  });
}

nextButton?.addEventListener("click", () => {
  currentProject++;

  if (currentProject >= slides.length) {
    currentProject = 0;
  }

  updateProjectCarousel();
});

previousButton?.addEventListener("click", () => {
  currentProject--;

  if (currentProject < 0) {
    currentProject = slides.length - 1;
  }

  updateProjectCarousel();
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentProject = index;
    updateProjectCarousel();
  });
});

updateProjectCarousel();

const projectGalleries = document.querySelectorAll(".project-gallery");

projectGalleries.forEach((gallery) => {
  const galleryTrack = gallery.querySelector(".gallery-track");
  const thumbnails = gallery.querySelectorAll(".gallery-thumbnail");

  let currentImage = 0;

  function updateGallery() {
    if (!galleryTrack) return;

    galleryTrack.style.transform = `translateX(-${currentImage * 100}%)`;

    thumbnails.forEach((thumbnail, index) => {
      thumbnail.classList.toggle("active", index === currentImage);
    });
  }

  thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener("click", () => {
      currentImage = index;
      updateGallery();
    });
  });

  updateGallery();
});

const currentYear = document.querySelector("#current-year");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

const backToTopButton = document.querySelector(".back-to-top");

backToTopButton?.addEventListener("click", (event) => {
  event.preventDefault();

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});