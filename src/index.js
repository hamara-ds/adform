import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route } from 'react-router-dom'
import './index.css';
import reportWebVitals from './reportWebVitals';
import './styles'
import './scripts'
import IndexController from './controllers/IndexController'
import ThankYouView from './views/ThankYouView'

ReactDOM.render(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={IndexController} />
                <Route exact path="/thank-you" component={ThankYouView} />
            </Switch>
        </BrowserRouter>
    , document.getElementById('root')
);

reportWebVitals();