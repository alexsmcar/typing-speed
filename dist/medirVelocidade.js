export default function medirVelocidade() {
    let acertos = 0;
    let erros = 0;
    let palavraIdx = 0;
    let letraIdx = 0;
    let letraAnterior = "";
    const classeAtual = "currentLetra";
    const classeAcerto = "rightLetra";
    const classeErro = "wrongLetra";
    const palavras = document.querySelectorAll(".palavra");
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
        console.log(palavraIdx, letraIdx);
        const listaLetras = palavras[palavraIdx].querySelectorAll(".letraText");
        const letraAtual = listaLetras[letraIdx];
        letraAnterior = event.key;
        console.log(letraAnterior, event.key);
        if (event.key === "Dead")
            return;
        if (handleBackspace(event.code, letraAtual))
            return;
        if (!(event.code === "ShiftLeft" || event.code === "ShiftRight")) {
            letraAtual.classList.remove(classeAtual);
            if (letraAtual.innerHTML === event.key) {
                verificarLetra(letraAtual, classeErro, classeAcerto);
                acertos++;
            }
            else {
                verificarLetra(letraAtual, classeAcerto, classeErro);
                erros++;
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
            if (letraIdx === listaLetras.length - 1 &&
                palavraIdx < palavras.length - 1) {
                palavraIdx++;
                letraIdx = 0;
            }
            else {
                letraIdx++;
            }
        }
    }
    window.addEventListener("keydown", handleTyping);
}
//# sourceMappingURL=medirVelocidade.js.map