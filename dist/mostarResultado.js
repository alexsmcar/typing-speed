export default function mostrarResultado(teste) {
    const container = document.getElementById("textContainer");
    const resultados = realizarContagem();
    const wpm = (resultados.acertos + resultados.erros) / 5;
    console.log("acertos: ", teste.acertos, "erros: ", teste.erros);
    console.log("acertos: ", resultados.acertos, "erros: ", resultados.erros);
    console.log(wpm);
}
function realizarContagem() {
    const resultado = {
        acertos: 0,
        erros: 0,
    };
    const palavras = document.querySelectorAll(".palavra");
    palavras?.forEach((palavra) => {
        const letras = palavra.querySelectorAll(".letraText");
        letras?.forEach((letra) => {
            if (letra.classList.contains("wrongLetra")) {
                resultado.erros++;
            }
            else if (letra.classList.contains("rightLetra")) {
                resultado.acertos++;
            }
        });
    });
    return resultado;
}
//# sourceMappingURL=mostarResultado.js.map