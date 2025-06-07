export {};

declare global {
  interface Resultado {
    acertos: number;
    erros: number;
    totalTeclasPressionadas: number;
  }

  interface ElementIndex {
    palavra: number;
    letra: number;
  }
}

