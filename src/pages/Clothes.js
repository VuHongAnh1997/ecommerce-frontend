import React from "react";
import product1 from '../assets/images/pages/clothes/product1.jpg'
import product2 from '../assets/images/pages/clothes/product2.jpg'
import product3 from '../assets/images/pages/clothes/product3.jpg'
import {Col, Row} from "reactstrap";
import '../assets/scss/pages/clothes.scss'

const Clothes = () => {

    return (
        <Row className="mb-4">
            <Col xs={4} className="position-relative test">
                <img className="test2" src={product1} alt="Product 1"/>
                <div className="test1">
                    <img src={product1} alt=""/>
                    <img src={product2} alt=""/>
                    <img src={product3} alt=""/>
                </div>
                <div className="test3">

                </div>
            </Col>
        </Row>
    )
}

export default Clothes