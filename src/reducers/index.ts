import { appInitialState, appReducer, IAppState } from './app_reducer';
import { loginInitialState, loginReducer, ILoginState } from './login_reducer';

export interface IAppStore {
    appReducer: IAppState;
    loginReducer: ILoginState;
}

export const initialStore: IAppStore = {
    appReducer: appInitialState,
    loginReducer: loginInitialState
};

const combineReducers = (reducers: any) => {
    return (state = {}, action) => {
        return Object.keys(reducers).reduce((nextState, key) => {
            nextState[key] = reducers[key](state[key], action);
            return nextState;
        }, {});
    };
};

const Reducer = combineReducers({
    appReducer: appReducer as any,
    loginReducer: loginReducer as any
});

export default Reducer;
