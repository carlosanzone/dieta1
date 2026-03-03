// -----------------------------
// DIETA BASE (uguale per tutti)
// -----------------------------
const baseDiet = {
  "Lunedì": [
    "Yogurt 300g",
    "Banana 1",
    "Avena 40g",
    "Pasta integrale 120g",
    "Pollo 200g",
    "Verdure",
    "Yogurt 150g",
    "Merluzzo 220g",
    "Insalata",
    "Olio 1 cucchiaio"
  ],

  "Martedì": [
    "Pane integrale 3 fette",
    "Ricotta 60g",
    "Miele 1 cucchiaio",
    "Frutta secca 25g",
    "Tonno 160g",
    "Verdure",
    "Olio 1 cucchiaio",
    "Yogurt 150g",
    "Zuppa di legumi 350g",
    "Pane 40g"
  ],

  "Mercoledì": [
    "Frullato banana + latte 250ml + avena 50g",
    "Mela",
    "Riso basmati 120g",
    "Uova 3",
    "Verdure",
    "Crackers integrali 30g",
    "Pollo 220g"
  ],

  "Giovedì": [
    "Latte 250ml",
    "Biscotti integrali 5",
    "Yogurt 150g",
    "Farro 120g",
    "Feta 100g",
    "Verdure",
    "Frutta 150g",
    "Tacchino 220g"
  ],

  "Venerdì": [
    "Yogurt 250g",
    "Frutta",
    "Semi 30g",
    "Mandarini 2",
    "Pasta al pesto 120g",
    "Yogurt 150g",
    "Salmone 220g",
    "Insalata"
  ],

  "Sabato": [
    "Pancake integrali",
    "Frutta",
    "Miele 1 cucchiaio",
    "Frutta secca 20g",
    "Cous cous 120g",
    "Pollo 200g",
    "Verdure",
    "Yogurt 150g",
    "Omelette 3 uova",
    "Pane integrale 1 fetta"
  ],

  "Domenica": [
    "Pane 3 fette",
    "Marmellata 20g",
    "Frutta",
    "Mela",
    "Pasta 120g",
    "Carne magra 200g",
    "Crackers integrali 30g",
    "Minestrone",
    "Crostini 20g",
    "Formaggio leggero 40g"
  ]
};

// --------------------------------------------
// FUNZIONE: aumenta quantità del +20% arrotondato
// --------------------------------------------
function increaseQuantity(item) {
  const match = item.match(/^(.+?)\s*([\d,.]+)\s*(g|ml|kg|l|pz|fette|cucchiaio|uova)?$/i);

  if (!match) return item; // ingredienti senza quantità

  const name = match[1].trim();
  const qty = parseFloat(match[2].replace(",", "."));
  const unit = match[3] || "";

  const increased = Math.round(qty * 1.2);

  return `${name} ${increased}${unit}`;
}

// --------------------------------------------
// DIETE FINALI
// --------------------------------------------
const diets = {
  Carlo: {},
  Dona: baseDiet
};

// Carlo = baseDiet con +20%
Object.keys(baseDiet).forEach(day => {
  diets.Carlo[day] = baseDiet[day].map(item => increaseQuantity(item));
});

// --------------------------------------------
// FUNZIONI APP
// --------------------------------------------

// Carica pasti del giorno
document.getElementById("load-diet").addEventListener("click", () => {
  const person = document.getElementById("person-select").value;
  const day = document.getElementById("day-select").value;
  if (!person || !day) return;

  const meals = diets[person][day];
  const mealList = document.getElementById("meal-list");
  mealList.innerHTML = "";

  meals.forEach(meal => {
    const li = document.createElement("li");
    li.textContent = meal;
    mealList.appendChild(li);
  });
});

// Lista spesa del giorno
document.getElementById("show-shopping").addEventListener("click", () => {
  const person = document.getElementById("person-select").value;
  const day = document.getElementById("day-select").value;
  if (!person || !day) return;

  const meals = diets[person][day];
  const shoppingList = document.getElementById("shopping-list");
  shoppingList.innerHTML = "";

  meals.forEach(meal => {
    const li = document.createElement("li");
    li.textContent = meal;
    shoppingList.appendChild(li);
  });
});

// Toggle lista settimanale
document.getElementById("toggle-week").addEventListener("click", () => {
  const person = document.getElementById("person-select").value;
  if (!person) return;

  const weeklyList = document.getElementById("weekly-list");
  weeklyList.classList.toggle("hidden");

  if (!weeklyList.classList.contains("hidden")) {
    generateWeeklyList(person);
  }
});

// Lista settimanale
function generateWeeklyList(person) {
  const weeklyList = document.getElementById("weekly-list");
  weeklyList.innerHTML = "";

  Object.keys(diets[person]).forEach(day => {
    diets[person][day].forEach(meal => {
      const li = document.createElement("li");
      li.textContent = meal;
      weeklyList.appendChild(li);
    });
  });
}
