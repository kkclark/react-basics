import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './seasonDisplay';

const App = () => {
  return(
    <SeasonDisplay />
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
