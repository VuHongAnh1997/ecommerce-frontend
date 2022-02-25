import {LOGIN, MENU, USER_DETAILS} from '../types'

const initialState = {
    accessToken: null,
    menuPaths: [
        {name: 'New Arrivals', path: '/new-arrivals', id: 1},
        {name: 'Đồ nam', path: '/men-clothes', id: 2},
        {name: 'Đồ nữ', path: '/women-clothes', id: 3},
        {name: 'Đồ đôi', path: '/couple-clothes', id: 4},
        {name: 'Áo khoác', path: '/coast', id: 5},
        // {name: 'Phụ kiện', path: '/accessory'}
    ],
    userDetails: {}
}

export default function(state = initialState, action){

    switch(action.type){

        case LOGIN:
            return {
                ...state,
                accessToken:action.payload.accessToken,
            }
        case MENU:
            return {
                ...state,
                menuPaths: action.payload
            }

        case USER_DETAILS:
            return {
                ...state, userDetails: action.payload
            }
        default: return state
    }

}