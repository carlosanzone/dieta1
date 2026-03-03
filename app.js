// Diete predefinite per Carlo e Dona
const diets = {
  Carlo: {
    "Lunedì": [
      { name: "Yogurt 300g + banana + avena 40g", calories: 420 },
      { name: "Mandorle 20g", calories: 120 },
      { name: "Pasta integrale 120g + pollo 200g + verdure", calories: 780 },
      { name: "Yogurt 150g", calories: 100 },
      { name: "Merluzzo 220g + insalata + olio", calories: 520 }
    ],
    "Martedì": [
      { name: "Pane integrale + ricotta + miele", calories: 420 },
      { name: "Frutta secca 25g", calories: 150 },
      { name: "Insalata con tonno + verdure + olio", calories: 650 },
      { name: "Yogurt 150g", calories: 100 },
      { name: "Zuppa di legumi + pane", calories: 520 }
    ],
    "Mercoledì": [
      { name: "Frullato banana + latte + avena", calories: 420 },
      { name: "Mela", calories: 80 },
      { name: "Riso basmati + uova + verdure", calories: 750 },
      { name: "Crackers integrali", calories: 110 },
      { name: "Pollo + verdure", calories: 520 }
    ],
    "Giovedì": [
      { name: "Latte + biscotti integrali", calories: 380 },
      { name: "Yogurt 150g", calories: 100 },
      { name: "Farro + feta + verdure", calories: 700 },
      { name: "Frutta 150g", calories: 80 },
      { name: "Tacchino + insalata", calories: 520 }
    ],
    "Venerdì": [
      { name: "Yogurt + frutta + semi", calories: 420 },
      { name: "Mandarini", calories: 70 },
      { name: "Pasta al pesto", calories: 780 },
      { name: "Yogurt 150g", calories: 100 },
      { name: "Salmone + insalata", calories: 600 }
    ],
    "Sabato": [
      { name: "Pancake + frutta + miele", calories: 420 },
      { name: "Frutta secca", calories: 120 },
      { name: "Cous cous + pollo + verdure", calories: 780 },
      { name: "Yogurt 150g", calories: 100 },
      { name: "Omelette + pane integrale", calories: 550 }
    ],
    "Domenica": [
      { name: "Pane + marmellata + frutta", calories: 420 },
      { name: "Mela", calories: 80 },
      { name: "Pasta + carne magra", calories: 820 },
      { name: "Crackers integrali", calories: 110 },
      { name: "Minestrone + crostini", calories: 500 }
    ]
  },

  Dona: {
    "Lunedì": [
      { name: "Yogurt 180g + frutta + avena", calories: 320 },
      { name: "Mela", calories: 80 },
      { name: "Pasta 80g + pollo 150g + verdure", calories: 600 },
      { name: "Yogurt 125g", calories: 90 },
      { name: "Salmone + patate + insalata", calories: 520 }
    ],
    "Martedì": [
      { name: "Pane integrale + ricotta + miele", calories: 320 },
      { name: "Mandarino", calories: 40 },
      { name: "Insalata tonno + mais + olio", calories: 500 },
      { name: "Yogurt 125g", calories: 90 },
      { name: "Zuppa di legumi + pane", calories: 420 }
    ],
    "Mercoledì": [
      { name: "Frullato banana + latte + avena", calories: 350 },
      { name: "Frutta secca", calories: 90 },
      { name: "Riso basmati + uova + verdure", calories: 550 },
      { name: "Crackers integrali", calories: 90 },
      { name: "Tacchino + verdure + olio", calories: 450 }
    ],
    "Giovedì": [
      { name: "Latte + biscotti integrali", calories: 300 },
      { name: "Yogurt 125g", calories: 90 },
      { name: "Farro + feta + verdure", calories: 520 },
      { name: "Frutta 150g", calories: 80 },
      { name: "Pollo + patate + insalata", calories: 450 }
    ],
    "Venerdì": [
      { name: "Yogurt + frutta + semi", calories: 320 },
      { name: "Mela", calories: 80 },
      { name: "Pasta al pesto", calories: 550 },
      { name: "Yogurt 125g", calories: 90 },
      { name: "Merluzzo + verdure + olio", calories: 450 }
    ],
    "Sabato": [
      { name: "Pancake + frutta", calories: 350 },
      { name: "Mandarino", calories: 40 },
      { name: "Cous cous + pollo + verdure", calories: 550 },
      { name: "Yogurt 125g", calories: 90 },
      { name: "Omelette + pane integrale", calories: 450 }
    ],
    "Domenica": [
      { name: "Pane + marmellata + frutta", calories: 300 },
      { name: "Mela", calories: 80 },
      { name: "Pasta + carne magra", calories: 600 },
      { name: "Crackers integrali", calories: 90 },
      { name: "Minestrone + crostini", calories: 350 }
    ]
  }
};

// Carica dieta del giorno
document.getElementById("load-diet").addEventListener("click", () => {
  const person = document.getElementById("person-select").value;
  const day = document.getElementById("day-select").value;
  if (!person || !day) return;

  const meals = diets[person] && diets[person][day] ? diets[person][day] : [];
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

  const meals = diets[person] && diets[person][day] ? diets[person][day] : [];
  const shoppingList = document.getElementById("shopping-list");

  shoppingList.innerHTML = "";

  const items = {};

  meals.forEach(meal => {
    const parts = meal.name.split("+");
    parts.forEach(p => {
      const item = p.trim();
      if (!item) return;
      if (!items[item]) items[item] = 0;
      items[item]++;
    });
  });

  Object.keys(items).forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    shoppingList.appendChild(li);
  });
});

// Toggle lista spesa settimanale
document.getElementById("toggle-week").addEventListener("click", () => {
  const person = document.getElementById("person-select").value;
  if (!person) return;

  const weeklyList = document.getElementById("weekly-list");
  weeklyList.classList.toggle("hidden");

  if (!weeklyList.classList.contains("hidden")) {
    generateWeeklyList(person);
  }
});

// Genera lista settimanale
function generateWeeklyList(person) {
  const weeklyList = document.getElementById("weekly-list");
  weeklyList.innerHTML = "";

  const items = {};

  Object.keys(diets[person]).forEach(day => {
    diets[person][day].forEach(meal => {
      const parts = meal.name.split("+");
      parts.forEach(p => {
        const item = p.trim();
        if (!item) return;
        if (!items[item]) items[item] = 0;
        items[item]++;
      });
    });
  });

  Object.keys(items).forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    weeklyList.appendChild(li);
  });
}
