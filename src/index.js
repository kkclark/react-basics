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
  }

  render() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => { console.log(position) },
      (err) => { console.log(err) }
    );

    return <div>Latitude: </div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
