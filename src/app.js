import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';

import { startSetFasteners } from './actions/fasteners';
import { startSetPins } from './actions/pins';
import { startSetProjects } from './actions/projects';
import { login, logout } from './actions/auth';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

import { firebase } from './firebase/firebase';
import LoadingPage from './components/LoadingPage';

const store = configureStore();

store.subscribe(() => {
  console.log(store.getState());
})

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered = true;
  }
}

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log("log in", user);
    
    store.dispatch(login(user.uid));

    store.dispatch(startSetFasteners())
      .then(() => {
        return store.dispatch(startSetPins());
      })
      .then(() => {
        return store.dispatch(startSetProjects());
      })
      .then(() => {
        renderApp();
        if (history.location.pathname === '/') {
          history.push('/dashboard');
        }
      });
   
  } else {
    console.log("log out.");

    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
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



