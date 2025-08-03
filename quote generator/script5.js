// script5.js

const quotes = [
  "Believe you can and you're halfway there. – Theodore Roosevelt",
  "The future belongs to those who prepare for it today. – Malcolm X",
  "Do one thing every day that scares you. – Eleanor Roosevelt",
  "Don’t watch the clock; do what it does. Keep going. – Sam Levenson",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
  "Your time is limited, don’t waste it living someone else’s life. – Steve Jobs",
  "It always seems impossible until it’s done. – Nelson Mandela"
];

const quoteText = document.getElementById("quoteText");
const newQuoteBtn = document.getElementById("newQuoteBtn");

newQuoteBtn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteText.textContent = quotes[randomIndex];
});
