function findFirstJanuarySunday() {
    // Loop through years from 2014 to 2050
    for (let year = 2014; year <= 2050; year++) {
        // Create a Date object for January 1st of the current year
        let date = new Date(year, 0, 1); // Note: Month is 0-based (0 = January)

        // Check if January 1st is a Sunday (getDay() returns 0 for Sunday)
        if (date.getDay() === 0) {
            console.log("1st January " + year + " is a Sunday.");
        }
    }
}

// Call the function to find and print the years
findFirstJanuarySunday();
