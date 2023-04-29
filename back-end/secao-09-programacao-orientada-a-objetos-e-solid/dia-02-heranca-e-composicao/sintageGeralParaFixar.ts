class Superclass {
  constructor(public isSuper: boolean = true) {}

  protect sayHello():void {
    console.log('Olá Mundo!');
  }
}

class Subclass extends Superclass {
  public sayHello2() {
    this.sayHello();
  }
};

const myFunc = (supersuper: Subclass) => {
  supersuper.sayHello();
}

// const superClass = new Superclass();
const subClass = new Subclass();

// myFunc(superClass);
// myFunc(subClass);
