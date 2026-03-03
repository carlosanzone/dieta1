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
    ]
  },

  Dona: {
    "Lunedì": [
      { name: "Yogurt 180g + frutta + avena", calories: 320 },
      { name: "Mela", calories: 80 },
      { name: "Pasta 80g + pollo 150g + verdure", calories: 600 },
      { name: "Yogurt 125g", calories: 90 },
      { name: "Salmone + patate + insalata", calories: 520 }
    ]
  }
};

// Carica dieta e mostra pasti + totale calorie
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

// Genera lista spesa
document.getElementById("show-shopping").addEventListener("click", () => {
  const person = document.getElementById("person-select").value;
  const day = document.getElementById("day-select").value;
  if (!person || !day) return;

  const meals = diets[person][day];
  const shoppingList = document.getElementById("shopping-list");

  shoppingList.innerHTML = "";

  const items = {};

  meals.forEach(meal => {
    const parts = meal.name.split("+");
    parts.forEach(p => {
      const item = p.trim();
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
