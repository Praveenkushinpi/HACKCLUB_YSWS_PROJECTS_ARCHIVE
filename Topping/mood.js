 const quotes = {
      happy: [
        "Smile big, code bigger!",
        "Happiness is a warm console log.",
        "Every line of code is a step toward joy!"
      ],
      sad: [
        "Even bugs cry sometimes...",
        "It's okay to pause. Even code needs a break.",
        "Gray days still compile."  
      ],
      angry: [
        "Smash bugs, not keyboards.",
        "Let your anger fuel your refactor.",
        "This bug won't survive the fury."
      ],
      cool: [
        "Code smooth, debug smoother.",
        "You're too cool for syntax errors.",
        "Keep chillin' and pushin' commits."
      ],
      brainy: [
        "Thinking in recursive dreams.",
        "Brains before branches.",
        "This is what 1000 IQ looks like."
      ]
    };

    function setMood(mood) {
      const body = document.body;
      const title = document.getElementById('moodTitle');
      const desc = document.getElementById('moodDescription');
      const quoteBox = document.getElementById('quotes');
      const rotating = document.getElementById('rotatingIcon');

      quoteBox.innerHTML = quotes[mood].map(q => `<div class='quote'>"${q}"</div>`).join('');

      rotating.innerHTML = '';
      rotating.classList.remove('rotating');

      switch(mood) {
        case 'happy':
          document.documentElement.style.setProperty('--bg-color', 'linear-gradient(to right, #fceabb, #f8b500)');
          document.documentElement.style.setProperty('--text-color', '#222');
          title.textContent = "You're feeling Happy!";
          desc.textContent = "Bounce into your day with sunshine and sparkles.";
          rotating.innerHTML = '😃';
          rotating.classList.add('rotating');
          break;
        case 'sad':
          document.documentElement.style.setProperty('--bg-color', 'linear-gradient(to right, #bdc3c7, #2c3e50)');
          document.documentElement.style.setProperty('--text-color', '#f5f5f5');
          title.textContent = "Feeling Blue...";
          desc.textContent = "It’s okay to slow down and let it rain.";
          rotating.innerHTML = '💧';
            rotating.classList.add('rotating');
          break;
        case 'angry':
          document.documentElement.style.setProperty('--bg-color', 'linear-gradient(to right, #ff512f, #dd2476)');
          document.documentElement.style.setProperty('--text-color', '#fff');
          title.textContent = "Anger Mode!";
          desc.textContent = "Unleash the fire, but don’t burn out.";
          rotating.innerHTML = '❤️‍🔥';
          rotating.classList.add('rotating');
          break;
        case 'cool':
          document.documentElement.style.setProperty('--bg-color', 'linear-gradient(to right, #2193b0, #6dd5ed)');
          document.documentElement.style.setProperty('--text-color', '#fff');
          title.textContent = "Too Cool 😎";
          desc.textContent = "You're riding the breeze of chill vibes.";
          rotating.innerHTML = '☀️';
            rotating.classList.add('rotating');
          break;
        case 'brainy':
          document.documentElement.style.setProperty('--bg-color', 'linear-gradient(to right, #8e2de2, #4a00e0)');
          document.documentElement.style.setProperty('--text-color', '#fff');
          title.textContent = "Brain Boost 🧠";
          desc.textContent = "Genius mode activated. Let’s build something!";
          rotating.innerHTML = '🥸';
          rotating.classList.add('rotating');
          break;
      }
    function setMoodImage(mood) {
    // Hide all images first
    document.querySelectorAll('.responsive').forEach(img => img.style.display = 'none');

    // Show image corresponding to the mood
    switch(mood) {
      case 'happy':
        document.getElementById('moodImage1').style.display = 'block';
        break;
      case 'sad':
        document.getElementById('moodImage2').style.display = 'block';
        break;
      case 'angry':
        document.getElementById('moodImage3').style.display = 'block';
        break;
      default:
        // Default case if no mood is selected
        document.getElementById('moodImage1').style.display = 'block';
        break;
    }
  }    
    }
