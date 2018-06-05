import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {asReduxStore, connectReduxDevtools} from "mst-middlewares"
import {Provider} from 'react-redux';

import rootStore from './mst/store';

const store = asReduxStore(rootStore);
connectReduxDevtools(require("remotedev"), rootStore);

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
registerServiceWorker();
