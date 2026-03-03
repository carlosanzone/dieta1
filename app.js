// =========================
// DIETE COMPLETE
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
// ALTERNATIVE PER CARLO E DONA
// =========================

const alternatives = {
  Carlo: {
    colazione: [
      { name: "Yogurt 200g + frutta", calories: 250 },
      { name: "Toast integrale + ricotta", calories: 300 },
      { name: "Frullato proteico", calories: 280 }
    ],
    spuntino10: [
      { name: "Mandorle 20g", calories: 120 },
      { name: "Mela", calories: 80 },
      { name: "Banana piccola", calories: 90 }
    ],
    pranzo: [
      { name: "Pasta 100g + verdure", calories: 500 },
      { name: "Riso 120g + pollo", calories: 650 },
      { name: "Insalata proteica", calories: 350 }
    ],
    spuntino16: [
      { name: "Yogurt 150g", calories: 100 },
      { name: "Crackers integrali 30g", calories: 110 }
    ],
    cena: [
      { name: "Pollo 200g + verdure", calories: 520 },
      { name: "Merluzzo 200g + insalata", calories: 480 },
      { name: "Zuppa di legumi", calories: 350 }
    ]
  },

  Dona: {
    colazione: [
      { name: "Yogurt 150g + frutta", calories: 220 },
      { name: "Pane integrale + marmellata", calories: 260 },
      { name: "Frullato leggero", calories: 200 }
    ],
    spuntino10: [
      { name: "Mela", calories: 80 },
      { name: "Mandarino", calories: 40 }
    ],
    pranzo: [
      { name: "Pasta 70g + verdure", calories: 450 },
      { name: "Riso 80g + uova", calories: 520 },
      { name: "Insalata tonno leggera", calories: 400 }
    ],
    spuntino16: [
      { name: "Yogurt 125g", calories: 90 },
      { name: "Crackers 25g", calories: 90 }
    ],
    cena: [
      { name: "Tacchino 150g + verdure", calories: 450 },
      { name: "Merluzzo 150g + insalata", calories: 420 },
      { name: "Minestrone", calories: 300 }
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

  const custom = loadCustomDiet(person, day);
  const meals = custom || diets[person][day];

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
// PERSONALIZZA DIETA
// =========================

document.getElementById("customize-diet").addEventListener("click", () => {
  const person = document.getElementById("person-select").value;
  const day = document.getElementById("day-select").value;

  if (!person || !day) {
    alert("Seleziona prima persona e giorno.");
    return;
  }

  const panel = document.getElementById("customize-panel");
  const content = document.getElementById("customize-content");

  panel.style.display = "block";
  content.innerHTML = "";

  const meals = diets[person][day];
  const alt = alternatives[person];

  const keys = ["colazione", "spuntino10", "pranzo", "spuntino16", "cena"];

  meals.forEach((meal, index) => {
    const key = keys[index];

    const div = document.createElement("div");
    div.innerHTML = `
      <label><strong>${meal.name.split(":")[0]}</strong></label>
      <select data-index="${index}">
        <option value="${meal.name}|${meal.calories}">${meal.name} — ${meal.calories} kcal</option>
        ${alt[key].map(a => `<option value="${a.name}|${a.calories}">${a.name} — ${a.calories} kcal</option>`).join("")}
      </select>
    `;
    content.appendChild(div);
  });
});

// =========================
// AGGIUNGI PASTO MANUALE
// =========================

document.getElementById("add-manual").addEventListener("click", () => {
  const name = document.getElementById("manual-name").value;
  const cal = document.getElementById("manual-cal").value;

  if (!name || !cal) {
    alert("Inserisci nome e calorie.");
    return;
  }

  const content = document.getElementById("customize-content");

  const div = document.createElement("div");
  div.innerHTML = `
    <label><strong>Pasto aggiunto manualmente</strong></label>
    <select>
      <option value="${name}|${cal}">${name} — ${cal} kcal</option>
    </select>
  `;

  content.appendChild(div);

  document.getElementById("manual-name").value = "";
  document.getElementById("manual-cal").value = "";
});

// =========================
// SALVATAGGIO PERMANENTE
// =========================

function saveCustomDiet(person, day, meals) {
  const key = `diet_${person}_${day}`;
  localStorage.setItem(key, JSON.stringify(meals));
}

function loadCustomDiet(person, day) {
  const key = `diet_${person}_${day}`;
  const saved = localStorage.getItem(key);
  return saved ? JSON.parse(saved) : null;
}

function resetCustomDiet(person, day) {
  const key = `diet_${person}_${day}`;
  localStorage.removeItem(key);
}

// =========================
// SALVA DIETA PERSONALIZZATA
// =========================

document.getElementById("save-custom-diet").addEventListener("click", () => {
  const person = document.getElementById("person-select").value;
  const day = document.getElementById("day-select").value;

  const selects = document.querySelectorAll("#customize-content select");

  const newMeals = [];

  selects.forEach(sel => {
    const [name, cal] = sel.value.split("|");
    newMeals.push({ name, calories: parseInt(cal) });
  });

  saveCustomDiet(person, day, newMeals);

  alert("Dieta personalizzata salvata in modo permanente!");
});

// =========================
// RESET DIETA
// =========================

document.getElementById("reset-custom-diet").addEventListener("click", () => {
  const person = document.getElementById("person-select").value;
  const day = document.getElementById("day-select").value;

  resetCustomDiet(person, day);

  alert("Dieta ripristinata alla versione originale!");
});

// =========================
// STORICO DIETE SALVATE
// =========================

document.getElementById("show-history").addEventListener("click", () => {
  const panel = document.getElementById("history-panel");
  const content = document.getElementById("history-content");

  panel.style.display = panel.style.display === "block" ? "none" : "block";
  content.innerHTML = "";

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);

    if (key.startsWith("diet_")) {
      const [_, person, day] = key.split("_");
      const meals = JSON.parse(localStorage.getItem(key));

      const div = document.createElement("div");
      div.className = "history-item";

      div.innerHTML = `
        <h3>${person} – ${day}</h3>
        <ul>
          ${meals.map(m => `<li>${m.name} — ${m.calories} kcal</li>`).join("")}
        </ul>
        <button class="restore-btn" data-person="${person}" data-day="${day}">Ripristina</button>
        <button class="delete-btn" data-key="${key}">Elimina</button>
      `;

      content.appendChild(div);
    }
  }

  document.querySelectorAll(".restore-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const person = btn.dataset.person;
      const day = btn.dataset.day;

      const saved = loadCustomDiet(person, day);
      diets[person][day] = saved;

      alert(`Dieta di ${person} per ${day} ripristinata!`);
    });
  });

  document.querySelectorAll(".delete-btn").forEach(btn => {
    btn.addEventListener("click", () =>
