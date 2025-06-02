export default function mostrarResultado(): void {
    const container = document.getElementById("textContainer");
    const resultado: Resultado = {
        acertos: 0,
        erros: 0
    }
    const palavras = document.querySelectorAll(".palavra");
    palavras?.forEach((palavra) => {
        const letras = palavra.querySelectorAll(".letraText");
        letras?.forEach((letra) => {
            if (letra.classList.contains("wrongLetra")) {
                resultado.erros++
            } else if (letra.classList.contains("rightLetra")) {
                resultado.acertos++
            }
        })
    })

    if (container) {
        container.innerHTML = ""
    }

    console.log(resultado)
    

    
} 