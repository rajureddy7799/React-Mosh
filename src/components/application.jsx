import React, { Component } from 'react';
import Counters from './counters';
import NavBar from './navbar';

class Application extends Component {
    state = { 
        counters: [
            {id: 1, value: 4},
            {id: 2, value: 0},
            {id: 3, value: 0},
            {id: 4, value: 0}
        ]
     }

     handleIncrement = (counter) => {
        const counters = [...this.state.counters];
        let index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;
        this.setState({counters});

        this.setState({'count':this.state.count + 1});
      }

     handleDelete = (id) =>{
        const counters = this.state.counters.filter(c => c.id !== id);
        this.setState({counters});
     }

     handleRefresh = () => {
            const counters = this.state.counters.map((c) => {
                c.value = 0;
                return c;
            })
         this.setState({counters});

     }

     handleDecrement = (counter) => {

        const counters = [...this.state.counters];
        let index = counters.indexOf(counter);
        let value = counters[index].value;
        counters[index].value = counters[index].value - 1;
        this.setState({counters});

     }
    render() { 
        return ( 
            <div>
                <NavBar totalCounters = {this.state.counters.filter((c) => c.value > 0)}/>
                <Counters 
                onIncrement={this.handleIncrement}
                onDelete = {this.handleDelete}
                onRefresh = {this.handleRefresh}
                onDecrement = {this.handleDecrement}
                counters = {this.state.counters}
                />
            </div>
         );
    }
}
 
export default Application;