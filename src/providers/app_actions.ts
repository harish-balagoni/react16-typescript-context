import * as Constants from './app_constants';

class AppActions {
    test = () => {
        return {
            type: Constants.TEST
        };
    }
    login = (data: any) => {
        return {
            type: Constants.LOGIN,
            payload: data
        };
    }
}

export const appActions = new AppActions();
