import { legacy_createStore as createStore } from "redux";
import ReducerFavorites from "./Reducer";

const store = createStore(ReducerFavorites);

export default store;
