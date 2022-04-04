import React from "react";
import {Col, Row} from "reactstrap";

const Checkout = () => {

    return (
        <section className="checkout-container">
            <h4>Thanh toán giỏ hàng</h4>
            <Row>
                <Col>
                    <div>Thông tin hóa đơn</div>
                </Col>
                <Col>
                    <div>Phương thức thanh toán</div>
                </Col>
                <Col>
                    <div>Thông tin giỏ hàng</div>
                </Col>
            </Row>
        </section>
    )
}

export default Checkout