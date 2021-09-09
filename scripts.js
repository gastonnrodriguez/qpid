const menuToggle = document.querySelector('.toggle');
const video_background = document.querySelector('.video_background');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  video_background.classList.toggle('active');
})

