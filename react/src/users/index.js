import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import UsersIndex from './components/users_index';
import UsersNew from './components/users_new';

// const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
    // <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/users/new" component={UsersNew} />
                <Route exact path="/users" component={UsersIndex} />
            </Switch>
        </BrowserRouter>,
    // </Provider>,
     document.getElementById('root')
);