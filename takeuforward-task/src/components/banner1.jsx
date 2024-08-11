import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Banner from './Banner';

class Counter extends React.Component {
    constructor() {
        super();
        this.state = {
          count: 0,
        };
      }
    
      // This method will be called when the "Increment" button is clicked
      handleIncrement = () => {
        this.setState({ count: this.state.count + 1 });
      };

      
    
      // componentDidUpdate is called after the component updates
      componentDidUpdate(prevProps, prevState) {
        // You can access the previous props and state here
        console.log('Component updated');
        console.log('Previous state:', prevState);
        console.log('Current state:', this.state);
      }
    
      render() {
        return (
          <div>
            <h1>Banner </h1>
            {/* <p>Count: {this.state.count}</p> */}
            {/* <button onClick={this.handleIncrement}>Increment</button> */}
            <Banner />
          </div>
        );
      }
}

export default Counter;