function calculateBMI() {
  var weight = document.getElementById('weight').value;
  var height = document.getElementById('height').value;

  if (weight === '' || height === '') {
    alert('Please enter your weight and height.');
    return;
  }

  var bmi = weight / ((height / 100) * (height / 100));
  var resultContainer = document.getElementById('result-container');
  resultContainer.innerHTML = '';

  var result = document.createElement('p');
  result.textContent = 'Your BMI is ' + bmi.toFixed(2);

  if (bmi < 18.5) {
    result.style.color = 'red';
    result.textContent += ' (Underweight)';
    var suggestion = document.createElement('p');
    suggestion.textContent = 'You are underweight. Try to gain weight by consuming more calories and engaging in strength training exercises.';
    resultContainer.appendChild(suggestion);
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    result.style.color = 'green';
    result.textContent += ' (Normal Weight)';
    var suggestion = document.createElement('p');
    suggestion.textContent = 'Congratulations! You are in the healthy weight range. Maintain a balanced diet and engage in regular physical activity to stay healthy.';
    resultContainer.appendChild(suggestion);
  } else {
    result.style.color = 'red';
    result.textContent += ' (Overweight)';
    var suggestion = document.createElement('p');
    suggestion.textContent = 'You are overweight. Focus on a balanced diet with reduced calorie intake and increase your physical activity level to lose weight.';
    resultContainer.appendChild(suggestion);
  }

  resultContainer.appendChild(result);
}

var calculateBtn = document.querySelector('.calculate-btn');
calculateBtn.addEventListener('click', calculateBMI);
