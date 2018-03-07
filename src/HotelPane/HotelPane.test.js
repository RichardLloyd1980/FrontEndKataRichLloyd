import React from 'react';
import ReactDOM from 'react-dom';
import HotelPane from './HotelPane.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HotelPane />, div);
  ReactDOM.unmountComponentAtNode(div);
});
