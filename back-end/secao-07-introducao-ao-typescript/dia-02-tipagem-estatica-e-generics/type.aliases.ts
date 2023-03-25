type Bird = {
  specie: string,
  nickname: string,
  age: number,
  family: string[],
}

type SomaFunc = (valor1: number, valor2:number) => number;

type Address = {
  addressLine1: string,
  addressLine2: string,
  zipCode: string,
}


const soma: SomaFunc = (a, b) => a + b;

class Person {
  name: string;
  birthDate: Date;
  age: number;

  constructor(name: string, birthDate: Date, age: number;){
    this.name = name;
    this.birthDate = birthDate;
    this.age = age;
  }

  speak(): void {
    console.log(`${this.name} esta falando.`);
  }

  eat(): void {
    console.log(`${this.name} está comendo.`);
  }

  walk(): void {
    console.log(`${this.name} esta andando.`)
  }
}

const person1 = new Person("Jane Doe", new Date("1986-01-01"), 27);
const person2 = new Person("Jon Doe", new Date("1980-08-05"), 42);

console.log(person1);
person1.speak();

// saída:
// Person: {
//   "name": "Jane Doe",
//   "birthDate": "1986-01-01T00:00:00.000Z",
//   "age": 27
// }
// "Jane Doe está falando."

console.log(person2);
person2.walk();

// saída:
// Person: {
//   "name": "Jon Doe",
//   "birthDate": "1980-08-05T00:00:00.000Z",
//   "age": 42
// }
// "Jon Doe está andando."
