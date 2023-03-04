import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      values: [],
    };
  }

  addCount = () => {
    // Create a new array based on current state:
    let temp = [...this.state.values];

    // Add item to it
    temp.push("Added");
    console.log(temp);
    console.log(this.state.values);
    // Set state

    this.setState({
      counter: this.state.counter + 1,
      values: temp,
    });
  };

  decreaseCount = () => {
    let temp = [...this.state.values];

    // Add item to it
    temp.push("Subtracted");
    console.log(temp);
    console.log(this.state.values);
    // Set state

    this.setState({
      counter: this.state.counter - 1,
      values: temp,
    });
  };

  render() {
    return (
      <div>
        <p>{this.props.content}</p>
        <h1 id="counter">{this.state.counter}</h1>
        <button onClick={this.addCount}>Add</button>
        <button onClick={this.decreaseCount}>Subtract</button>;
      </div>
    );
  }
}

export default Counter;
