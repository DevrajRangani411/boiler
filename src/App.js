import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import asyncComponent from './utils/asyncComponent.jsx';
import * as serviceWorker from "./serviceWorker";
import axios from './services';
import store from "./store";
import Layout from './components/layout.js';

// export const store = configureStore();


const App = () => {
    return (
        <>
            <Provider store={store}>
                    <BrowserRouter>
                        <Layout/>
                    </BrowserRouter>  
            </Provider>
        </>
    );
}



ReactDOM.render(
    <App />,
    document.getElementById('root')
);
serviceWorker.register();
export default App;
