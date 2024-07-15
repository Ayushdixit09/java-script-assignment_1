function calculateOperations() {
    // Prompt user for two numbers
    let number1 = parseFloat(prompt("Enter the first number:"));
    let number2 = parseFloat(prompt("Enter the second number:"));

    // Check if valid numbers were entered
    if (isNaN(number1) || isNaN(number2)) {
        console.log("Invalid input. Please enter valid numbers.");
        return;
    }

    // Calculate multiplication and division
    let multiplication = number1 * number2;
    let division = number1 / number2;

    // Display the results
    console.log(`Multiplication of ${number1} and ${number2} is: ${multiplication}`);
    console.log(`Division of ${number1} by ${number2} is: ${division}`);
}

// Call the function to calculate and display operations
calculateOperations();
