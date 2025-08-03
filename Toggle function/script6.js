// script.js

const toggleBtn = document.getElementById("toggleBtn");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  if (body.classList.contains("light")) {
    body.classList.remove("light");
    body.classList.add("dark");
    toggleBtn.textContent = "Switch to Light Mode";
  } else {
    body.classList.remove("dark");
    body.classList.add("light");
    toggleBtn.textContent = "Switch to Dark Mode";
  }
});
