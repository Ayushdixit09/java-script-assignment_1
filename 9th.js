function daysUntilNextChristmas() {
    // Get today's date
    const today = new Date();

    // Get the current year
    const currentYear = today.getFullYear();

    // Christmas date for the current year
    const christmasDate = new Date(currentYear, 11, 25); // Month is 0-based (11 = December)

    // Check if Christmas has already passed this year
    if (today.getMonth() === 11 && today.getDate() > 25) {
        // If so, calculate for next year
        christmasDate.setFullYear(currentYear + 1);
    }

    // Calculate the difference in milliseconds
    const difference = christmasDate.getTime() - today.getTime();

    // Convert milliseconds to days
    const daysLeft = Math.ceil(difference / (1000 * 3600 * 24));

    return daysLeft;
}

// Call the function to get the days left until next Christmas
const daysLeft = daysUntilNextChristmas();
console.log("Days left until next Christmas: " + daysLeft);
