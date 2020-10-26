import Operator from "./operator";

enum Step {
  Operator = 1,
  Num1,
  Num2
}

class Calculate extends Operator {
  chosen: number = 0;

  constructor() {
    super()
  }

  chooseOperation(): void {
    console.log('********************************')
    console.log('The result is ⬇ ')
    switch (this.chosen) {
      case 1:
        console.log(super.plus())
        break
      case 2:
        console.log(super.minus())
        break
      case 3:
        console.log(super.multiple())
        break
      case 4:
        console.log(super.devide())
        break
      default:
        process.exit()
      }
  }
}
class Main {
    stdin = process.openStdin();

    constructor() {
      this.inputListener();
    }
  
    private inputListener(): void {
      this.printMenuOperator();
      let step = Step.Operator
      let calculate = new Calculate()
      try {
        this.stdin.addListener("data",  (input) => {
          const data = Number(input.toString().trim())
          if (isNaN(data)) {
            console.log("Please inoput number format.");
            process.exit()
          } else {
            switch (step) {
              case Step.Operator:
                console.log("Enter Number 1 ⬇ ")
                calculate.chosen = data
                step = Step.Num1
                break
              case Step.Num1:
                console.log("Enter Number 2 ⬇ ")
                calculate.num1 = data
                step = Step.Num2
                break
              case Step.Num2:
                calculate.num2 = data
                calculate.chooseOperation()
                this.printMenuOperator();
                step = Step.Operator
                break
            }
          }
        });
      } catch (err) {
        console.log(err);
      }
    }
  
    private printMenuOperator(): void {
      console.log("********************************");
      console.log("***Please select operator**");
      console.log("**Number 1 is Plus**");
      console.log("**Number 2 is Minus**");
      console.log("**Number 3 is Multiply**");
      console.log("**Number 4 is Devide**");
      console.log("********************************");
    }
  }
  
  function main(): void {
    new Main();
  }
  
  main();
  