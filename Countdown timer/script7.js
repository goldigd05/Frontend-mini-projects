 let interval;
    function startTimer() {
      clearInterval(interval);
      let time = parseInt(document.getElementById("seconds").value);
      const display = document.getElementById("timer");
      interval = setInterval(() => {
        if (time <= 0) {
          clearInterval(interval);
          display.textContent = "Time's up!";
        } else {
          display.textContent = `${time} second(s)`;
          time--;
        }
      }, 1000);
    }
