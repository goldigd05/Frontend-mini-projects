function checkStrength() {
      const pwd = document.getElementById("password").value;
      const strength = document.getElementById("strength");
      let score = 0;
      if (pwd.length >= 8) score++;
      if (/[A-Z]/.test(pwd)) score++;
      if (/[0-9]/.test(pwd)) score++;
      if (/[^A-Za-z0-9]/.test(pwd)) score++;

      switch (score) {
        case 0:
        case 1:
          strength.textContent = "Weak";
          strength.style.color = "red";
          break;
        case 2:
          strength.textContent = "Moderate";
          strength.style.color = "orange";
          break;
        case 3:
        case 4:
          strength.textContent = "Strong";
          strength.style.color = "green";
          break;
      }
    }
