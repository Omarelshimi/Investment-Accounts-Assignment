// Library of Random Functions

// Return a random deciaml between low (inclusive) and high (exclusive)
function randomDec(low, high) {
    return Math.random() * (high - low) + low;
}

// Return a random integer between low (inclusive) and high (exclusive)
function randInt(low, high) {
    return Math.floor(Math.random() * (high - low) + low)
}

function randomRGB() {
    let r = randInt(0, 256);
    let g = randInt(0, 256);
    let b = randInt(0, 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}