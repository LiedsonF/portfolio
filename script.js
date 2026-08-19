const messages = [
    "initializing portfolio...",
    "loading projects...",
    "loading skills...",
    "compiling experience...",
    "optimizing interface...",
    "establishing connection..."
];

const terminal = document.getElementById("terminal-text");
const progressBar = document.getElementById("progress-fill");
const progressText = document.getElementById("progress-text");

const loader = document.getElementById("loader");
const mainContent = document.getElementById("main-content");

let progress = 0;
let messageIndex = 0;

function addMessage() {

    if (messageIndex >= messages.length) {
        return;
    }

    const line = document.createElement("div");

    line.textContent = `> ${messages[messageIndex]}`;

    terminal.appendChild(line);

    messageIndex++;
}


const interval = setInterval(() => {

    progress += Math.floor(Math.random() * 7) + 4;

    if (progress >= 100) {
        progress = 100;
    }

    progressBar.style.width = `${progress}%`;

    progressText.textContent = `${progress}%`;


    if (progress >= 10 && messageIndex === 0) {
        addMessage();
    }

    if (progress >= 25 && messageIndex === 1) {
        addMessage();
    }

    if (progress >= 45 && messageIndex === 2) {
        addMessage();
    }

    if (progress >= 65 && messageIndex === 3) {
        addMessage();
    }

    if (progress >= 82 && messageIndex === 4) {
        addMessage();
    }

    if (progress >= 95 && messageIndex === 5) {
        addMessage();
    }


    if (progress === 100) {

        clearInterval(interval);

        setTimeout(() => {

            const ready = document.createElement("div");

            ready.textContent = "> portfolio ready.";

            ready.style.marginTop = "10px";

            terminal.appendChild(ready);

        }, 200);


        setTimeout(() => {

            loader.classList.add("hide");

            mainContent.classList.remove("hidden");

            requestAnimationFrame(() => {

                mainContent.classList.add("show");

            });

        }, 1000);

    }

}, 280);