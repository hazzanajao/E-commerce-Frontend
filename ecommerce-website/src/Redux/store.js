import {createStore} from "redux";
import reducers from "./reducers/index";

const store = createStore(reducers,{}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;

// To see redux tool extension we need to add this :
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
