// =========================
// DIETE COMPLETE CON SPUNTINI
// =========================

const diets = {
  Carlo: {
    "Lunedì": [
      { name: "Colazione: Yogurt 300g + banana + avena 40g", calories: 420 },
      { name: "Spuntino 10:00: Mandorle 20g", calories: 120 },
      { name: "Pranzo: Pasta integrale 120g + pollo 200g + verdure", calories: 780 },
      { name: "Spuntino 16:00: Yogurt 150g", calories: 100 },
      { name: "Cena: Merluzzo 220g + insalata + olio 1 cucchiaio", calories: 520 }
    ],
    "Martedì": [
      { name: "Colazione: Pane integrale 3 fette + ricotta 60g + miele", calories: 420 },
      { name: "Spuntino 10:00: Frutta secca 25g", calories: 150 },
      { name: "Pranzo: Insalata con tonno 160g + verdure + olio", calories: 650 },
      { name: "Spuntino 16:00: Yogurt 150g", calories: 100 },
      { name: "Cena: Zuppa di legumi 350g + pane 40g", calories: 520 }
    ],
    "Mercoledì": [
      { name: "Colazione: Frullato banana + latte 250ml + avena 50g", calories: 420 },
      { name: "Spuntino 10:00: Mela", calories: 80 },
      { name: "Pranzo: Riso basmati 120g + 3 uova + verdure", calories: 750 },
      { name: "Spuntino 16:00: Crackers integrali 30g", calories: 110 },
      { name: "Cena: Pollo 220g + verdure", calories: 520 }
    ],
    "Giovedì": [
      { name: "Colazione: Latte 250ml + 5 biscotti integrali", calories: 380 },
      { name: "Spuntino 10:00: Yogurt 150g", calories: 100 },
      { name: "Pranzo: Farro 120g + feta 100g + verdure", calories: 700 },
      { name: "Spuntino 16:00: Frutta 150g", calories: 80 },
      { name: "Cena: Tacchino 220g + insalata", calories: 520 }
    ],
    "Venerdì": [
      { name: "Colazione: Yogurt 250g + frutta + semi 30g", calories: 420 },
      { name: "Spuntino 10:00: Mandarini 2", calories: 70 },
      { name: "Pranzo: Pasta al pesto 120g", calories: 780 },
      { name: "Spuntino 16:00: Yogurt 150g", calories: 100 },
      { name: "Cena: Salmone 220g + insalata", calories: 600 }
    ],
    "Sabato": [
      { name: "Colazione: Pancake integrali + frutta + miele", calories: 420 },
      { name: "Spuntino 10:00: Frutta secca 20g", calories: 120 },
      { name: "Pranzo: Cous cous 120g + pollo 200g + verdure", calories: 780 },
      { name: "Spuntino 16:00: Yogurt 150g", calories: 100 },
      { name: "Cena: Omelette 3 uova + pane integrale", calories: 550 }
    ],
    "Domenica": [
      { name: "Colazione: Pane 3 fette + marmellata + frutta", calories: 420 },
      { name: "Spuntino 10:00: Mela", calories: 80 },
      { name: "Pranzo: Pasta 120g + carne magra 200g", calories: 820 },
      { name: "Spuntino 16:00: Crackers integrali 30g", calories: 110 },
      { name: "Cena: Minestrone + crostini + formaggio leggero 40g", calories: 500 }
    ]
  },

  Dona: {
    "Lunedì": [
      { name: "Colazione: Yogurt 180g + frutta + avena 30g", calories: 320 },
      { name: "Spuntino 10:00: Mela", calories: 80 },
      { name: "Pranzo: Pasta 80g + pollo 150g + verdure", calories: 600 },
      { name: "Spuntino 16:00: Yogurt 125g", calories: 90 },
      { name: "Cena: Salmone 150g + patate 150g + insalata", calories: 520 }
    ],
    "Martedì": [
      { name: "Colazione: Pane integrale 2 fette + ricotta 40g + miele", calories: 320 },
      { name: "Spuntino 10:00: Mandarino", calories: 40 },
      { name: "Pranzo: Insalata tonno 120g + mais + olio", calories: 500 },
      { name: "Spuntino 16:00: Yogurt 125g", calories: 90 },
      { name: "Cena: Zuppa di legumi 250g + pane 30g", calories: 420 }
    ],
    "Mercoledì": [
      { name: "Colazione: Frullato banana + latte 200ml + avena 40g", calories: 350 },
      { name: "Spuntino 10:00: Frutta secca 15g", calories: 90 },
      { name: "Pranzo: Riso basmati 80g + 2 uova + verdure", calories: 550 },
      { name: "Spuntino 16:00: Crackers integrali 25g", calories: 90 },
      { name: "Cena: Tacchino 150g + verdure + olio", calories: 450 }
    ],
    "Giovedì": [
      { name: "Colazione: Latte 200ml + 4 biscotti integrali", calories: 300 },
      { name: "Spuntino 10:00: Yogurt 125g", calories: 90 },
      { name: "Pranzo: Farro 80g + feta 80g + verdure", calories: 520 },
      { name: "Spuntino 16:00: Frutta 150g", calories: 80 },
      { name: "Cena: Pollo 150g + patate 120g + insalata", calories: 450 }
    ],
    "Venerdì": [
      { name: "Colazione: Yogurt 180g + frutta + semi 20g", calories: 320 },
      { name: "Spuntino 10:00: Mela", calories: 80 },
      { name: "Pranzo: Pasta al pesto 80g", calories: 550 },
      { name: "Spuntino 16:00: Yogurt 125g", calories: 90 },
      { name: "Cena: Merluzzo 150g + verdure + olio", calories: 450 }
    ],
    "Sabato": [
      { name: "Colazione: Pancake integrali + frutta", calories: 350 },
      { name: "Spuntino 10:00: Mandarino", calories: 40 },
      { name: "Pranzo: Cous cous 80g + pollo 150g + verdure", calories: 550 },
      { name: "Spuntino 16:00: Yogurt 125g", calories: 90 },
      { name: "Cena: Omelette 2 uova + pane integrale", calories: 450 }
    ],
    "Domenica": [
      { name: "Colazione: Pane 2 fette + marmellata + frutta", calories: 300 },
      { name: "Spuntino 10:00: Mela", calories: 80 },
      { name: "Pranzo: Pasta 80g + carne magra 150g", calories: 600 },
      { name: "Spuntino 16:00: Crackers integrali 25g", calories: 90 },
      { name: "Cena: Minestrone + crostini", calories: 350 }
    ]
  }
};

// =========================
// CARICA DIETA
// =========================

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

// =========================
// LISTA SPESA + STAMPA
// =========================

document.getElementById("show-shopping").addEventListener("click", () => {
  const listDiv = document.getElementById("shopping-list");
  const printBtn = document.getElementById("print-shopping");

  listDiv.style.display = "block";
  printBtn.style.display = "inline-block";

  listDiv.innerHTML = "";

  const categories = {
    "🥩 Proteine": [
      "Pollo – 3,2 kg",
      "Tacchino – 1,1 kg",
      "Merluzzo – 1,1 kg",
      "Salmone – 1,1 kg",
      "Carne magra – 550 g",
      "Tonno – 280 g",
      "Uova – 38",
      "Feta – 180 g",
      "Formaggio leggero – 40 g"
    ],
    "🍝 Carboidrati": [
      "Pasta integrale – 120 g",
      "Pasta normale – 360 g",
      "Pasta per pesto – 200 g",
      "Riso basmati – 400 g",
      "Farro – 200 g",
      "Cous cous – 200 g",
      "Pane integrale – 20 fette",
      "Pane normale – 5 fette",
      "Avena – 350 g",
      "Biscotti integrali – 9",
      "Crackers integrali – 200 g",
      "Crostini – 2 confezioni"
    ],
    "🥦 Verdure e Legumi": [
      "Verdure miste – 6 kg",
      "Insalata – 8 buste",
      "Patate – 900 g",
      "Zuppa di legumi – 850 g",
      "Mais – 1 scatola"
    ],
    "🥛 Latticini": [
      "Yogurt – 4,5 kg",
      "Ricotta – 100 g",
      "Latte – 1,5 litri"
    ],
    "🍎 Frutta": [
      "Frutta mista – 4 kg",
      "Banane – 6",
      "Mele – 7",
      "Mandarini – 6"
    ],
    "🥜 Spuntini": [
      "Mandorle – 200 g",
      "Frutta secca mista – 200 g",
      "Semi vari – 50 g"
    ],
    "🧂 Dispensa": [
      "Olio extravergine d’oliva – 2 bottiglie",
      "Marmellata – 1 vasetto",
      "Miele – 1 vasetto"
    ]
  };

  Object.keys(categories).forEach(cat => {
    const h2 = document.createElement("h2");
    h2.textContent = cat;
    listDiv.appendChild(h2);

    const ul = document.createElement("ul");
    categories[cat].forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      ul.appendChild(li);
    });

    listDiv.appendChild(ul);
  });
});

// STAMPA LISTA SPESA
document.getElementById("print-shopping").addEventListener("click", () => {
  const printContent = document.getElementById("shopping-list").innerHTML;
  const win = window.open("", "", "width=800,height=900");
  win.document.write(`
    <html>
      <head>
        <title>Lista della Spesa</title>
        <style>
          body { font-family: 'Segoe UI', sans-serif; padding: 20px; }
          h2 { border-bottom: 2px solid #ccc; padding-bottom: 5px; }
          ul { list-style: none; padding-left: 0; }
          li { padding: 6px 10px; margin: 4px 0; background: #f5f5f5; border-left: 4px solid #2a7f62; }
        </style>
      </head>
      <body>
        <h1>Lista della Spesa</h1>
        ${printContent}
      </body>
    </html>
  `);
  win.document.close();
  win.print();
});
