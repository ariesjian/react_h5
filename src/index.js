import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RouteMap from './routers';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<RouteMap />, document.getElementById('root'));

serviceWorker.unregister();
