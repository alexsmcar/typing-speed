export default function iniciarCronometro(element: HTMLElement) {
  const tempo = Number(element.innerText.replace(":", "")) * 600;
  let tempoAtual = tempo;

  const relogio = setInterval(() => {
    if (tempoAtual === 1000) {
        clearInterval(relogio);
    }
    tempoAtual -= 1000;
    element.innerText = msToMinutos(tempoAtual);
  }, 1000);
}

function msToMinutos(ms: number): string {
  const minutos = Math.floor(ms / 60000);
  const segundos = Math.floor((ms % 60000) / 1000);
  return `${minutos}:${segundos.toString().padStart(2, '0')}`;

}
