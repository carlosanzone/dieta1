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
    ],
    "Mercoledì": [
      { name: "Colazione: Frullato banana + latte 250ml + avena 50g", calories: 420 },
      { name: "Pranzo: Riso basmati 120g + 3 uova + verdure", calories: 750 },
      { name: "Cena: Pollo 220g + verdure", calories: 520 }
    ],
    "Giovedì": [
      { name: "Colazione: Latte 250ml + 5 biscotti integrali", calories: 380 },
      { name: "Pranzo: Farro 120g + feta 100g + verdure", calories: 700 },
      { name: "Cena: Tacchino 220g + insalata", calories: 520 }
    ],
    "Venerdì": [
      { name: "Colazione: Yogurt 250g + frutta + semi 30g", calories: 420 },
      { name: "Pranzo: Pasta al pesto 120g", calories: 780 },
      { name: "Cena: Salmone 220g + insalata", calories: 600 }
    ],
    "Sabato": [
      { name: "Colazione: Pancake integrali + frutta + miele", calories: 420 },
      { name: "Pranzo: Cous cous 120g + pollo 200g + verdure", calories: 780 },
      { name: "Cena: Omelette 3 uova + pane integrale", calories: 550 }
    ],
    "Domenica": [
      { name: "Colazione: Pane 3 fette + marmellata + frutta", calories: 420 },
      { name: "Pranzo: Pasta 120g + carne magra 200g", calories: 820 },
      { name: "Cena: Minestrone + crostini + formaggio leggero 40g", calories: 500 }
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
    ],
    "Mercoledì": [
      { name: "Colazione: Frullato banana + latte 200ml + avena 40g", calories: 350 },
      { name: "Pranzo: Riso basmati 80g + 2 uova + verdure", calories: 550 },
      { name: "Cena: Tacchino 150g + verdure + olio", calories: 450 }
    ],
    "Giovedì": [
      { name: "Colazione: Latte 200ml + 4 biscotti integrali", calories: 300 },
      { name: "Pranzo: Farro 80g + feta 80g + verdure", calories: 520 },
      { name: "Cena: Pollo 150g + patate 120g + insalata", calories: 450 }
    ],
    "Venerdì": [
      { name: "Colazione: Yogurt 180g + frutta + semi 20g", calories: 320 },
      { name: "Pranzo: Pasta al pesto 80g", calories: 550 },
      { name: "Cena: Merluzzo 150g + verdure + olio", calories: 450 }
    ],
    "Sabato": [
      { name: "Colazione: Pancake integrali + frutta", calories: 350 },
      { name: "Pranzo: Cous cous 80g + pollo 150g + verdure", calories: 550 },
      { name: "Cena: Omelette 2 uova + pane integrale", calories: 450 }
    ],
    "Domenica": [
      { name: "Colazione: Pane 2 fette + marmellata + frutta", calories: 300 },
      { name: "Pranzo: Pasta 80g + carne magra 150g", calories: 600 },
      { name: "Cena: Minestrone + crostini", calories: 350 }
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

// CALORIE SETTIMANALI PER GRAFICO
const weeklyCalories = {
  Carlo: {
    "Lunedì": 420 + 780 + 520,
    "Martedì": 420 + 650 + 520,
    "Mercoledì": 420 + 750 + 520,
    "Giovedì": 380 + 700 + 520,
    "Venerdì": 420 + 780 + 600,
    "Sabato": 420 + 780 + 550,
    "Domenica": 420 + 820 + 500
  },
  Dona: {
    "Lunedì": 320 + 600 + 520,
    "Martedì": 320 + 500 + 420,
    "Mercoledì": 350 + 550 + 450,
    "Giovedì": 300 + 520 + 450,
    "Venerdì": 320 + 550 + 450,
    "Sabato": 350 + 550 + 450,
    "Domenica": 300 + 600 + 350
  }
};

// GRAFICO
function drawChart() {
  const ctx = document.getElementById("calorieChart").getContext("2d");

  if (window.calorieChart) window.calorieChart.destroy();

  window.calorieChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Lunedì","Martedì","Mercoledì","Giovedì","Venerdì","Sabato","Domenica"],
      datasets: [
        {
          label: "Carlo",
          data: Object.values(weeklyCalories.Carlo),
          borderColor: "#2a7f62",
          backgroundColor: "rgba(42,127,98,0.2)",
          borderWidth: 3
        },
        {
          label: "Dona",
          data: Object.values(weeklyCalories.Dona),
          borderColor: "#ff7f50",
          backgroundColor: "rgba(255,127,80,0.2)",
          borderWidth: 3
        }
      ]
    },
    options: { responsive: true }
  });
}

drawChart();

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

