import * as React from 'react';
import { render } from 'react-dom';
import './../assets/styles/app.scss';
import StateProvider from './providers/index';
import { initialStore } from './reducers/index';
import Reducer from './reducers/index';
import Routes from './routes/index';

//root element of the project
const rootElement = document.getElementById('root');

//Binding the js to html element
export function renderApp() {
    return (
        <StateProvider initialState={initialStore} reducer={Reducer}>
            <Routes />
        </StateProvider>
    );
}
render(renderApp(), (rootElement));
