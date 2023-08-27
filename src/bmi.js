function calculateBMI() {
  const weightInput = document.getElementById("weight");
  const heightInput = document.getElementById("height");
  const resultElement = document.getElementById("bmiResult");
  const descriptionElement = document.getElementById("description");

  const weight = weightInput.value;
  const height = heightInput.value;

  if (weight === "" || height === "") {
    resultElement.innerHTML = "No Result";
    descriptionElement.innerHTML = "";
    return; // Exit the function
  }

  const result = weight / (height * 0.01 * (height * 0.01));
  if (result < 18.5) {
    descriptionElement.innerHTML = "You are Underweight";
  } else if (result >= 18.5 && result <= 24.9) {
    descriptionElement.innerHTML = "You are Normal Weight";
  } else if (result >= 25.0 && result <= 29.9) {
    descriptionElement.innerHTML = "You are Overweight";
  } else {
    descriptionElement.innerHTML = "You are Obese";
  }

  resultElement.innerHTML = `With your weight of ${weight} kg and height of ${height} cm.
        Your BMI is ${result}`;
  weightInput.value = "";
  heightInput.value = "";
}
