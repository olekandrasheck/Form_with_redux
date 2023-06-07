import { IState } from "../store";
import { TAddTodoAction, USERS_REDUCER_ADD } from "./actions";
export interface IAction<T> {
  type: string;
  payload: T;
}

const addUser = (state: IState["listOfUsers"], action: TAddTodoAction) => {
  return [...state, action.payload];
};

export const usersReducer = (
  state: IState["listOfUsers"] = [],
  action: IAction<unknown>
) => {
  switch (action.type) {
    case USERS_REDUCER_ADD:
      return addUser(state, action as TAddTodoAction);
    default:
      return state;
  }
};
