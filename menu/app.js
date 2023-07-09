// items
const menu=[
    {
        id:1,
        title:"Brócoli al horno",
        category:"breakfast",
        price:9.99,
        img:"img/imagen(1).jpg",
        desc:"ipsum dolor sit amet consectetur adipisicing elit. Facilis accusamus ipsam dolor, eligendi enim cum.",
    },
    {
        id:2,
        title:"Puré de patatas",
        category:"lunch",
        price:10.80,
        img:"img/imagen(2).jpg",
        desc:"ipsum dolor sit amet consectetur adipisicing elit. Facilis accusamus ipsam dolor, eligendi enim cum.",
    },
    {
        id:3,
        title:"Sopas de ajo",
        category:"breakfast",
        price:11.99,
        img:"img/imagen(3).jpg",
        desc:"ipsum dolor sit amet consectetur adipisicing elit. Facilis accusamus ipsam dolor, eligendi enim cum.",
    },
    {
        id:4,
        title:"Pollo al curry",
        category:"lunch",
        price:9.99,
        img:"img/imagen(4).jpg",
        desc:"ipsum dolor sit amet consectetur adipisicing elit. Facilis accusamus ipsam dolor, eligendi enim cum.",
    },
    {
        id:5,
        title:"Guisantes",
        category:"breakfast",
        price:17.99,
        img:"img/imagen(5).jpg",
        desc:"ipsum dolor sit amet consectetur adipisicing elit. Facilis accusamus ipsam dolor, eligendi enim cum.",
    },
    {
        id:6,
        title:"Verduras asadas",
        category:"lunch",
        price:12.99,
        img:"img/imagen(6).jpg",
        desc:"ipsum dolor sit amet consectetur adipisicing elit. Facilis accusamus ipsam dolor, eligendi enim cum.",
    },
    {
        id:7,
        title:"Lenguado al horno",
        category:"meat",
        price:8.80,
        img:"img/imagen(7).jpg",
        desc:"ipsum dolor sit amet consectetur adipisicing elit. Facilis accusamus ipsam dolor, eligendi enim cum.",
    },
    {
        id:8,
        title:"Atún a la plancha",
        category:"meat",
        price:6.99,
        img:"img/imagen(8).jpg",
        desc:"ipsum dolor sit amet consectetur adipisicing elit. Facilis accusamus ipsam dolor, eligendi enim cum.",
    },
]

const containers = document.querySelector('.containers');
const btnContainer = document.querySelector(".btns");




//load items
window.addEventListener('DOMContentLoaded',function(){
    displayMenuItems(menu);
    displayMenuBtns();   
});




function displayMenuItems(menuItems){
    let displayMenu = menuItems.map(function(item){
        return `<div class="container">
        <img src=${item.img} alt="">
        <div class="info">
          <div class="head">
            <h2>${item.title}</h2>
            <h4 class="price">${item.price}</h4>
          </div>
          <p> ${item.desc}</p>
        </div>
      </div>`
     });
     displayMenu = displayMenu.join("");
     containers.innerHTML = displayMenu

}

function displayMenuBtns(){
    const categories = menu.reduce(function(values, item){
        if(!values.includes(item.category)){
            values.push(item.category);
        }
        return values
        },
        ["all"]
    ); 
    const categoryBtns = categories.map(function(category){
        return`<button class="filter-btn" data-id=${category}>${category}</button>`
    })
    .join("");
    btnContainer.innerHTML = categoryBtns;
    const filterBtns= document.querySelectorAll(".filter-btn");
    //filter items
filterBtns.forEach(function(btn){
    btn.addEventListener('click', function(e){
         const category =e.currentTarget.dataset.id 
         const menuCategory = menu.filter(function(menuItem){
            if (menuItem.category === category){
                return menuItem;
            }
         });
         if(category === 'all'){
            displayMenuItems(menu)
         }
         else{
            displayMenuItems(menuCategory);
         }
    });

});
}
