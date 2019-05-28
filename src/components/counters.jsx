import React, { Component } from 'react';
import Counter from '../components/counter';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

class Counters extends Component {

    
    
    render() { 
        const {onRefresh, onDelete, onIncrement, counters, onDecrement} = this.props;
        return ( 
            <main className='container main-counters'>
                <button className="btn-danger btn" onClick={onRefresh}>Reset</button>
               { counters.map(counter =>( 
               <Counter 
               key={counter.id} 
               counter={counter}
               onDelete={onDelete}
               onIncrement={onIncrement}
               onDecrement={onDecrement}
               />
               ))}
               <br/>
            </main>
         );
    }
}
 
export default Counters;