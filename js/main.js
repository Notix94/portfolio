/* NovaWeb29 — scripts communs. Chaque bloc ne s'exécute que si ses éléments existent sur la page. */
(function () {
  "use strict";

  /* Démo de demande de devis : affiche un récapitulatif, rien n'est envoyé. */
  var form = document.getElementById("devis");
  var recap = document.getElementById("recap");
  var list = document.getElementById("recap-list");
  var reset = document.getElementById("recap-reset");

  if (!form || !recap || !list || !reset) return;

  function value(data, key, fallback) {
    var v = String(data.get(key) || "").trim();
    return v || fallback;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var data = new FormData(form);
    var rows = [
      ["Nom", value(data, "nom", "Non renseigné")],
      ["Contact", value(data, "contact", "Non renseigné")],
      ["Demande", value(data, "type", "")],
      ["Délai", value(data, "delai", "")],
      ["Budget", value(data, "budget", "")],
      ["Détails", value(data, "msg", "Aucun détail")],
    ];
    list.textContent = "";
    rows.forEach(function (row) {
      var dt = document.createElement("dt");
      var dd = document.createElement("dd");
      dt.textContent = row[0];
      dd.textContent = row[1];
      list.appendChild(dt);
      list.appendChild(dd);
    });
    form.hidden = true;
    recap.hidden = false;
  });

  reset.addEventListener("click", function () {
    form.reset();
    recap.hidden = true;
    form.hidden = false;
  });
})();
