import React, { Component } from 'react';

class Counter extends Component {
         
    render() { 
        const {counter} = this.props;
        return ( 
            <div className='m-2 row'> 
            <div className="col-1">
                <span className={this.getBadgeClasss()}>{this.formatCount()} </span>
            </div>
            <div className="col">
                <button 
                onClick={() => {this.props.onIncrement(this.props.counter)}} 
                className="btn btn-primary rounded m-2">    
                +
                </button>

                <button 
                onClick={() => {this.props.onDecrement(this.props.counter)}} 
                className="btn btn-danger rounded m-2" 
                disabled = {counter.value === 0 ? 'disabled' : ''}
                >
                -
                </button>

                <button 
                onClick={() => this.props.onDelete(counter.id)} 
                className="btn btn-danger m-2 rounded" >
                Delete
                </button>
            </div>
            </div>
            );
    }

    getBadgeClasss() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {value} = this.props.counter;
        return value === 0 ? 'Zero' : value;
    }

     isDisabled = () => {
        const {value} = this.props.counter;
        return value === 0 ? 'disabled' : '';
    }

}
 
export default Counter;