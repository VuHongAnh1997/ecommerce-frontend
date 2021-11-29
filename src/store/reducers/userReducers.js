import {LOGIN} from '../types'

const initialState = {
    accessToken: null,
}

export default function(state = initialState, action){

    switch(action.type){

        case LOGIN:
            return {
                ...state,
                accessToken:action.payload.accessToken,
            }
        default: return state
    }

}