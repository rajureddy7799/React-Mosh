import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import Movies from './components/movies';
import 'bootstrap/dist/css/bootstrap.css';
import Application from './components/application';
import './css/index.css';
//import 'font-awesome/css/font-awesome.css';


class App extends Component {
    state = {  }
    render() { 
        return ( 
            <main className='container'>
            <Application />
            <Movies />
            </main>

         );
    }
}
ReactDOM.render(<App />, document.querySelector('#root'));
