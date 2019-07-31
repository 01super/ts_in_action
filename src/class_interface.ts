// 类实现接口的时候必须声明接口中所有的属性
// 接口只能约束类的公有成员
// 接口可以像类一样实现继承，且一个接口可以继承多个接口
interface Human {
  name: string;
  eat(): void;
  //   new (name: string): void; // 接口不能约束类的构造函数
}
class Asian implements Human {
  constructor(name: string) {
    this.name = name;
  }
  name: string;
  eat() {}
  sleep() {}
}
interface Man extends Human {
  run(): void;
}
interface Child {
  cry(): void;
}
interface Boy extends Man, Child {}
let boy: Boy = {
  name: "xxx",
  run() {},
  cry() {},
  eat() {}
};

class Auto {
  state = 1;
//   private age = 18;  // 类C不是Auto的子类，所以继承他的私有属性会报错
}
interface AutoInterface extends Auto{
}
class C implements AutoInterface{
    state = 1;
}
// 接口可以通过类实现
// 接口之间可以实现相互继承，以实现接口的复用，
// 类与类也可以相互继承，实现方法和属性的复用
// 接口可以通过类实现，但接口只能约束类的公有成员
// 接口可以抽离出类的成员，会包括公有，私有和受保护成员
