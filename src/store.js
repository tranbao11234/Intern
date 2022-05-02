import { createStore } from './../node_modules/redux/src/createStore';
import rootReducer from './reducer/index';

const store = createStore(rootReducer);
export default store;
