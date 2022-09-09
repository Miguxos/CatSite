const btnMobile = document.getElementById("menuToggle");

function active(){
const nav = document.getElementById('nav-menu');
nav.classList.toggle('active');
}

btnMobile.addEventListener('click',active)