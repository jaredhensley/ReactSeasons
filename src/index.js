import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

// const App = () => {
//     window.navigator.geolocation.getCurrentPosition(
//         (position) => console.log(position),
//         (err) => console.log(err)
//     );
//     return <div>lattitude: </div>
// }

class App extends React.Component {

    // removed constructor, transpiles down to constructor with super call and state setup
    state = {
        lat: null,
        errorMessage: ''
    };

    componentDidMount() {
        console.log('my component was rendered to the screen');
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude}),
            err => this.setState({ errorMessage: 'not able to fetch geolocation'})
        );
    }

    componentDidUpdate() {
        console.log('my component rerendered!');
    }

    render() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>;
        }
        
        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat}/>;
        }

        return <div>Loading...</div>;
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));