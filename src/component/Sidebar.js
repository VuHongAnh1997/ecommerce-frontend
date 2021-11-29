import React from "react";
import {Link} from "react-router-dom";
import {FiHeart, FiSearch, FiShoppingCart, FiUser} from "react-icons/all";
import '../assets/scss/component/sidebar.scss'

const Sidebar = () => {

    return (
        <div className="sidebar">
            <div className="sidebar__logo">

            </div>
            <nav>
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
        </div>
    )
}

export default Sidebar