

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Store } from './src/Store';
import { Navigation } from './src/Navigation';

export default class Init extends Component {

    render() {
        return (
            <Provider store={Store}>
                <Navigation />
            </Provider>
        )

    }
}
