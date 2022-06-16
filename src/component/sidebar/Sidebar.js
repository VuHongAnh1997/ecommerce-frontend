import React, {useEffect, useState} from "react";
import '../../assets/scss/component/sidebar/sidebar.scss'
import {useDispatch, useSelector} from "react-redux";
import {getMenuByRoleID, getUserDetails} from "../../store/actions/usersAction";
import TopBar from "../TopBar";
import SidebarMobile from "./SidebarMobile";
import SidebarWeb from "./SidebarWeb";
import useDetectDevice from "../../customHooks/useDetectDevice";

const Sidebar = ({setIsBlur}) => {

    const dispatch = useDispatch()
    const {menuPaths, accessToken, userDetails} = useSelector(state => state.user)
    const [isOpen, setIsOpen] = useState(false)
    const isMobile = useDetectDevice();

    useEffect(() => {
        if (accessToken) {
            dispatch(getUserDetails())
        }
    }, [accessToken])

    useEffect(() => {
        if (accessToken) {
            dispatch(getMenuByRoleID(userDetails.role.id))
        }
    }, [accessToken])

    return (
        <>
            <TopBar onClickTopBar={() => setIsOpen(!isOpen)} setIsBlur={setIsBlur}/>
            {isMobile ? <SidebarMobile isOpen={isOpen} setIsOpen={setIsOpen} menuPaths={menuPaths} setIsBlur={setIsBlur}/> : <SidebarWeb menuPaths={menuPaths} />}
        </>
    )
}

export default Sidebar