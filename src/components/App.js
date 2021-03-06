import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import Calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const { ...obj } = this.state;
    const { total, next, operation } = obj;
    const result = Calculate({ total, next, operation }, buttonName);

    this.setState({
      total: result.total,
      next: result.next,
      operation: result.operation,
    });
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="calculator">
        <Display result={total} next={next} operation={operation} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
