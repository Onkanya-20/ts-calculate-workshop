import ICalculate from "./models/ICalculate";

class Operator implements ICalculate{

  num1 = 0;
  num2 = 0;

  plus(): number {
    return this.num1 + this.num2
  }
  minus(): number {
    return this.num1 - this.num2
  }
  multiple(): number {
    if (this.num1 === 0 || this.num2 === 0) {
      return 0
    }
    return this.num1 * this.num2
  }
  devide(): number {
    if (this.num2 === 0) {
      return 0
    }
    return this.num1 / this.num2
  }
}

export default Operator