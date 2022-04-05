import React, { Component } from 'react';

class Counter extends Component {
  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        <span className={this.handleBadge()}>{this.formatCount()}</span>
        <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-sm m-2">
          Increment
        </button>
        <button onClick={() => this.props.onDecrement(this.props.counter)} className="btn btn-sm m-2">
          Decrement
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-sm btn-danger m-2"
        >
          Delete
        </button>
        <br />
      </React.Fragment>
    );
  }

  formatCount = () => {
    return this.props.counter.value === 0 ? 'Zero' : this.props.counter.value;
  };

  handleBadge = () => {
    return this.props.counter.value === 0
      ? 'badge badge-warning'
      : 'badge badge-primary';
  };

  handleIncrement = () => {
    return this.setState({ value: this.props.counter.value + 1 });
  };

  handleDecrement = () => {
    if (this.props.counter.value === 0) return 'disabled';
    return this.setState({ value: this.props.counter.value - 1 });
  };
}

export default Counter;
