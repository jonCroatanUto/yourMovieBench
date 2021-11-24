import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import CombinedReducers from "./reducers";
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__?: typeof compose;
  }
}
const devTools =
  window &&
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__();
const appliedMiddleware: any = devTools
  ? compose(applyMiddleware(thunk), devTools)
  : compose(applyMiddleware(thunk));
const store = createStore(CombinedReducers, appliedMiddleware);

export default store;
