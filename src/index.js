import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ViewPartsControl from "./storages/ViewPartsControl";

ReactDOM.render(<App viewControl={new ViewPartsControl} />, document.getElementById('root'));
registerServiceWorker();
