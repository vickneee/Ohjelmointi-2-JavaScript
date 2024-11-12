let weight = prompt('Enter weight (kg).');
while (weight <= 0) {
  weight = prompt('The weight must be positive. Re-enter the weight (kg).');
}
console.log('You entered the weight: ' + weight + ' kg.');
