function working(value) {
    const disp = document.getElementById("display");
    disp.value += value;
    console.log(disp.value);
}

function clearDisplay() { // Renamed to avoid conflict with the built-in clear() function
    const disp = document.getElementById("display");
    disp.value = ""; 
}

function calculateResult() {
    const disp = document.getElementById("display"); // Removed the extra backslash
    try {
        disp.value = eval(disp.value);
        console.log(disp.value);
    } catch (error) {
        disp.value = "error"; // Changed to use 'disp' instead of 'display'
    }
}