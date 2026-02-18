
const correctPassword = "ah146";


let nameInput, descInput, priceInput, imgInput, categorySelect, menuDiv;

// تحميل العناصر عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
  nameInput = document.getElementById("name");
  descInput = document.getElementById("desc");
  priceInput = document.getElementById("price");
  imgInput = document.getElementById("img");
  categorySelect = document.getElementById("category");
  menuDiv = document.getElementById("menuDiv");
  displayMenu();
});

function checkPassword() {
  const pass = document.getElementById("adminPass").value;
  if(pass === correctPassword){
    document.getElementById("loginDiv").style.display = "none";
    document.getElementById("dashboard").style.display = "block";
  } else {
    alert("كلمة السر خاطئة");
  }
}

function save() {
  localStorage.setItem("dishes", JSON.stringify(dishes));
}

function addDish() {
  if(!nameInput.value || !descInput.value || !priceInput.value) {
    alert("يرجى ملء جميع الحقول");
    return;
  }
  
  const dish = {
    name: nameInput.value,
    desc: descInput.value,
    price: parseInt(priceInput.value),
    img: imgInput.value || "https://via.placeholder.com/300x180",
    category: categorySelect.value
  };
  dishes.push(dish);
  save();
  alert("تمت الإضافة");
  displayMenu();

  nameInput.value = "";
  descInput.value = "";
  priceInput.value = "";
  imgInput.value = "";
}

function deleteDish(dishName) {
  dishes = dishes.filter(dish => dish.name !== dishName);
  save();
  displayMenu();
}

// عرض المنيو
function displayMenu(category = "all") {
  menuDiv.innerHTML = "";
  let filteredDishes = dishes;
  if(category !== "all") {
    filteredDishes = dishes.filter(dish => dish.category === category);
  }
  
  filteredDishes.forEach((dish, index) => {
    const div = document.createElement("div");
    div.className = "dish";
    div.innerHTML = `
      <img src="${dish.img}">
      <div class="dish-content">
        <h3>${dish.name}</h3>
        <p>${dish.desc}</p>
        <p class="price">${dish.price} جنيه</p>
      </div>
      <button onclick="deleteDish('${dish.name}')">حذف</button>
    `;
    menuDiv.appendChild(div);
  });
}
