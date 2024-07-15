// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    // Apply the conversion formula
    let fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
}

// Function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
    // Apply the conversion formula
    let celsius = (fahrenheit - 32) * 5 / 9;
    return celsius;
}

// Example usage:
let celsiusTemperature = 25;
let fahrenheitTemperature = 77;

// Convert Celsius to Fahrenheit
let convertedToFahrenheit = celsiusToFahrenheit(celsiusTemperature);
console.log(`${celsiusTemperature}°C is equal to ${convertedToFahrenheit}°F`);

// Convert Fahrenheit to Celsius
let convertedToCelsius = fahrenheitToCelsius(fahrenheitTemperature);
console.log(`${fahrenheitTemperature}°F is equal to ${convertedToCelsius}°C`);
