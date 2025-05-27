export default function medirVelocidade() {
    let palavraIdx = 0;
    let letraIdx = 0;
    const palavras = document.querySelectorAll(".palavra");
    function handleTyping(event) {
        const listaLetras = palavras[palavraIdx].querySelectorAll(".letraText");
        const letraAtual = listaLetras[letraIdx];
        console.log(letraAtual);
        if (event.code === "Backspace") {
            letraAtual.classList.remove("currentLetra");
            if (letraAtual.previousElementSibling) {
                letraAtual.previousElementSibling.classList.remove("rightLetra");
                letraAtual.previousElementSibling.classList.remove("wrongLetra");
                letraAtual.previousElementSibling.classList.add("currentLetra");
                letraIdx--;
            }
            else {
                const previusWord = palavras[palavraIdx - 1].querySelectorAll(".letraText");
                if (previusWord.length) {
                    const previusLetra = previusWord[previusWord.length - 1];
                    previusLetra.classList.remove("rightLetra");
                    previusLetra.classList.remove("wrongLetra");
                    previusLetra.classList.add("currentLetra");
                    palavraIdx--;
                    letraIdx = previusWord.length - 1;
                }
            }
        }
        else if (!(event.code === "ShiftLeft" || event.code === "ShiftRight")) {
            letraAtual.classList.remove("currentLetra");
            if (letraAtual.innerHTML === event.key) {
                letraAtual.classList.add("rightLetra");
                letraAtual.classList.remove("wrongLetra");
            }
            else {
                letraAtual.classList.add("wrongLetra");
                letraAtual.classList.remove("rightLetra");
            }
            if (letraAtual.nextElementSibling) {
                letraAtual.nextElementSibling.classList.add("currentLetra");
            }
            else {
                if (palavraIdx + 1 <= palavras.length - 1) {
                    palavras[palavraIdx + 1]
                        .querySelector(".letraText")
                        ?.classList.add("currentLetra");
                }
            }
            if (letraIdx === listaLetras.length - 1) {
                palavraIdx++;
                letraIdx = 0;
            }
            else {
                letraIdx++;
            }
        }
    }
    if (palavraIdx <= palavras.length - 1) {
        window.addEventListener("keyup", handleTyping);
    }
    else {
        window.removeEventListener("keyup", handleTyping);
    }
}
//# sourceMappingURL=medirVelocidade.js.map