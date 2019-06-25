import { combineReducers } from "redux";
import { ADD_BOARD_ITEM } from "../actions/actions";

const initialState = {
    boardItems: {
        columns: [
            {
                name: "Here's a column",
                items: [{ name: "Test" }]
            },
            {
                name: "There couldn't be another column",
                items: [{ name: "Another One" }]
            },
            {
                name: "There is??!? W0W",
                items: [{ name: "Another one...." }]
            },
            {
                name: "Hi. Welcome to Chilli's.",
                items: [{ name: "You played yourself...." }]
            }
        ]
    }
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
