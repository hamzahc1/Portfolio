import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';

import { configureStore } from './store/configureStore';
import { Root } from './containers/Root';

// Benchmark: Start keeping track of time
export const startTime = new Date().getTime();

const store = configureStore();

ReactDOM.render(
  <Root store={store}/>,
  document.getElementById('root')
);
