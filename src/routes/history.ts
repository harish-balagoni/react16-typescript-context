const createHistory = require('history').createHashHistory;
const history = createHistory.default ? createHistory.default() : createHistory();
history.pushLater = (...args) => setImmediate(() => history.push(...args));
export default history;
