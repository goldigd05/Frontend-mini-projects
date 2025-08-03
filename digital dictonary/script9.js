async function searchWord() {
      const word = document.getElementById("word").value.trim();
      const output = document.getElementById("output");
      output.innerHTML = "Loading...";
      try {
        const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        const data = await res.json();
        if (data[0]) {
          const meaning = data[0].meanings[0].definitions[0].definition;
          output.innerHTML = `<strong>${word}</strong>: ${meaning}`;
        } else {
          output.innerHTML = "Word not found.";
        }
      } catch (err) {
        output.innerHTML = "Error fetching meaning.";
      }
    }
