import { useSelector } from "react-redux";
import { IState } from "./store";

export const useUserSelector = () => {
  const listOfUsers = useSelector((state: IState) => state.listOfUsers);

  return listOfUsers;
};
