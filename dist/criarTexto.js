export default function criarTexto() {
    const TEXT = "Nas primeiras horas da manhã, quando a névoa ainda repousa preguiçosamente sobre os vales e as folhas orvalhadas brilham como pequenos espelhos sob os primeiros raios de sol, as montanhas despertam em silêncio. Elas não têm pressa.";
    const palavrasText = TEXT.split(" ");
    const textoContainer = document.getElementById("textContainer");
    palavrasText.forEach((palavra, idx1) => {
        const novaPalavra = document.createElement("div");
        novaPalavra.classList.add("palavra");
        textoContainer?.appendChild(novaPalavra);
        palavra.split("").forEach((letra, idx2) => {
            const novaLetra = document.createElement("p");
            novaLetra.classList.add("letraText");
            novaLetra.innerText = letra;
            novaPalavra.appendChild(novaLetra);
            if (idx1 === 0 && idx2 === 0) {
                novaLetra.classList.add("currentLetra");
            }
        });
    });
}
//# sourceMappingURL=criarTexto.js.map