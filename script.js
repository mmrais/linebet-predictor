function predictCrash() {
    let prediction = (Math.random() * 5 + 1).toFixed(2); // Simulated AI prediction
    document.getElementById("result").innerHTML = `🚀 Crash will likely happen at: <b>${prediction}x</b>`;
}

function predictThimbles() {
    let position = Math.floor(Math.random() * 3) + 1; // Simulated AI guess
    document.getElementById("result").innerHTML = `🎲 The ball is likely in thimble: <b>${position}</b>`;
}

function predictSwamp() {
    let safePath = Math.floor(Math.random() * 5) + 1; // Simulated AI choice
    document.getElementById("result").innerHTML = `🐊 Safe path to take: <b>Path ${safePath}</b>`;
}
