const form = document.getElementById("expense-form");
const nameInput = document.getElementById("name");
const amountInput = document.getElementById("amount");
const list = document.getElementById("expense-list");
const totalDisplay = document.getElementById("total");

let expenses = [];

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = nameInput.value.trim();
  const amount = parseFloat(amountInput.value.trim());

  if (name === "" || isNaN(amount) || amount <= 0) {
    alert("Please enter valid name and amount.");
    return;
  }

  const expense = {
    id: Date.now(),
    name,
    amount
  };

  expenses.push(expense);
  updateUI();

  nameInput.value = "";
  amountInput.value = "";
});

function updateUI() {
  list.innerHTML = "";
  let total = 0;

  expenses.forEach((expense) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${expense.name} - ₹${expense.amount}
      <button class="delete-btn" onclick="deleteExpense(${expense.id})">Delete</button>
    `;
    list.appendChild(li);
    total += expense.amount;
  });

  totalDisplay.textContent = total;
}

function deleteExpense(id) {
  expenses = expenses.filter(exp => exp.id !== id);
  updateUI();
}
