import React from 'react';
import ReactDOM from 'react-dom';
//import SeasonDisplay from './seasonDisplay';

class App extends React.Component {
  // automatically called when instantiated before anything else
  constructor(props) {
    // must call super with props
    super(props);

    // calling super is what allows you to initialize state
    this.state = { lat: null };

    // render() is called very frequently. don't put expensive calls in it
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (err) => { console.log(err) }
    );
  }

  render() {
    return <div>Latitude: { this.state.lat }</div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
