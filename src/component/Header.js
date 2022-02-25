import React from "react";
import '../assets/scss/component/header/header.scss'

const Header = () => {
    return (
        <div className="header mb-5">
            <h2 className="w-100 text-center mt-5">ĐỒ NAM</h2>
            <div className="types d-flex justify-content-center">
                <div className="mx-4">ÁO THUN</div>
                <div className="mx-4">ÁO SƠ MI NAM</div>
                <div className="mx-4">QUẦN SHORT</div>
                <div className="mx-4">QUẦN DÀI</div>
            </div>

            {/*chuc nang filter*/}
        </div>
    )
}

export default Header