export default function criarTexto() {
    const TEXT = "A tecnologia transforma o mundo diariamente. Dispositivos inteligentes conectam pessoas, automatizam tarefas e facilitam a comunicação global. A educação evolui com plataformas digitais, proporcionando acesso ao conhecimento em qualquer lugar. Empresas adotam soluções inovadoras para aumentar a produtividade e alcançar novos mercados. A inteligência artificial analisa dados com rapidez, impulsionando decisões mais eficazes. No entanto, desafios éticos surgem, exigindo responsabilidade no uso das ferramentas. A privacidade, a segurança e a inclusão digital devem ser prioridades. O equilíbrio entre inovação e humanidade será essencial para o futuro. Com consciência e propósito, é possível criar um mundo mais justo, conectado e sustentável.";
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
        if (idx1 < palavrasText.length - 1) {
            const novaLetra = document.createElement("p");
            novaLetra.classList.add("letraText");
            novaLetra.innerHTML = "&nbsp";
            novaPalavra.appendChild(novaLetra);
        }
    });
}
//# sourceMappingURL=criarTexto.js.map