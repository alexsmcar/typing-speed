import iniciarCronometro from "./cronometro.js";

export default function iniciar() {
    let active = true;
    const cronometro = document.getElementById("cronometro");

    function handleStart() {
        if (active && cronometro) {
            iniciarCronometro(cronometro);
            active = false 
        }

    }
    window.addEventListener("keydown", handleStart)
}