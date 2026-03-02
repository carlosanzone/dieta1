const weeklyDiet = {
  "Lunedì": [
    { name: "Colazione: Yogurt 200g + banana + avena 30g", calories: 350 },
    { name: "Pranzo: Pasta integrale 80g + pollo 150g + verdure", calories: 600 },
    { name: "Cena: Merluzzo 200g + insalata + olio 1 cucchiaio", calories: 450 }
  ],
  "Martedì": [
    { name: "Colazione: Pane integrale 2 fette + ricotta 40g + miele", calories: 320 },
    { name: "Pranzo: Insalata con tonno 120g + verdure + olio", calories: 500 },
    { name: "Cena: Zuppa di legumi 250g + verdure", calories: 420 }
  ],
  "Mercoledì": [
    { name: "Colazione: Frullato banana + latte 200ml + avena 40g", calories: 350 },
    { name: "Pranzo: Riso basmati 80g + 2 uova + verdure", calories: 550 },
    { name: "Cena: Pollo 200g + verdure", calories: 450 }
  ],
  "Giovedì": [
    { name: "Colazione: Latte 200ml + biscotti integrali 4", calories: 300 },
    { name: "Pranzo: Farro 80g + feta 80g + verdure", calories: 520 },
    { name: "Cena: Tacchino 200g + insalata", calories: 450 }
  ],
  "Venerdì": [
    { name: "Colazione: Yogurt + frutta + semi 20g", calories: 320 },
    { name: "Pranzo: Pasta al pesto leggero 80g", calories: 550 },
    { name: "Cena: Salmone 180g + insalata", calories: 500 }
  ],
  "Sabato": [
    { name: "Colazione: Pancake integrali + frutta", calories: 350 },
    { name: "Pranzo: Cous cous 80g + pollo 150g + verdure", calories: 550 },
    { name: "Cena: Omelette 2 uova + pane integrale", calories: 450 }
  ],
  "Domenica": [
    { name: "Colazione: Pane + marmellata", calories: 300 },
    { name: "Pranzo: Pasta 80g + carne magra 150g", calories: 600 },
    { name: "Cena: Minestrone + crostini", calories: 350 }
  ]
};

const mealList = document.getElementById("meal-list");
const totalCaloriesSpan = document.getElementById("total-calories");

document.getElementById("load-diet").addEventListener("click", () => {
  const day = document.getElementById("day-select").value;
  if (!day) return;

  const meals = weeklyDiet[day];
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
