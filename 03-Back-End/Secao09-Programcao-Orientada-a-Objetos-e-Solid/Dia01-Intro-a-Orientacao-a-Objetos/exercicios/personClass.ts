class Person {
  // ATRIBUTOS
  name: string;
  readonly height: number;
  private _weight: number;
  private _age: number;


  //METODOS
  //METODO CONSTRUTOS
  constructor(n: string, h: number, a: number, w: number) {
    console.log(`creating person ${n}`);
    this.name = n;
    this.height = h;
    this._age = a;
    this._weight = w;
  }

  //METODO DE AÇÃO
  sleep() {
    console.log(`${this.name} is spleeping, zZZzzzZZ`);
  }

  getWeight() {
    return this._weight;
  }

  getAge() {
    return this._age;
  }

  set age(value: number) {
    if (value >= 0 && value <= 200) {
      this._age = value;
    }
  }

  birthday() {
    this._age += 1;
  }
}

const p1 = new Person('maria', 160, 58, 70);
const p2 = new Person('joao', 170, 60, 70);

console.log(p1.name, p1.height);
console.log(p2.name, p2.height);

p1.sleep();
p2.sleep();