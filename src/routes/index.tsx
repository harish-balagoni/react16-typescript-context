import * as React from 'react';
import { Router } from 'react-router-dom';
const Header = React.lazy(() => import('./../components/header'));
const Sidemenu = React.lazy(() => import('./../components/sidemenu'));
const Login = React.lazy(() => import('./../pages/login/login'));
import { Provider } from './../providers/index';
import history from './history';

interface IRoutesProps {

}

interface IRoutesState {
    isOpenSidebar: boolean;
    activeHeaderName: string;
}

class Routes extends React.Component<IRoutesProps, IRoutesState> {
    constructor(props) {
        super(props);
        this.state = {
            isOpenSidebar: false,
            activeHeaderName: 'Projects'
        };
    }

    componentDidMount() {
        //Default landing page
        history.push('/Login');
    }

    static getDerivedStateFromProps(props, state) {
        return state;
    }

    //Open close side bar handler
    isOpenSidebar() {
        this.setState({ isOpenSidebar: !this.state.isOpenSidebar });
    }

    //Header name handler based on sidemenu actions
    activePageHandler(pageName: string) {
        this.setState({ activeHeaderName: pageName });
    }

    render() {
        return (
            //State consumer
            <Provider.Consumer>{(props) => (
                !props.state.isLoggedIn ?
                    <React.Suspense fallback={<div>Loading...</div>}>
                        <Login {...props} />
                    </React.Suspense> : <div>
                        <Router history={history}>
                            <React.Suspense fallback={<div>Loading...</div>}>
                                <Sidemenu isOpenSidebar={this.isOpenSidebar.bind(this)} activePageHandler={(name: string) => { this.activePageHandler(name); }} />
                            </React.Suspense>
                            <div className={this.state.isOpenSidebar ? 'right-side-content r-open' : 'right-side-content'}>
                                <React.Suspense fallback={<div>Loading...</div>}>
                                    <Header headerName={this.state.activeHeaderName} />
                                </React.Suspense>
                                <div className='main-content'>
                                </div>
                            </div>
                        </Router>
                    </div>
            )}
            </Provider.Consumer>
        );
    }
}

export default Routes;
