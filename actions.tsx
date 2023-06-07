import { IForm } from "../Form";
import { IAction } from "./UsersReducer";

export const USERS_REDUCER_ADD = "USERS_REDUCER_ADD";
export type TAddTodoAction = IAction<IForm>;

export const addUserAction = (payload: IForm) => {
  return {
    type: USERS_REDUCER_ADD,
    payload,
  };
};
