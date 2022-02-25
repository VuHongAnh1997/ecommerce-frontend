import {USERS_ERROR, LOGIN, MENU, USER_DETAILS} from '../types'
import UserService from "../../service/userService";

export const login = (data) => async dispatch => {

    try{
        const res = await UserService.login(data)
        if(res.status === 200) {
            localStorage.setItem("token", res.data.accessToken)
            dispatch( {
                type: LOGIN,
                payload: res.data
            })
        }
        return true
    }
    catch(e){
        dispatch( {
            type: USERS_ERROR,
            payload: console.log(e),
        })
        return false
    }

}

export const getMenuByRoleID = (roleID) => {

    return async (dispatch) => {
        try {
            const res = await UserService.getMenuPathByUser(roleID)
            if(res.status === 200) {
                dispatch({
                    type: MENU,
                    payload: res.data
                })
            }
        } catch (e) {
            //common display error
        }
    }
}

export const getUserDetails = () => {
    return async (dispatch) => {
        const res = await UserService.getUserDetails()
        if(res.status === 200) {
            dispatch({
                type: USER_DETAILS,
                payload: res.data
            })
        }
    }
}