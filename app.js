// Diete predefinite per Carlo e Dona
const diets = {
  Carlo: {
    "Lunedì": [
      { name: "Yogurt 300g", calories: 420 },
      { name: "Banana 1", calories: 120 },
      { name: "Avena 40g", calories: 120 },
      { name: "Pasta integrale 120g", calories: 780 },
      { name: "Pollo 200g", calories: 780 },
      { name: "Verdure", calories: 0 },
      { name: "Yogurt 150g", calories: 100 },
      { name: "Merluzzo 220g", calories: 520 },
      { name: "Insalata", calories: 0 },
      { name: "Olio 1 cucchiaio", calories: 90 }
    ],
    "Martedì": [
      { name: "Pane integrale 3 fette", calories: 420 },
      { name: "Ricotta 60g", calories: 120 },
      { name: "Miele 1 cucchiaio", calories: 60 },
      { name: "Frutta secca 25g", calories: 150 },
      { name: "Tonno 160g", calories: 650 },
      { name: "Verdure", calories: 0 },
      { name: "Olio 1 cucchiaio", calories: 90 },
      { name: "Yogurt 150g", calories: 100 },
      { name: "Zuppa di legumi 350g", calories: 520 },
      { name: "Pane 40g", calories: 100 }
    ],
    // … (gli altri giorni restano identici alla tua versione)
  },

  Dona: {
    // … (tutta la settimana come nella tua versione)
  }
};

// Carica dieta del giorno
document.getElementById("load-diet").addEventListener("click", () => {
  const person = document.getElementById("person-select").value;
  const day = document.getElementById("day-select").value;
  if (!person || !day) return;

  const meals = diets[person][day];
  const mealList = document.getElementById("meal-list");
  const totalCaloriesSpan = document.getElementById("total-calories");

  mealList.innerHTML = "";
  let total = 0;

  meals.forEach(meal => {
    const li = document.createElement("li");
    li.textContent = `${meal.name} — ${meal.calories} kcal`;
    mealList.appendChild(li);
    total += meal.calories;
  });

  totalCaloriesSpan.textContent = total;
});

// Lista spesa del giorno
document.getElementById("show-shopping").addEventListener("click", () => {
  const person = document.getElementById("person-select").value;
  const day = document.getElementById("day-select").value;
  if (!person || !day) return;

  const meals = diets[person][day];
  const shoppingList = document.getElementById("shopping-list");

  shoppingList.innerHTML = "";

  const items = {};

  meals.forEach(meal => {
    const item = meal.name.trim();
    if (!items[item]) items[item] = 1;
    else items[item]++;
  });

  Object.keys(items).forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
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

// Lista settimanale con quantità totali
function generateWeeklyList(person) {
  const weeklyList = document.getElementById("weekly-list");
  weeklyList.innerHTML = "";

  const items = {};

  Object.keys(diets[person]).forEach(day => {
    diets[person][day].forEach(meal => {
      const item = meal.name.trim();

      const match = item.match(/^(.+?)\s*([\d,.]+)\s*(g|ml|kg|l|pz|fette|cucchiaio)?$/i);

      if (match) {
        const name = match[1].trim();
        const qty = parseFloat(match[2].replace(",", "."));
        const unit = match[3] ? match[3].toLowerCase() : "";

        const key = name + "|" + unit;

        if (!items[key]) items[key] = 0;
        items[key] += qty;

      } else {
        const key = item + "|";
        if (!items[key]) items[key] = 1;
        else items[key]++;
      }
    });
  });

  Object.keys(items).forEach(key => {
    const [name, unit] = key.split("|");
    const qty = items[key];

    const li = document.createElement("li");

    if (unit) {
      li.textContent = `${name} ${qty}${unit}`;
    } else {
      li.textContent = `${name} (${qty} volte)`;
    }

    weeklyList.appendChild(li);
  });
}
