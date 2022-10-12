const body = document.querySelector('body'),
sidebar = body.querySelector('nav'),
toggle = body.querySelector(".toggle");


toggle.addEventListener("click" , () =>{
sidebar.classList.toggle("close");
});

window.addEventListener('click', function(event){
var box = document.getElementById('box1');
if (event.target != box && event.target.parentNode != box){
  box.style.display = none;
}
});
