import iniciarCronometro from "./cronometro.js";
export default function medirVelocidade() {
    let palavraIdx = 0;
    let letraIdx = 0;
    const classeAtual = "currentLetra";
    const classeAcerto = "rightLetra";
    const classeErro = "wrongLetra";
    const palavras = document.querySelectorAll(".palavra");
    const cronometro = document.getElementById("cronometro");
    function voltarLetra(el) {
        el.classList.remove(classeAcerto, classeErro);
        el.classList.add(classeAtual);
    }
    function verificarLetra(elemento, remover, adicionar) {
        elemento.classList.remove(remover);
        elemento.classList.add(adicionar);
    }
    function handleBackspace(tecla, letra) {
        if (tecla === "Backspace") {
            if (!(palavraIdx === 0 && letraIdx === 0)) {
                letra.classList.remove(classeAtual);
                if (letra.previousElementSibling) {
                    voltarLetra(letra.previousElementSibling);
                    letraIdx--;
                }
                else {
                    const previusWord = palavras[palavraIdx - 1].querySelectorAll(".letraText");
                    if (previusWord.length) {
                        const previusLetra = previusWord[previusWord.length - 1];
                        voltarLetra(previusLetra);
                        palavraIdx--;
                        letraIdx = previusWord.length - 1;
                    }
                }
            }
            return true;
        }
        else
            return false;
    }
    function handleTyping(event) {
        const listaLetras = palavras[palavraIdx].querySelectorAll(".letraText");
        const letraAtual = listaLetras[letraIdx];
        if (event.key === "Dead")
            return;
        if (handleBackspace(event.code, letraAtual))
            return;
        if (!(event.code === "ShiftLeft" || event.code === "ShiftRight")) {
            letraAtual.classList.remove(classeAtual);
            if (letraAtual.innerHTML === event.key ||
                (event.code === "Space" && letraAtual.innerHTML === "&nbsp;")) {
                verificarLetra(letraAtual, classeErro, classeAcerto);
            }
            else {
                verificarLetra(letraAtual, classeAcerto, classeErro);
            }
            if (letraAtual.nextElementSibling) {
                letraAtual.nextElementSibling.classList.add(classeAtual);
            }
            else {
                if (palavraIdx + 1 <= palavras.length - 1) {
                    palavras[palavraIdx + 1]
                        .querySelector(".letraText")
                        ?.classList.add(classeAtual);
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
    window.addEventListener("keydown", handleTyping);
    window.addEventListener("keydown", () => {
        if (cronometro) {
            iniciarCronometro(cronometro);
        }
    }, { once: true });
}
//# sourceMappingURL=medirVelocidade.js.map