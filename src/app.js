import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetFasteners } from './actions/fasteners';
import LoadingPage from './components/LoadingPage';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from './firebase/firebase';


const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

store.dispatch(startSetFasteners())
  .then(() => {
    ReactDOM.render(jsx, document.getElementById('app'));
  })
















store.subscribe(() => {
  console.log(store.getState());
})
// import { addFastener, removeFastener, editFastener } from './actions/fasteners';

// const fas1 = store.dispatch(addFastener({
//     size: 4,
//     length: 10,
//     headType: 'SH',
//     driveType: 'TX',
//     material: 'steel',
//     thruHolePart: 'part1',
//     threadedHolePart: 'part2'
// }))

// const fas2 = store.dispatch(addFastener({
//   size: 3,
//   length: 15,
//   headType: 'SH',
//   driveType: 'HX',
//   material: 'steel',
//   thruHolePart: 'part3',
//   threadedHolePart: 'part4'
// }))



