import * as React from 'react';
import { withRouter } from 'react-router';

interface ISidemenuProps {
    isOpenSidebar: Function;
    activePageHandler: Function;
    logOut: Function;
    history: any;
    role: string;
}

interface ISidemenuState {
    addClass: boolean;
    activePage: string;
}

class Sidemenu extends React.Component<ISidemenuProps, ISidemenuState> {
    constructor(props) {
        super(props);
        this.state = {
            addClass: false,
            activePage: ''
        };
    }

    toggleClass() {
        this.setState({ addClass: !this.state.addClass });
        this.props.isOpenSidebar();
    }

    activePageHandler(pageName: string) {
        if (this.state.activePage !== pageName) {
            this.setState({ activePage: pageName }, () => {
                this.props.activePageHandler(pageName);
                this.props.history.replace('/' + pageName);
            });
        }
    }

    render() {
        return (
            <div className={this.state.addClass ? 'left-side-menu left_sidemenu_closed' : 'left-side-menu'}>
                <div className='sidebarNavItems'>
                    <nav>
                        <div className='logo'>
                            <span className='icon-grid' onClick={() => this.toggleClass()}><img src={''} alt='logo'></img></span>
                        </div>
                        <ul className='navItemsMain'>
                            {(this.props.role === 'ADMIN' || this.props.role === 'IT-TEAM') &&
                                <li className={this.state.activePage === 'Companies' ? 'active navItem' : 'navItem'} onClick={this.activePageHandler.bind(this, 'Companies')}> <a>Companies</a> </li>
                            }
                            {(this.props.role === 'ADMIN' || this.props.role === 'DEVELOPER' || this.props.role === 'IT-TEAM') &&
                                <li className={this.state.activePage === 'Projects' ? 'active navItem' : 'navItem'} onClick={this.activePageHandler.bind(this, 'Projects')}> <a>Projects</a></li>
                            }
                            {this.props.role === 'ADMIN' && <li className={this.state.activePage === 'Subscription' ? 'active navItem' : 'navItem'} onClick={this.activePageHandler.bind(this, 'Subscription')}> <a>Subscription</a></li>}
                        </ul>
                        <div className='logOut' onClick={() => { this.props.logOut(); }}>
                            <span className='icon-logout'></span>
                            Logout
                    </div>
                    </nav>
                </div>
            </div >

        );
    }
}

export default withRouter(Sidemenu);
