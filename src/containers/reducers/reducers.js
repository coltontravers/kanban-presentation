import { combineReducers } from "redux";
import { ADD_BOARD_ITEM } from "../actions/actions";

const initialState = {
    boardItems: [
        {
            name: "Test #1"
        }
    ]
};

// Reducers will give you the data that you want to send to the client from the store.
function boardItems(state = initialState.boardItems, action) {
    switch (action.type) {
        case ADD_BOARD_ITEM:
            return [
                ...state,
                {
                    name: action.name
                }
            ];
        default:
            return state;
    }
}

const kanbanBoard = combineReducers({
    boardItems
});

export default kanbanBoard;
