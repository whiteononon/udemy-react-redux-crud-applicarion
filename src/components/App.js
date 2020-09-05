import React, { Component } from "react";
import { connect } from 'react-redux'

import { increment, decrement } from '../actions'

class App extends Component {
  render() {
    const props = this.props
    console.log(props);
    return (
      <>
        <div>value : {props.value}</div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
      </>
    );
  }
}

//StoreにあるStateをPropsとして使えるようにする 
const mapStateToProps = state => ({ value: state.count.value, value2: state.count2.value, })
// PropsからActionをDispachできるようにする
// const mapDispathToProps = dispatch => ({
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement())
// })

const mapDispathToProps = ({ increment, decrement })

export default connect(mapStateToProps, mapDispathToProps)(App)