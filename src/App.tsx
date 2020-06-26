import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { Layout } from "./components/Layout";
import { SignUpPage } from "./components/SignUpPage";

import reducers from './reducers';

// Setup of redux store and localeStorage persistence
const localeStoreIdent = 'app_state';
const store = createStore(reducers, (() => {
    try {
        const state = localStorage.getItem(localeStoreIdent);
        if (!state) return undefined;
        return JSON.parse(state);
    } catch (err) {
        return undefined;
    }
})());

store.subscribe(() => {
    try {
        localStorage.setItem(localeStoreIdent, JSON.stringify(store.getState()));
    } catch {
    }
});

// init the app using Layout and passing through children the actual app-content to be able to change it to some routing
const App = () => <Layout>
    <Provider store={store}>
        <SignUpPage/>
    </Provider>
</Layout>;

export default App;
