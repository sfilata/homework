import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// this tests the app component is crashed
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
