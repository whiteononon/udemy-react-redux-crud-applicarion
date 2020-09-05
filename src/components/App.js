import React, { Component } from "react";

const App = () => <Counter></Counter>;

class Counter extends Component {
  constructor(props) {
    // インスタンス生成時に実行
    super(props);
    console.log(this.state);
    this.state = { count: 10 };
  }
  handlePlusButton = () => {
    this.setState({ count: this.state.count + 1 });
    // setstateでrenderが実行される
  };
  handleMinusButton = () => {
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    console.log(this.state);
    return (
      <>
        <div>{this.state.count}</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
      </>
    );
  }
}

export default App;
