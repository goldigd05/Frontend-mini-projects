// script4.js

document.getElementById("calcBtn").addEventListener("click", function () {
  const height = parseFloat(document.getElementById("height").value);
  const weight = parseFloat(document.getElementById("weight").value);
  const result = document.getElementById("result");

  // Input validation
  if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
    result.innerHTML = "<p>Please enter valid height and weight values.</p>";
    return;
  }

  // Convert height from cm to meters
  const heightInMeters = height / 100;

  // Calculate BMI
  const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

  // Determine BMI category
  let category = "";

  if (bmi < 18.5) {
    category = "Underweight";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    category = "Normal weight";
  } else if (bmi >= 25 && bmi < 29.9) {
    category = "Overweight";
  } else {
    category = "Obese";
  }

  // Show result
  result.innerHTML = `<p>Your BMI is <strong>${bmi}</strong> (${category})</p>`;
});
