import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

// import { firebase } from './firebase/firebase';

import { addFastener, removeFastener, editFastener } from './actions/fasteners';

const store = configureStore();

store.subscribe(() => {
  console.log(store.getState());
})

const fas1 = store.dispatch(addFastener({
    size: 4,
    length: 10,
    headType: 'SH',
    driveType: 'TX',
    material: 'Steel',
    thruHolePart: 'part1',
    threadedHolePart: 'part2'
}))

const fas2 = store.dispatch(addFastener({
  size: 3,
  length: 15,
  headType: 'SH',
  driveType: 'HX',
  material: 'Steel',
  thruHolePart: 'part3',
  threadedHolePart: 'part4'
}))


const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
