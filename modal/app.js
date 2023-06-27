const btn =document.querySelector(".open");
const overlay =document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close-btn');

btn.addEventListener('click',function(){
     overlay.classList.add('show-overlay');
})
closeBtn.addEventListener('click',function(){
     overlay.classList.remove('show-overlay');
})