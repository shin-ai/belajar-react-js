import React, { Component } from "react";

export class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    console.log("construcor")
  }

  componentDidMount() {
    this.setState({count: 1})
    console.log("DidMount")
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.state.count === 10) {
        this.setState({count: 0})
    }
    console.log("DidUpdate")
  }

  render() {
    return (
      <div className="flex items-center">
        <h1 className="mr-5">{this.state.count}</h1>
        <button
          className="bg-black text-white p-3"
          onClick={() => this.setState({ count: this.state.count + 1 })}
        >
          +
        </button>
        {console.log("render")}
      </div>
    );
  }
}

export default Counter;
