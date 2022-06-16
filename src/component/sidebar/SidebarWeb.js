import React from "react";
import logoIcon from "../../assets/images/component/sidebar/logo.jpg";
import {FaUserCircle, FiHeart, FiSearch, FiShoppingCart} from "react-icons/all";
import {Link, useNavigate} from "react-router-dom";
import '../../assets/scss/component/sidebar/sidebar-web.scss'
import {Nav, NavItem, NavLink} from "reactstrap";

const SidebarWeb = ({menuPaths}) => {

    const navigate = useNavigate();

    return (
        <div className="sidebar__web">
            <div className="sidebar__web__logo text-center" onClick={() => navigate('/')}>
                <img src={logoIcon} alt="Logo icon"/>
            </div>
            <nav className="d-flex justify-content-between w-100 px-5 mt-5 sidebar__web__nav">
                <Link to="/login">
                    <FaUserCircle />
                </Link>
                <Link to="/login">
                    <FiSearch/>
                </Link>
                <Link to="/login">
                    <FiHeart/>
                </Link>
                <Link to="/login">
                    <FiShoppingCart/>
                </Link>
            </nav>

            <Nav className="sidebar__web__items text-center mt-5 text-uppercase text-black">
                {
                    menuPaths.map(item => (
                        <NavItem key={item.path} className="p-1 w-100" onClick={() => navigate(item.path)}>
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

export default SidebarWeb