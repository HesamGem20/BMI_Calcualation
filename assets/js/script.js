
// Define a function to calculate Body Mass Index (BMI)
function calculateBMI() {
  // Get the user's weight from the input field with the id 'weight'
  var weight = document.getElementById('weight').value;
  // Get the user's height from the input field with the id 'height'
  var height = document.getElementById('height').value;

  // If either the weight or height input field is empty,
  // show an alert to the user and stop the function
  if (weight === '' || height === '') {
    alert('Please enter your weight and height.');
    return;
  }

  // Calculate the BMI by dividing the weight by the square of the height
  // (Note: the height is divided by 100 to convert from cm to m)
  var bmi = weight / ((height / 100) * (height / 100));
  // Get the result container from the HTML document
  var resultContainer = document.getElementById('result-container');
  // Clear any previous results in the result container
  resultContainer.innerHTML = '';

  // Create a new paragraph to display the calculated BMI
  var result = document.createElement('p');
  result.textContent = 'Your BMI is ' + bmi.toFixed(2);

  // Check the BMI category and provide relevant advice:
  if (bmi < 18.5) {  // Underweight
    result.style.color = 'red';
    result.textContent += ' (Underweight)';
    var suggestion = document.createElement('p');
    suggestion.textContent = 'You are underweight. Try to gain weight by consuming more calories and engaging in strength training exercises.';
    // Append the advice to the result container
    resultContainer.appendChild(suggestion);
  } else if (bmi >= 18.5 && bmi <= 24.9) {  // Normal Weight
    result.style.color = 'green';
    result.textContent += ' (Normal Weight)';
    var suggestion = document.createElement('p');
    suggestion.textContent = 'Congratulations! You are in the healthy weight range. Maintain a balanced diet and engage in regular physical activity to stay healthy.';
    resultContainer.appendChild(suggestion);
  } else {  // Overweight
    result.style.color = 'red';
    result.textContent += ' (Overweight)';
    var suggestion = document.createElement('p');
    suggestion.textContent = 'You are overweight. Focus on a balanced diet with reduced calorie intake and increase your physical activity level to lose weight.';
    resultContainer.appendChild(suggestion);
  }

  // Append the BMI result to the result container
  resultContainer.appendChild(result);
}

// Get the calculate button from the HTML document
var calculateBtn = document.querySelector('.calculate-btn');
// Add an event listener to the button that triggers the BMI calculation when clicked
calculateBtn.addEventListener('click', calculateBMI);

