import { createActions } from "../../utilities/createActions";
import { USER_ACTIONS_TYPES } from "./user.types";
export const setCurrentUser = (user) =>
	createActions(USER_ACTIONS_TYPES.SET_CURRENT_USER, user);
