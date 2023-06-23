const bar = document.querySelector('.nav-toogle');
const links = document.querySelector('.links');



bar.addEventListener('click', function(){
    
   
     links.classList.toggle('show-links');
    
});