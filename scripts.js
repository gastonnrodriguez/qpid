//Menu

//Javacript for responsive navigation menu
const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navigation.classList.toggle("active");
});

//Navbar cambia con scroll
/*
window.onscroll = function() {scrollFunction()};


function scrollFunction() {
    let navbar = document.getElementById("navbar")
  if(navbar !=null){
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        document.getElementById("navbar").classList.remove('theme');    
        document.getElementById("navbar").classList.add('scrolled');
        document.getElementById("logo").classList.remove('logo');
        document.getElementById("logo").classList.add('logo-scrolled');
        document.querySelector(".selected").classList.add('theme');
        document.querySelector(".selected").classList.add('text-light');
      } else{    
        document.getElementById("navbar").classList.remove('scrolled');
        document.getElementById("navbar").classList.add('theme');
        document.getElementById("logo").classList.add('logo');
        document.getElementById("logo").classList.remove('logo-scrolled'); 
        document.querySelector(".selected").classList.remove('theme', 'text-light');
        document.querySelector(".selected").classList.remove('text-light');
      }
  }
}*/