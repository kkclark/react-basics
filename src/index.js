import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './seasonDisplay';

const App = () => {
  window.navigator.geolocation.getCurrentPosition(
    // success callback
    (position) => { console.log(position) },
    // err callback
    (err) => { console.log(err) }
  );
  return(
    <SeasonDisplay />
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
