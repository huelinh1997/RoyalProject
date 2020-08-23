import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import '../node_modules/noty/lib/noty.css';
import '../node_modules/noty/lib/themes/mint.css';
import App from './App';
import './assets/styles/scss/style.scss';
import './index.css';
import * as serviceWorker from './serviceWorker';
import reducers from './stores/reducer';
import saga from './stores/saga';

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(saga);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
serviceWorker.unregister();
