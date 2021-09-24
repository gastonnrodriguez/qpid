//Video random on load

window.onload = randomVideo = () => {
  const video = document.getElementById("background");
  video.setAttribute(
    "src",
    `./assets/video/video${Math.floor(Math.random() * (3 - 1) + 1)}.mp4`
  );
};

//Menu

//Javacript para menu responsive
const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navigation.classList.toggle("active");
});

//Navbar cambia con scroll

window.onscroll = () => {
  scrollFunction();
};

scrollFunction = () => {
  let navbar = document.getElementById("navbar");
  if (navbar != null) {
    if (
      document.body.scrollTop > 10 ||
      document.documentElement.scrollTop > 10
    ) {
      document.getElementById("navbar").classList.add("pink");
    } else {
      document.getElementById("navbar").classList.remove("pink");
    }
  }
};
