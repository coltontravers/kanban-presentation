/*
 * action types
 */

export const ADD_BOARD_ITEM = "ADD_BOARD_ITEM";
export const RE_ORDER_BOARD_ITEMS = "RE_ORDER_BOARD_ITEMS";

/*
 * action creators
 */

// Must include a type. Everything else included is up to you.
// By convention the type is all capitals.
export function addBoardItem(item) {
    return { type: ADD_BOARD_ITEM, item };
}

export function reOrderBoardItems(columns) {
    return { type: RE_ORDER_BOARD_ITEMS, columns };
}
