import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import appReducer from "./app-reducer";


let rootReducer = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer
});

type rootReducerType = typeof rootReducer;
export type appStateType = ReturnType<rootReducerType>;

type PropertiesTypes<T> = T extends {[keys: string]: infer U} ? U : never;
export type InferActionsTypes<T extends{[keys: string]: (...args: any[]) => any}> = ReturnType<PropertiesTypes<T>>;

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));


export default store;