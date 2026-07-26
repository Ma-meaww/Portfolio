const track = document.querySelector(".projects-track");
const slides = document.querySelectorAll(".project-slide");
const previousButton = document.querySelector(".previous-button");
const nextButton = document.querySelector(".next-button");
const dots = document.querySelectorAll(".carousel-dot");

let currentProject = 0;

function updateProjectCarousel() {
  track.style.transform = `translateX(-${currentProject * 100}%)`;

  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentProject);
  });
}

nextButton.addEventListener("click", () => {
  currentProject++;

  if (currentProject >= slides.length) {
    currentProject = 0;
  }

  updateProjectCarousel();
});

previousButton.addEventListener("click", () => {
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