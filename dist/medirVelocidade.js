import iniciarCronometro from "./cronometro.js";
const classeAtual = "currentLetra";
const classeAcerto = "rightLetra";
const classeErro = "wrongLetra";
const LetrasIgnorar = new Set([
    "Shift",
    "Control",
    "Alt",
    "AltGraph",
    "CapsLock",
    "Dead",
]);
let typingListener;
export function medirVelocidade() {
    const palavras = document.querySelectorAll(".palavra");
    const cronometro = document.getElementById("cronometro");
    const elementIndex = {
        palavra: 0,
        letra: 0,
    };
    const values = {
        acertos: 0,
        erros: 0,
    };
    typingListener = (event) => handleTyping(event, palavras, elementIndex, values);
    window.addEventListener("keydown", typingListener);
    window.addEventListener("keydown", () => {
        if (cronometro) {
            iniciarCronometro(cronometro, values);
        }
    }, { once: true });
}
export function removeTypingListener() {
    if (typingListener) {
        window.removeEventListener("keydown", typingListener);
    }
}
function handleBackspace(tecla, letra, indexes, listaPalavras) {
    if (tecla === "Backspace") {
        if (!(indexes.palavra === 0 && indexes.letra === 0)) {
            letra.classList.remove(classeAtual);
            if (letra.previousElementSibling) {
                voltarLetra(letra.previousElementSibling);
                indexes.letra--;
            }
            else {
                const previusWord = listaPalavras[indexes.palavra - 1].querySelectorAll(".letraText");
                if (previusWord.length) {
                    const previusLetra = previusWord[previusWord.length - 1];
                    voltarLetra(previusLetra);
                    indexes.palavra--;
                    indexes.letra = previusWord.length - 1;
                }
            }
        }
        return true;
    }
    return false;
}
function voltarLetra(el) {
    el.classList.remove(classeAcerto, classeErro);
    el.classList.add(classeAtual);
}
function verificarLetra(elemento, remover, adicionar) {
    elemento.classList.remove(remover);
    elemento.classList.add(adicionar);
}
function handleTyping(event, listaPalavras, index, teste) {
    const listaLetras = listaPalavras[index.palavra].querySelectorAll(".letraText");
    const letraAtual = listaLetras[index.letra];
    if (LetrasIgnorar.has(event.key))
        return;
    if (handleBackspace(event.code, letraAtual, index, listaPalavras))
        return;
    letraAtual.classList.remove(classeAtual);
    if (letraAtual.innerHTML === event.key ||
        (event.code === "Space" && letraAtual.innerHTML === "&nbsp;")) {
        verificarLetra(letraAtual, classeErro, classeAcerto);
        teste.acertos++;
    }
    else {
        verificarLetra(letraAtual, classeAcerto, classeErro);
        teste.erros++;
    }
    if (letraAtual.nextElementSibling) {
        letraAtual.nextElementSibling.classList.add(classeAtual);
    }
    else {
        if (index.palavra + 1 <= listaPalavras.length - 1) {
            listaPalavras[index.palavra + 1]
                .querySelector(".letraText")
                ?.classList.add(classeAtual);
        }
    }
    if (index.letra === listaLetras.length - 1) {
        index.palavra++;
        index.letra = 0;
    }
    else {
        index.letra++;
    }
}
//# sourceMappingURL=medirVelocidade.js.map