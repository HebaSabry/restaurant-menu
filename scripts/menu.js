
let dishes = JSON.parse(localStorage.getItem("dishes")) || [
  {name:"مكرونة اساجتي بصلصة البولونيز", desc:"مكرونة اساجتي مع صلصة لحم غنية.", price:80, img:"images/spageti.jpg", category:"main"},
  {name:"بيتزا مارغريتا", desc:"بيتزا كلاسيكية مع جبن موزاريلا وطماطم طازجة.", price:100, img:"images/pizza.jpg", category:"main"},
  {name:"سلطة سيزر", desc:"خس، دجاج مشوي، خبز محمص، وصلصة سيزر.", price:70, img:"images/salad.jpg", category:"main"},
  {name:"كباب مشوي", desc:"كباب لحم مشوي مع توابل خاصة.", price:120, img:"images/kebab.jpg", category:"main"},
  {name:"كريب شوكولاتة", desc:"كريب رقيق محشو بشوكولاتة وفواكه طازجة.", price:50, img:"images/crep.jpg", category:"dessert"},
  {name:"تشيز كيك", desc:"تشيز كيك كريمي مع قاعدة بسكويت.", price:60, img:"images/cheesecake.jpg", category:"dessert"},
  {name:"عصير برتقال", desc:"عصير طبيعي طازج.", price:30, img:"images/orange.webp", category:"drinks"},
  {name:"عصير ليمون", desc:"عصير ليمون منعش مع نعناع.", price:30, img:"images/mokheto.jpg", category:"drinks"},
  {name:"كابتشينو", desc:"قهوة كريمية مع رغوة الحليب.", price:40, img:"images/coffee.webp", category:"drinks"}
];
const menuDiv = document.getElementById("menu");

function displayDishes(category = "all") {
  const dishes = JSON.parse(localStorage.getItem("dishes")) || [];
  menuDiv.innerHTML ="";
  
  let filteredDishes = dishes;
  if(category !== "all") {
    filteredDishes = dishes.filter(dish => dish.category === category);
  }
  
  filteredDishes.forEach(dish => {
    const div = document.createElement("div");
    div.className = "dish";
    div.innerHTML = `<img src="${dish.img}">
      <div class="dish-content">
        <h3>${dish.name}</h3>
        <p>${dish.desc}</p>
        <p class="price">${dish.price} جنيه</p>
      </div>`;
    menuDiv.appendChild(div);
  });
}

function filterCategory(category) {
  displayDishes(category);
}

// عرض جميع الأطباق عند تحميل الصفحة
displayDishes();