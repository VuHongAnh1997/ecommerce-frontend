import React from "react";
import '../assets/scss/component/header/header.scss'
import {Col, Container, Row} from "reactstrap";

const Header = () => {
    return (
        <section className="header mb-5">
            <h2 className="w-100 text-center mt-5">ĐỒ NAM</h2>
            <div className="container">
                <Container>
                    <Row className="types p-2">
                        <Col lg={3} xs={6} className="my-2">ÁO THUN</Col>
                        <Col lg={3} xs={6} className="my-2">ÁO SƠ MI NAM</Col>
                        <Col lg={3} xs={6} className="my-2">QUẦN SHORT</Col>
                        <Col lg={3} xs={6} className="my-2">QUẦN DÀI</Col>
                    </Row>
                </Container>
            </div>

            {/*chuc nang filter*/}
        </section>
    )
}

export default Header