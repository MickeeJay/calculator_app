const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');


buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value');
    const action = button.getAttribute('data-action');


    if (value) {
      appendValue(value);
    } else if (action) {
      handleAction(action);
    }
  });
});


function appendValue(value) {
  display.value += value;
}


function handleAction(action) {
  switch(action) {
    case 'clear':
      display.value = '';
      break;
    case 'delete':
      display.value = display.value.slice(0, -1);
      break;
    case 'calculate':
      calculate();
      break;
  }
}


function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = 'Error';
  }
}

