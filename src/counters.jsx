import React, { Component } from 'react';
import Counter from './counterComp';

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 1 },
      { id: 2, value: 2 },
      { id: 3, value: 3 },
      { id: 4, value: 4 },
    ],
  };

  render() {
    return (
      <React.Fragment>
        <button onClick={this.handleReset} className="btn btn-sm btn-danger m-2">Reset</button>
        <br />
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
          />
          // <Counter key={counter.id} value={counter.value} id={counter.id} />
        ))}
      </React.Fragment>
    );
  }

  handleDelete = (counterID) => {
    // console.log('button clicked', counterID);
    let counters = this.state.counters.filter(
      (counter) => counter.id !== counterID
    );
    this.setState({ counters: counters });
    return counters;
  };

  handleIncrement = (counter) => {
    console.log('counter incremented', counter);
    let counters = [...this.state.counters]
    let index = counters.indexOf(counter)
    counters[index] = {...counter}
    counters[index].value++
    this.setState({counters:counters})
  };

  handleDecrement = (counter) => {
    let counters = [...this.state.counters]
    let index = counters.indexOf(counter)
    counters[index] = {...counter}
    if (counters[index].value === 0) return 'disabled'
    counters[index].value--
    this.setState({counters:counters})
  };

  handleReset = () => {
    console.log('counter reset');
    let counters = this.state.counters.map(counter => {
      counter.value = 0
      return counter
    })
    this.setState({counters: counters})

  };
}

export default Counters;
