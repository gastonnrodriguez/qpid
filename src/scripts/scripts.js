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
  let navbar = document.getElementById("navbarHome");
  if (navbar != null) {
    if (
      document.body.scrollTop > 10 ||
      document.documentElement.scrollTop > 10
    ) {
      navbar.classList.add("pink");
    } else {
      navbar.classList.remove("pink");
    }
  }
};

/*Login y Registro*/

//Modal
// Get the modals
var loginModal = document.getElementById("loginModal");
var registerModal = document.getElementById("registerModal");
// Get the button that opens the modal
var btnLogin = document.getElementById("loginTrigger");
var btnRegister = document.getElementById("registerTrigger");
// Get the <span> element that closes the modal
var spanLogin = document.getElementsByClassName("closeLogin")[0];
var spanRegister = document.getElementsByClassName("closeRegister")[0];
// When the user clicks on the button, open the modal
btnLogin.onclick = function () {
  loginModal.style.display = "block";
};

btnRegister.onclick = function () {
  registerModal.style.display = "block";
};
// When the user clicks on <span> (x), close the modal
spanLogin.onclick = function () {
  loginModal.style.display = "none";
};

spanRegister.onclick = function () {
  registerModal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == loginModal) {
    loginModal.style.display = "none";
  }
};

window.onclick = function (event) {
  if (event.target == registerModal) {
    registerModal.style.display = "none";
  }
};


