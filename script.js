let timeLeft = 0;
let clicks = 0;
let timerInterval;

function start() {
    clicks = 0; // Reiniciamos el contador de clics cada vez que se inicia el temporizador
    document.getElementById("clicks").innerText = `${clicks}`;
    timeLeft = 10; // Reiniciamos el tiempo a 10 segundos
    document.getElementById("timer").innerText = `${timeLeft}s`; // Mostrar tiempo reiniciado

    clearInterval(timerInterval); // Detenemos el intervalo anterior, si existe

    timerInterval = setInterval(function(){
        timeLeft--;
        document.getElementById("timer").innerText = `${timeLeft}s`;

        if (timeLeft === 0){
            clearInterval(timerInterval);
            calculateResult();
            document.getElementById("clickStart").disabled = true;
            document.getElementById("resultados").style.display = "flex";
        }
    }, 1000);
}

function handleClickStart() {
    if (timeLeft === 0) {
        start(); // Iniciar el temporizador
    }

    clicks++; // Incrementamos el contador de clics cada vez que se hace clic en el botón
    document.getElementById("clicks").innerText = `${clicks}`;
    document.getElementById("clickStart").innerText = `${clicks}`;
}
function restart(){
    clicks = 0; // Reiniciamos el contador de clics cada vez que se inicia el temporizador
    document.getElementById("clicks").innerText = `${clicks}`;
    document.getElementById("timer").innerText = "10s"; // Mostrar tiempo reiniciado
    document.getElementById("result").innerText = "0"
    document.getElementById("resultados").style.display = "none";
    document.getElementById("clickStart").innerText = "¡Haz click lo más rápido que puedas!"
    document.getElementById("clickStart").disabled = false;
}

document.getElementById("clickStart").addEventListener("click", handleClickStart);
document.getElementById("reset").addEventListener("click", restart);
function calculateResult() {
    const resultElement = document.getElementById('result');
    const resultElementCPS = document.getElementById('resultCPS');
    const resultElementClicks = document.getElementById('resultClicks');
    const clicksPerSecond = clicks / 10;
    resultElementCPS.textContent = clicksPerSecond.toFixed(2); // Muestra el resultado con 2 decimales
    resultElementClicks.textContent = clicks; // Muestra el total de clics en 10 segundos
    resultElement.textContent = clicksPerSecond.toFixed(2); // Muestra el resultado con 2 decimales
}