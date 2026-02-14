const STORAGE_KEY = "dishes";

function getDishes() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

function saveDishes(dishes) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(dishes));
}