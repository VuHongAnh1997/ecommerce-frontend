import {CATEGORIES} from "../types";
import CategoryService from "../../service/categoryService";

export const getCategoriesByMenuPath = (menuPath) => {
    return async (dispatch) => {
        const res = await CategoryService.getCategoriesByMenuPath(menuPath)
        if (res.status === 200) {
            dispatch({
                type: CATEGORIES,
                payload: res.data
            })
        }
    }
}