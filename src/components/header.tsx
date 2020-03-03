import * as React from 'react';
import { withRouter } from 'react-router';

interface IHeaderProps {
    headerName: string;
    history: any;
}

interface IHeaderState {

}

class Header extends React.Component<IHeaderProps, IHeaderState> {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <div className='mainHeader'>
                    <div className='headerLeft'>
                        <div className='backIcon'>
                            <img onClick={() => { this.props.history.goBack(); }} src={require('./../../assets/images/back.png')}></img>
                            <h2>{this.props.headerName}</h2>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Header);