import React, { Component, Fragment } from 'react';


class App extends Component {
  state = {
    count: 0,
    isOn: false,
    x: null,
    y: null
  }

  componentDidMount() {
    document.title = `You have clicked ${this.state.count} times`;
    window.addEventListener('mousemove', this.handleMouseMove);
  }

  componentDidUpdate() {
    document.title = `You have clicked ${this.state.count} times`;
  }

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.handleMouseMove)
  }

  handleMouseMove = event => {
    this.setState({
      x: event.pageX,
      y: event.pageY
    })
  }

  incrementCount = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }))
  }

  toggleLight = () => {
    this.setState(prevState => ({
      isOn: !prevState.isOn
    }))
  }

  render() {
    return (
      <Fragment>
          <h2>Counter Class</h2>
          <button onClick={this.incrementCount}>I was clicked {this.state.count} times</button>
          <h2>Toggle light</h2>
          <div
            style={{
              height: '50px',
              width: '50px',
              background: this.state.isOn ? 'yellow':'grey'
            }}
            onClick={this.toggleLight}>
          </div>
          <h2>Mouse position</h2>
          <p>X position: {this.state.x}</p>
          <p>Y position: {this.state.y}</p>
      </Fragment>
    );
  }
}

export default App;
