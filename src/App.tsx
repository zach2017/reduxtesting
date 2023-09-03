import React from 'react';
import logo from './logo.svg';
import './App.css';
import SimpleSlice, { SimpleState, incrementByAmount, simpleSlice } from './SimpleSlice';
import { ConnectedProps, connect } from 'react-redux';
import { RootState } from './store';

//const myredux = Connect()

type PropsFromRedux = ConnectedProps<typeof connector>;

type FooProps = {
  foo: string
}
class App extends React.Component<FooProps & PropsFromRedux> {
 
  constructor( props: FooProps & PropsFromRedux| Readonly<FooProps & PropsFromRedux> ) {
      super(props)
      
      this.state = {
          counter: "dd"
      }
      this.myFunction = this.myFunction.bind(this);
  }

  myFunction(e: any) {
      alert("The value of counter is " + this.props.simpleState.value )
     this.props.incrementByAmount("DDD") 
  }

  render() {
      console.log(this.props.simpleState.value)
      return (
          <div >
             more<p>{this.props.simpleState.value}</p>
              <button id="foo" onClick={this.myFunction}>
                  Click me!
              </button>
              <p>{this.props.foo}</p>
          </div>
      );
  }
}

export function mapStateToProps(state: { simpleState: SimpleState; }) {
  const { simpleState } = state
  return { name: simpleSlice.name }
}

export const mapState = (state: RootState) => ({
  simpleState: state.simpleRedux,
})

export const mapDispatch = {
  incrementByAmount: (foo: string) => incrementByAmount(foo),
}

const connector = connect(mapState, mapDispatch)

export default connector(App)

