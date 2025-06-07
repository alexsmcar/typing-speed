export default function mostrarResultado({ acertos, erros, totalTeclasPressionadas, }) {
    const wpm = acertos / 5;
    const precisao = ((acertos / totalTeclasPressionadas) * 100).toFixed(2);
    console.log("acertos: ", acertos, "erros: ", erros);
    console.log("total teclas: ", totalTeclasPressionadas);
    console.log("precisao: ", precisao);
    console.log("wpm: ", wpm);
    // console.log(wpm)
}
// function realizarContagem() {
//   const resultado: Resultado = {
//     acertos: 0,
//     erros: 0,
//   };
//   const palavras = document.querySelectorAll(".palavra");
//   palavras?.forEach((palavra) => {
//     const letras = palavra.querySelectorAll(".letraText");
//     letras?.forEach((letra) => {
//       if (letra.classList.contains("wrongLetra")) {
//         resultado.erros++;
//       } else if (letra.classList.contains("rightLetra")) {
//         resultado.acertos++;
//       }
//     });
//   });
//   return resultado
// }
//# sourceMappingURL=mostarResultado.js.map