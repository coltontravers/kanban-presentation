import { createStore } from "redux";
import kanbanBoard from "../reducers/reducers";

const store = createStore(kanbanBoard);

export default store;
