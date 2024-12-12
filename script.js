// Zugriff auf DOM-Elemente
const quoteForm = document.getElementById("quoteForm");
const quoteInput = document.getElementById("quoteInput");
const quotesList = document.getElementById("quotesList");

// Zitate laden (aus LocalStorage)
document.addEventListener("DOMContentLoaded", () => {
  const quotes = JSON.parse(localStorage.getItem("quotes")) || [];
  quotes.forEach(addQuoteToDOM);
});

// Zitat hinzufügen
quoteForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const quote = quoteInput.value.trim();
  if (quote) {
    addQuoteToDOM(quote);
    saveQuote(quote);
    quoteInput.value = ""; // Eingabefeld zurücksetzen
  }
});

// Zitat im DOM anzeigen
function addQuoteToDOM(quote) {
  const quoteDiv = document.createElement("div");
  quoteDiv.className = "quote-item";
  quoteDiv.textContent = quote;
  quotesList.appendChild(quoteDiv);
}

// Zitat speichern (in LocalStorage)
function saveQuote(quote) {
  const quotes = JSON.parse(localStorage.getItem("quotes")) || [];
  quotes.push(quote);
  localStorage.setItem("quotes", JSON.stringify(quotes));
}
