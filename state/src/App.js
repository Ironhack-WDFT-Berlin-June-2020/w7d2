import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    clickCount: 0,
    liked: false
  }

  clickHandler = () => {
    // console.log('clicked');
    // this.setState({
    //   clickCount: this.state.clickCount + 1
    // })
    console.log(this.state.clickCount);
    this.setState((state, props) => ({
      clickCount: state.clickCount + 1
    }))
  }

  likeHandler = () => {
    this.setState((state, props) => ({
      liked: !state.liked
    }))
  }

  render() {
    // let heading = '';
    // if (this.state.liked) {
    //   heading = 'I like this component'
    // } else {
    //   heading = 'I do not like'
    // }
    return (
      <>
        <h1>Counter: {this.state.clickCount}</h1>
        <button onClick={this.clickHandler}>Click me</button>
        <h1>{this.state.liked ? 'I like this component' : 'I don\'t like this component'}</h1>
        <button onClick={this.likeHandler}>{this.state.liked ? 'Unlike' : 'Like'}</button>
      </>
    )
  }
}

export default App;
