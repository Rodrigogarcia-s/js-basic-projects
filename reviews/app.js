const reviews= [{
    id:1,
    name:"Criss Mars",
    job:"web developer",
    img:"https://pointerhh.com/wp-content/uploads/2017/05/PerfilJoacoCircular.png",
    text:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",

},
{
    id:2,
    name: "Bob Jones",
    job:"ux designer",
    img:"https://yang1107.github.io/img/Foto-perfil-redonda-300x300.png",
    text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex consequatur, porro totam quaerat in temporibus rem adipisci architecto quae. Similique.",
},
{
    id:3,
    name: "Susan Smith",
    job:"ux/ui designer",
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRLwzAjdXyEwwYmxhQtATG7TGNW05RC6upyuCgP9gFY29UURFwDU_xX_wEI32WDsQJqVQ&usqp=CAU",
    text:"It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    
}
];

const img = document.getElementById("person-img")
const author = document.getElementById("author")
const job = document.getElementById("job")
const info = document.getElementById("info")

const prevBtn=document.querySelector('.prev-btn')
const nextBtn=document.querySelector('.next-btn')
const rndmBtn=document.querySelector('.rndm-btn')

let currentItem=0;


window.addEventListener('DOMContentLoaded', function(){
    showPerson();
    

});

function showPerson(){
    const item = reviews[currentItem]
    img.src= item.img;
    author.textContent=item.name;
    job.textContent=item.job;
    info.textContent= item.text;
}

nextBtn.addEventListener('click', function(){
    currentItem++;
    if(currentItem > reviews.length -1){
        currentItem=0;
    }
    showPerson(currentItem);

})


prevBtn.addEventListener('click', function(){
    currentItem--;
    if(currentItem < 0){
        currentItem=reviews.length -1;
    }
    showPerson(currentItem);

})
   
    
rndmBtn.addEventListener('click',function(){
    currentItem= Math.floor(Math.random()*reviews.length);
    showPerson();
})
    
