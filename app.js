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
