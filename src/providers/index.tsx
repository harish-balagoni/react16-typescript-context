import * as React from 'react';

interface IAppState {
    Dispatch: Function;
    state: any;
}

export interface IAction {
    type: string;
    payload: any;
}

interface IAppProps {
    initialState: any;
    reducer: any;
}

const initialState: IAppState = {
    Dispatch: null,
    state: null
};

export const Provider = React.createContext(initialState);

//State provider
class StateProvider extends React.Component<IAppProps, IAppState> {

    constructor(props) {
        super(props);
        this.state = initialState;
    }

    componentWillMount() {
        this.getPersistedData();
    }

    componentDidMount() {
        let that = this;
        window.addEventListener('beforeunload', () => {
            that.persistStore();
        });
    }

    componentWillUnmount() {
        window.removeEventListener('beforeunload', this.persistStore.bind(this));
    }

    createStore = (yourReducer: Function, Default: any) => {
        let currentState = Default;
        return {
            getState: () => currentState,
            Dispatch: (action: IAction) => {
                let previousState = currentState;
                currentState = yourReducer(currentState, action);
                console.log('%c prev state', 'color: #4CAF50; font-weight: bold;', previousState);
                console.log('%c action', 'color: #2196F3; font-weight: bold;', action);
                console.log('%c next state', 'color: #bada55; font-weight: bold;', currentState);
                this.onUpdate(currentState);
            }
        };
    }

    createState = () => {
        let store = this.createStore(this.props.reducer, this.props.initialState);
        this.setState({ Dispatch: store.Dispatch, state: store.getState() });
    }

    getPersistedData = () => {
        let serializeData = localStorage.getItem('state');
        if (serializeData && serializeData.length) {
            this.setState({ state: JSON.parse(serializeData) }, () => {
                let payload = JSON.parse(serializeData);
                this.state.Dispatch({ type: '_INIT_', payload: payload });
                localStorage.removeItem('state');
            });
        }
        this.createState();
    }

    persistStore = () => {
        let serializeData = JSON.stringify(this.state.state);
        localStorage.setItem('state', serializeData);
    }

    onUpdate = (currentState) => {
        this.setState({ state: currentState });
    }

    render() {
        return (
            <Provider.Provider value={this.state}>
                {this.props.children}
            </Provider.Provider>
        );
    }
}

export default StateProvider;
