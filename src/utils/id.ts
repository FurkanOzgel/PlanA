function generateRandomId() {
    const timestamp = Date.now(); // Get the current timestamp
    const randomNum = Math.floor(Math.random() * 1000000); // Generate a random number
    return Number(timestamp.toString() + randomNum.toString()); // Combine them to create a unique numeric ID
}

export { generateRandomId };