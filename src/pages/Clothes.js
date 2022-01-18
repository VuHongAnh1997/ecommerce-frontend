import React from "react";
import product1 from '../assets/images/pages/clothes/product1.jpg'
import product2 from '../assets/images/pages/clothes/product2.jpg'
import product3 from '../assets/images/pages/clothes/product3.jpg'
import {Col, Row} from "reactstrap";
import '../assets/scss/pages/clothes.scss'

const Clothes = () => {

    return (
        <div className="px-5">
            <Row className="mb-4">
                <Col xs={3} className="position-relative test">
                    <img className="test2" src={product1} alt="Product 1"/>
                    <div className="test1">
                        <img src={product1} alt=""/>
                        <img src={product2} alt=""/>
                        <img src={product3} alt=""/>
                    </div>
                </Col>
            </Row>
        </div>

    )
}

export default Clothes