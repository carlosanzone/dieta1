// DIETE COMPLETE
const diets = {
  Carlo: {
    "Lunedì": [
      { name: "Colazione: Yogurt 300g + banana + avena 40g", calories: 420 },
      { name: "Pranzo: Pasta integrale 120g + pollo 200g + verdure", calories: 780 },
      { name: "Cena: Merluzzo 220g + insalata + olio 1 cucchiaio", calories: 520 }
    ],
    "Martedì": [
      { name: "Colazione: Pane integrale 3 fette + ricotta 60g + miele", calories: 420 },
      { name: "Pranzo: Insalata con tonno 160g + verdure + olio", calories: 650 },
      { name: "Cena: Zuppa di legumi 350g + pane 40g", calories: 520 }
    ]
  },

  Dona: {
    "Lunedì": [
      { name: "Colazione: Yogurt 180g + frutta + avena 30g", calories: 320 },
      { name: "Pranzo: Pasta 80g + pollo 150g + verdure", calories: 600 },
      { name: "Cena: Salmone 150g + patate 150g + insalata", calories: 520 }
    ],
    "Martedì": [
      { name: "Colazione: Pane integrale 2 fette + ricotta 40g + miele", calories: 320 },
      { name: "Pranzo: Insalata tonno 120g + mais + olio", calories: 500 },
      { name: "Cena: Zuppa di legumi 250g + pane 30g", calories: 420 }
    ]
  }
};

// CARICA DIETA
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

// LISTA SPESA
const shoppingList = {
  Proteine: [
    "Pollo: 2,45 kg",
    "Tacchino: 370 g",
    "Merluzzo: 370 g",
    "Salmone: 370 g",
    "Carne magra: 350 g",
    "Tonno: 280 g",
    "Uova: 28"
  ],
  Carboidrati: [
    "Pasta integrale: 120 g",
    "Pasta normale: 360 g",
    "Riso basmati: 200 g",
    "Cous cous: 200 g",
    "Pane integrale: 15 fette",
    "Avena: 250 g",
    "Biscotti integrali: 9"
  ],
  Verdure: [
    "Verdure miste: 5,5 kg",
    "Insalata: 5 buste",
    "Patate: 620 g",
    "Zuppa di legumi: 600 g",
    "Mais: 1 scatola"
  ],
  Latticini: [
    "Yogurt: 3,3 kg",
    "Ricotta: 100 g",
    "Feta: 180 g",
    "Formaggio leggero: 40 g"
  ],
  Frutta: [
    "Frutta mista: 3,5 kg",
    "Banane: 6"
  ],
  Altro: [
    "Olio EVO: 2 bottiglie",
    "Marmellata: 1 vasetto",
    "Miele: 1 vasetto",
    "Semi: 50 g",
    "Crostini: 2 confezioni"
  ]
};

// MOSTRA LISTA SPESA
document.getElementById("show-shopping").addEventListener("click", () => {
  const list = document.getElementById("shopping-list");
  list.innerHTML = "";

  Object.keys(shoppingList).forEach(category => {
    const title = document.createElement("h3");
    title.textContent = category;
    list.appendChild(title);

    shoppingList[category].forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      list.appendChild(li);
    });
  });
});
