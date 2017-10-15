const t = Object.assign({"a":0},{"b":1},{"c":2});

console.log(t);

class Animal{
  constructor(name){
    this.name = name;
  }

  greet(){
    console.log(`hello, my name is ${this.name}`);
  }
}

var dog = new Animal("joyjoe");
dog.greet();
