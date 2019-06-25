/*
 * action types
 */

export const ADD_BOARD_ITEM = "ADD_BOARD_ITEM";

/*
 * action creators
 */

// Must include a type. Everything else included is up to you.
// By convention the type is all capitals.
export function addBoardItem(item) {
    return { type: ADD_BOARD_ITEM, item };
}
