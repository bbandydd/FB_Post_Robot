import React from 'react';
import { render } from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import App from './containers/AppContainer/App';

render(
    <MuiThemeProvider>
        <App />
    </MuiThemeProvider>,
    document.getElementById('app')
)