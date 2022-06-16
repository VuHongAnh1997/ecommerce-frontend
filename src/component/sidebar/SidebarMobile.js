import React, {useContext} from "react";
import logoIcon from "../../assets/images/component/sidebar/logo.jpg";
import {
    AiOutlineClose,
    FaFacebookF,
    FaInstagram,
    FaUserCircle,
    FaYoutube,
    FiHeart,
    FiSearch,
    FiShoppingCart
} from "react-icons/all";
import {Link, useNavigate} from "react-router-dom";
import '../../assets/scss/component/sidebar/sidebar-mobile.scss'
import zaloIcon from '../../assets/images/component/sidebar/zalo.png'
import {Nav, NavItem, NavLink} from "reactstrap";

const SidebarMobile = ({isOpen, setIsOpen, menuPaths, setIsBlur}) => {

    const navigate = useNavigate();

    return (
        <div className={"sidebar__mobile" + (isOpen ? " sidebar__mobile__open" : " sidebar__mobile__close")}>
            <div className="sidebar__mobile__logo">
                <img src={logoIcon} alt="Logo icon"/>
                {isOpen ? <AiOutlineClose className="sidebar__mobile__logo__close__icon"
                                          onClick={() => {
                                              setIsOpen(!isOpen)
                                              setIsBlur(false)
                                          }}/> : null}
            </div>
            <nav className="sidebar__mobile__nav w-100 px-5 mt-5">
                <Link to="/login">
                    <FaUserCircle />
                </Link>
                <span>
                    <FiSearch/>
                </span>
                <span>
                    <FiHeart/>
                </span>
                <span>
                    <FiShoppingCart/>
                </span>
            </nav>

            <Nav className="sidebar__mobile__items text-center mt-5 text-uppercase text-black">
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

            <div className="flex-center social-media">
                <FaFacebookF className="mx-2" />
                <FaYoutube className="mx-2" />
                <img className="zalo-icon mx-2" src={zaloIcon} alt="Zalo icon"/>
                <FaInstagram className="mx-2"/>
            </div>
        </div>
    )
}

export default SidebarMobile