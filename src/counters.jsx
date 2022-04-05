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
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={this.handleDelete}
          />
          // <Counter key={counter.id} value={counter.value} id={counter.id} />
        ))}
      </React.Fragment>
    );
  }

  handleDelete = (counterID) => {
    // console.log('button clicked', counterID);
    let counters = this.state.counters.filter(
      counter => counter.id !== counterID
    );
    this.setState({ counters: counters });
    return counters;
  };
}

export default Counters;
