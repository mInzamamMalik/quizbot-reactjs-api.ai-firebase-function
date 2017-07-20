import * as React from "react";
import * as ReactDOM from "react-dom";

import * as config from './config'; config;
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';


// import injectTapEventPlugin from 'react-tap-event-plugin';
// injectTapEventPlugin();

import { MuiThemeProvider } from 'material-ui';

ReactDOM.render(
    <MuiThemeProvider>
        <Provider store={store}>
            <App></App>
        </Provider>
    </MuiThemeProvider>,
    document.getElementById('root')
);
