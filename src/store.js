import { combineReducers, createStore } from "redux";
import customerReducer from "./features/customers/customerSlice";
import accountReducer from "./features/accounts/accountSlice";

const rootReducer = combineReducers({ accountReducer, customerReducer });
const store = createStore(rootReducer);
export default store;
