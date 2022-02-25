import {CATEGORIES} from "../types";

const initialState = {
    categories: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case CATEGORIES:
            return {
                ...state,
                categories: action.payload
            }
        default:
            return state
    }
}