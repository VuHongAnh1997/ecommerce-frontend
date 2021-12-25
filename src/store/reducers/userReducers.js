import {LOGIN, MENU, USER_DETAILS} from '../types'

const initialState = {
    accessToken: null,
    menuPaths: [
        {name: 'New Arrivals', path: '/new-arrivals'},
        {name: 'Đồ nam', path: '/men-clothes'},
        {name: 'Đồ nữ', path: '/women-clothes'},
        {name: 'Đồ đôi', path: '/couple-clothes'},
        {name: 'Áo khoác', path: '/coast'},
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