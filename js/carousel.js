const slideCarousel = (index, controllers) => {
  const image = document.querySelectorAll('.carousel__image');
  image.forEach((img, i) => {
    i === index
      ? (img.classList.add('carousel__image--active') || toggleActiveController(i, controllers))
      : img.classList.remove('carousel__image--active');
  })
}

const toggleActiveController = (index, controllers) => {
  controllers.forEach((controller, i) => {
    i === index
      ? controller.classList.add('carousel__controller--active')
      : controller.classList.remove('carousel__controller--active');
  })
};

export const start = () => {
  const controllers = document.querySelectorAll('.carousel__controller');
  controllers.forEach((controller, i) => controller.addEventListener('click', () => {
    slideCarousel(i, controllers);
  }))
}
