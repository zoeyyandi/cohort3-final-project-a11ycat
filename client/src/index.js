import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';

import App from './App';
import './index.css';

import reducer from './reducers';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

const store = createStore(
	reducer,
	applyMiddleware(thunk),
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById("root")
);