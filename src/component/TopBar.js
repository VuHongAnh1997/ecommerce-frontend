import React from "react";
import topBarLogo from '../assets/images/component/topbar/topbar_logo.jpg'
import {FiMenu, FiSearch, FiShoppingCart} from "react-icons/all";
import {Col, Row} from "reactstrap";
import '../assets/scss/component/topbar/topbar.scss'

const TopBar = ({onClickTopBar}) => {
    return (
        <Row className="top-bar-container align-items-center px-2 py-2 d-flex d-md-none">
            <Col xs={4} onClick={onClickTopBar}>
                <FiMenu/>
            </Col>
            <Col xs={4} className="top-bar-container__logo">
                <img src={topBarLogo} alt="Top bar logo"/>
            </Col>
            <Col xs={4} className="top-bar-container__extra">
                <FiSearch/>
                <FiShoppingCart/>
            </Col>
        </Row>
    )
}

export default TopBar