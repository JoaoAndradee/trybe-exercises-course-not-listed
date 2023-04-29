// certo
interface Logger {
  log(myString: string): void;
}

// certo
class ConsoleLogger implements Logger {
  log(myString: string) {
    console.log(myString);
  }
}

// certo
class ConsoleLogger2 implements Logger {
  log(myString: string) {
    console.log(`minha string2: ${myString}`);
  }
}

// certo
interface Database {
  myLogger: Logger;

  save(key: string, value: string): void;
}

// certo
class ExampleDatabase implements Database {
  constructor(public myLogger: Logger) {
    this.myLogger = new ConsoleLogger();
  }

  save(key: string, value: string): void {
    this.myLogger.log(`${key}, ${value}`);
  }
}

// certo
const myObj = new ConsoleLogger();
const myObj2 = new ConsoleLogger2();

// do gabarito
const database1 = new ExampleDatabase(myObj);
const database2 = new ExampleDatabase(myObj2);
const database3 = new ExampleDatabase();

// do gabarito
database1.save('chave 1', 'valor 1');
database2.save('chave 2', 'valor 2');
database3.save('chave 3', 'valor 3');
