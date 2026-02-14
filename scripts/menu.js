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