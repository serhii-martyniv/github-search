import store from './redux/reduxStore';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {Provider} from "react-redux";
import './styles.scss'
import 'semantic-ui-css/semantic.min.css'

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>, document.getElementById('root')
);