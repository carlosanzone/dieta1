<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dieta settimanale – Carlo & Dona</title>
  <link rel="stylesheet" href="style.css">
</head>

<body>

  <h1>Dieta settimanale – Carlo & Dona</h1>

  <label for="person-select">Seleziona persona:</label>
  <select id="person-select">
    <option value="">-- Seleziona --</option>
    <option value="Carlo">Carlo</option>
    <option value="Dona">Dona</option>
  </select>

  <label for="day-select">Seleziona giorno:</label>
  <select id="day-select">
    <option value="">-- Seleziona --</option>
    <option value="Lunedì">Lunedì</option>
    <option value="Martedì">Martedì</option>
    <option value="Mercoledì">Mercoledì</option>
    <option value="Giovedì">Giovedì</option>
    <option value="Venerdì">Venerdì</option>
    <option value="Sabato">Sabato</option>
    <option value="Domenica">Domenica</option>
  </select>

  <button id="load-diet">Carica dieta del giorno</button>
  <button id="customize-diet">Personalizza dieta del giorno</button>
  <button id="show-history">Storico diete salvate</button>

  <button id="show-shopping">Mostra lista spesa</button>
  <button id="print-shopping" style="display:none;">Stampa lista spesa</button>

  <div id="shopping-list" class="shopping-list" style="display:none;"></div>

  <h2>Pasti del giorno</h2>
  <ul id="meal-list"></ul>

  <h3>Totale calorie: <span id="total-calories">0</span></h3>

  <!-- Pannello personalizzazione -->
  <div id="customize-panel" style="display:none; margin-top:20px;">
    <h2>Personalizza i pasti</h2>
    <div id="customize-content"></div>

    <h3>Aggiungi un pasto manualmente</h3>
    <input id="manual-name" placeholder="Nome pasto">
    <input id="manual-cal" placeholder="Calorie" type="number">
    <button id="add-manual">Aggiungi pasto</button>

    <button id="save-custom-diet" style="margin-top:20px;">Salva dieta personalizzata</button>
    <button id="reset-custom-diet">Reset dieta originale</button>
  </div>

  <!-- Storico diete -->
  <div id="history-panel" style="display:none; margin-top:20px;">
    <h2>Storico diete salvate</h2>
    <div id="history-content"></div>
  </div>

  <script src="app.js"></script>

</body>
</html>
