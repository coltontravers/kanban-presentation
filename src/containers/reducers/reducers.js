import { combineReducers } from "redux";
import { ADD_BOARD_ITEM, RE_ORDER_BOARD_ITEMS } from "../actions/actions";

const initialState = {
    boardItems: {
        columns: [
            {
                id: 1,
                name: "Here's a column",
                items: [{ id: 1, name: "Test" }]
            },
            {
                id: 2,
                name: "There couldn't be another column",
                items: [{ id: 2, name: "Another One" }]
            },
            {
                id: 3,
                name: "There is??!? W0W",
                items: [{ id: 3, name: "Another one...." }]
            },
            {
                id: 4,
                name: "Hi. Welcome to Chilli's.",
                items: [{ id: 4, name: "You played yourself...." }]
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
        case RE_ORDER_BOARD_ITEMS:
            return [...action];
        default:
            return state;
    }
}

const kanbanBoard = combineReducers({
    boardItems
});

export default kanbanBoard;
