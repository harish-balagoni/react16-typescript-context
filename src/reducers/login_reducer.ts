import * as Constants from '../providers/app_constants';
import _ from '../utils/lodash';

export interface ILoginState {
    isLoggedIn: boolean;
}

export const loginInitialState: ILoginState = {
    isLoggedIn: false
};

export const loginReducer = (state = loginInitialState, action) => {
    switch (action.type) {
        case '_INIT_': {
            return _.extend({}, state, action.payload.loginReducer);
        }
        case Constants.LOGIN: {
            return _.extend({}, state, { isLoggedIn: action.payload });
        }

        default:
            return state;
    }
};
