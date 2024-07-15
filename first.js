function displayDateTime() {
    // Array of weekday names
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    // Get current date and time
    const now = new Date();

    // Get day of the week (0-6) and map it to weekday name
    const dayOfWeek = weekdays[now.getDay()];

    // Get hours (0-23)
    let hours = now.getHours();

    // Convert hours to AM/PM format and adjust if necessary
    const amPm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'

    // Get minutes and seconds with leading zeros
    const minutes = ('0' + now.getMinutes()).slice(-2);
    const seconds = ('0' + now.getSeconds()).slice(-2);

    // Construct the time string
    const timeString = hours + ' ' + amPm + ' : ' + minutes + ' : ' + seconds;

    // Display the output
    console.log("Today is : " + dayOfWeek + ".");
    console.log("Current time is : " + timeString);
}

// Call the function to display current day and time
displayDateTime();
