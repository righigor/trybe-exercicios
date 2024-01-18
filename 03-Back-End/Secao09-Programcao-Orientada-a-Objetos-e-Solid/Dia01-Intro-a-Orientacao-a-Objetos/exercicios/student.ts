class Student {
  private _matricula: string;
  private _name: string;
  private _notasProvas: number[];
  private _notasTrabalhos: number[];

  constructor(m: string, n: string) {
    this._matricula = m;
    this._name = n;
    this._notasProvas = [];
    this._notasTrabalhos = [];
  }

  get matricula(): string {
    return this._matricula;
  }

  set matricula(value: string) {
    this._matricula = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get notasProvas(): number[] {
    return this._notasProvas;
  }

  set notasProvas(value: number[]) {
    if (value.length > 4) {
      throw new Error('Número máximo de notas: 4');
    }
    this._notasProvas = value;
  }

  get notasTrabalhos(): number[] {
    return this._notasTrabalhos;
  }

  set notasTrabalhos(value: number[]) {
    if (value.length > 2) {
      throw new Error('Número máximo de notas: 2');
    }
    this._notasTrabalhos = value;
  }

  somaNotas(): number {
    return [...this._notasProvas, ...this._notasTrabalhos]
      .reduce((prevNota, nota) => {
        const proxNota = nota + prevNota;
        return proxNota
      }, 0);
  }

  mediaNotas(): number {
    const soma = this.somaNotas();
    const numProvas = this._notasProvas.length + this.notasTrabalhos.length;

    return Math.round(soma / numProvas);
  }
}