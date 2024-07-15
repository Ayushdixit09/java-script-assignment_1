function getCurrentDate() {
    const today = new Date();
    
    // Get day, month, and year from the Date object
    let dd = today.getDate();
    let mm = today.getMonth() + 1; // January is 0, so we add 1
    let yyyy = today.getFullYear();
    
    // Pad single digit day or month with leading zero if necessary
    if (dd < 10) {
        dd = '0' + dd;
    } 
    if (mm < 10) {
        mm = '0' + mm;
    } 
    
    // Create various date format strings
    const dateFormat1 = mm + '-' + dd + '-' + yyyy;
    const dateFormat2 = mm + '/' + dd + '/' + yyyy;
    const dateFormat3 = dd + '-' + mm + '-' + yyyy;
    const dateFormat4 = dd + '/' + mm + '/' + yyyy;
    
    // Print or return the formatted date strings
    console.log("mm-dd-yyyy format: " + dateFormat1);
    console.log("mm/dd/yyyy format: " + dateFormat2);
    console.log("dd-mm-yyyy format: " + dateFormat3);
    console.log("dd/mm/yyyy format: " + dateFormat4);
}

// Call the function to get and display the current date in various formats
getCurrentDate();
