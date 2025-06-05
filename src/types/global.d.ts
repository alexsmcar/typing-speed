export {};

declare global {
  interface Resultado {
    acertos: number;
    erros: number;
  }

  interface ElementIndex {
    palavra: number;
    letra: number;
  }
}

