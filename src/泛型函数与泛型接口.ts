function log(value: string): string {
  console.log(value);
  return value;
}
// 使上函数实现打印字符串和数组字符串
// 1、使用函数重载
function log1(value: string): string;
function log1(value: string[]): string[];
function log1(value: any) {
  console.log(value);
  return value;
}
// 2、使用联合类型
function log2(value: string | string[]): string | string[] {
  console.log(value);
  return value;
}

// 泛型：不预先确定的数据类型，具体的类型在使用的时候才能确定。
// 泛型函数：
function log3<T>(value: T): T {
  console.log(value);
  return value;
}
// 泛型函数的调用方式1
log3<string[]>(["a", "b", "c"]);
// 调用方式2（使用TS的类型推断功能省略类型声明）
log3(["a", "b", "c"]);

// 使用类型别名来定义一个函数
type log4 = <T>(value:T) => T;
const myLog:log4 = log3 // 泛型函数的实现

// 的等价于类型别名的定义方式
interface Log {
    <T>(value:T):T //函数名称，参数类型，函数的返回值
}
// interface Log1<T>{
//     (value:T):T
// }
// let myLog1:Log1<string> = log3;

// 给参数类型设置默认值
interface Log1<T = string>{
    (value:T):T
}
const myLog1:Log = log3;
myLog1(1)

