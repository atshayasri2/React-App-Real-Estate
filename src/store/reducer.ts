import { combineReducers } from "redux";
import compareReducer from "./compare/compare.reducer";

const allReducers = () => combineReducers({ compareReducer });

export type AllReduxStoreTypes = ReturnType<ReturnType<typeof allReducers>>;

export default allReducers;