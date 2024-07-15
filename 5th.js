function rotateStringRight(str) {
    // Convert the string to an array of characters
    let chars = str.split('');

    // Perform rotation
    const lastChar = chars.pop(); // Remove the last character
    chars.unshift(lastChar); // Add the last character to the front

    // Join the array back into a string and return
    return chars.join('');
}

// Initial string
let originalString = 'w3resource';

// Number of rotations
const rotations = 5;

// Perform rotations and display each step
for (let i = 0; i < rotations; i++) {
    originalString = rotateStringRight(originalString);
    console.log(originalString);
}
