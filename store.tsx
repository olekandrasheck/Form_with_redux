import { combineReducers, compose, createStore } from "redux";
import { IForm } from "./Form";
import { usersReducer } from "./reducers/UsersReducer";

export interface IState {
  listOfUsers: Array<IForm>;
}

const rootReducer = combineReducers({
  listOfUsers: usersReducer,
});
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState: IState = { listOfUsers: [] };

export const store = createStore(rootReducer, composeEnhancers());
