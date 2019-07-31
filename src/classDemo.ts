abstract class Animal {
  // 抽象类
  eat() {
    console.log("eat");
  }
  abstract sleep(): void; // 抽象方法，不用具体实现，在继承中可以自己定义
}
// let animal = new Animal() // 不能创建抽象类的实例

class Dog extends Animal {
  constructor(name: string) {
    super();
    this.name = name;
  }
  name: string;
  run() {
    console.log("run");
  }
  sleep() {
    console.log("sleep");
  }
}
let dog = new Dog("阿黄");
console.log(dog.name);
dog.run();
dog.eat();

class Cat extends Animal {
  sleep() {
    console.log("cat sleep");
  }
}
let cat = new Cat();
let animals: Animal[] = [dog, cat];
animals.forEach(i => {
  i.sleep(); // 实现了多态
});

// 实现方法的链式调用
class WorkFlow {
  step1() {
    return this;
  }
  step2() {
    return this;
  }
}
new WorkFlow().step1().step2;
class MyFlow extends WorkFlow{
  next() {
    return this;
  }
}
new MyFlow().next().step1().next().step2();
