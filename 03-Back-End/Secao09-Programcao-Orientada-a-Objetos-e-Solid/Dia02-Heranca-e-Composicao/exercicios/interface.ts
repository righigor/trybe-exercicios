interface Person {
  name: string;
  info: string;
}

class Student implements Person {
  constructor(
    public name: string,
    public school: string) { }

  get info(){
    return `${this.name} estuda na escola ${this.school}`;
  }
}

class Professor implements Person {
  constructor(
    public name: string,
    public school: string,
    public subject: string) {}
  
  get info() {
    return `${this.name} leciona ${this.subject} na escola ${this.school}`
  }
}

function printInfo(person: Person) {
  console.log(person.info);
}

const student = new Student('joao', 'trybe');
const prof = new Professor('maria', 'trybe', 'matematica');

printInfo(student);
printInfo(prof);