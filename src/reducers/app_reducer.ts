import * as Constants from '../providers/app_constants';
import _ from '../utils/lodash';

export interface IAppState {
    isLoggedIn: boolean;
    userdata: any;
    count: number;
}

export const appInitialState: IAppState = {
    isLoggedIn: false,
    userdata: null,
    count: 0
};

export const appReducer = (state = appInitialState, action) => {
    switch (action.type) {
        case '_INIT_': {
            return _.extend({}, state, action.payload.appReducer);
        }
        case Constants.TEST: {
            return _.extend({}, state, { count: state.count + 1 });
        }

        default:
            return state;
    }
};
