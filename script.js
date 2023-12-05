const display = document.getElementById('result');
 
    function appendToDisplay(value) {
      display.value += value;
    }
 
    function clearDisplay() {
      display.value = '';
    }
 
    function calculateResult() {
      try {
        display.value = eval(display.value);
      } catch (error) {
        display.value = 'Error';
      }
    }
 
    document.addEventListener('keydown', function(event) {
      const key = event.key;
 
      if (/[0-9+\-*/.=]/.test(key)) {
        appendToDisplay(key);
      } else if (key === 'Escape') {
        clearDisplay();
      } else if (key === 'Enter' || key === '=') {
        calculateResult();
      }
    });
