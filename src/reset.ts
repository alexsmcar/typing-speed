import criarTexto from "./criarTexto.js";
import medirVelocidade from "./medirVelocidade.js";

export default function reset() {
  const btn = document.getElementById("reset");
  btn?.addEventListener("click", () => {
    const cont = document.getElementById("textContainer");
    if (cont) {
      cont.innerHTML = "";
      criarTexto();
      medirVelocidade();
    }
  });
}
