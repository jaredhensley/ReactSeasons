import React from 'react';
import ReactDOM from 'react-dom';

// const App = () => {
//     window.navigator.geolocation.getCurrentPosition(
//         (position) => console.log(position),
//         (err) => console.log(err)
//     );
//     return <div>lattitude: </div>
// }

class App extends React.Component {

    // first function called on any new instance of the App component
    // good place to init state 
    constructor(props) {
        // super invokes the constructor from the React.Component, 100% necessary
        super(props);

        this.state = {
            lat: null
        };

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({lat: position.coords.latitude});
            },
            (err) => console.log(err)
        );
    }

    render() {
        return <div>lattitude: {this.state.lat}</div>
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));