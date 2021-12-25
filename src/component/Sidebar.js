import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import {FiHeart, FiSearch, FiShoppingCart, FiUser} from "react-icons/all";
import '../assets/scss/component/sidebar/sidebar.scss'
import logoIcon from '../../src/assets/images/component/sidebar/logo.jpg'
import {useDispatch, useSelector} from "react-redux";
import {getMenuByRoleID, getUserDetails} from "../store/actions/usersActions";
import {Nav, NavItem, NavLink} from "react-bootstrap";

const Sidebar = () => {

    const dispatch = useDispatch()
    const {menuPaths, accessToken, userDetails} = useSelector(state => state.user)

    useEffect(() => {
        if(accessToken) {
            dispatch(getUserDetails())
        }
    }, [accessToken])

    useEffect(() => {
        if(accessToken) {
            dispatch(getMenuByRoleID(userDetails.role.id))
        }
    }, [accessToken])

    return (
        <div className="sidebar pt-3">
            <div className="sidebar__logo">
                <img src={logoIcon} alt="Logo icon"/>
            </div>
            <nav className="d-flex justify-content-between w-100 px-5 mt-5">
                <Link to="/login">
                    <FiUser />
                </Link>
                <span>
                    <FiSearch />
                </span>
                <span>
                    <FiHeart />
                </span>
                <span>
                    <FiShoppingCart />
                </span>
            </nav>

            <Nav className="sidebar__items text-center mt-5 text-uppercase text-black">
                {
                    menuPaths.map(item => (
                        <NavItem key={item.path} className="p-1 w-100">
                            <NavLink href="#" className="text-black">
                                {item.name}
                            </NavLink>
                        </NavItem>
                    ))
                }
            </Nav>
        </div>
    )
}

export default Sidebar