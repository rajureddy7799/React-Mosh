import React from 'react';
import ReactDOM from 'react-dom'

class App extends React.Component{

    constructor(props) {
        super(props);
        console.log('inside constructor');

        this.state = {
                lon : null,
                lat : null,
                errorMessage: ''
        }
        
       

    }

    componentDidMount() {
        console.log("inside componentDidMount");
        window.navigator.geolocation.getCurrentPosition(
            position => {this.setState({lat: position.coords.latitude})} ,
            error => {this.setState({errorMessage:error.message})}
        );
    }

    render(){
       console.log('inside render method', this.state.lat);
       //console.log(this.state.errorMessage);
        
if(this.state.lat && !this.state.errorMessage) {
                       return <div>Latitude:{this.state.lat}<br/></div> 
                }
                if(!this.state.lat && this.state.errorMessage) {
                    
                    return <div>Error: {this.state.errorMessage}</div>
                }
                    
                return <div>Loading...</div>   
                
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));