import React from "react";

class CounterClass extends React.Component {
  state = {
    count: 0,
  };

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Like
        </button>
      </div>
    );
  }
}

export default CounterClass;
