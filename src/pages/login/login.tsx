import * as React from 'react';
import { appActions } from './../../providers/app_actions';

interface ILoginProps {
    Dispatch: any;
}

interface ILoginState {
    count: number;
}

class Login extends React.Component<ILoginProps, ILoginState> {
    constructor(props: ILoginProps) {
        super(props);
        this.state = {
            count: 0
        };
    }

    static getDerivedStateFromProps(props, state) {
        return { count: props.state.appReducer.count };
    }

    login = () => {
        this.props.Dispatch(appActions.test());
    }

    render() {
        return (<div>Login initiated

            <button onClick={this.login.bind(this)}>Login</button>
            {this.state.count}
        </div>);
    }
}

export default Login;
