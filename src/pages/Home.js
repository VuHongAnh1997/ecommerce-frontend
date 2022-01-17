import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import intro6 from '../assets/images/pages/home/intro6.jpg'
import intro7 from '../assets/images/pages/home/intro7.gif'
import category1 from '../assets/images/pages/home/category1.jpg'
import category2 from '../assets/images/pages/home/category2.jpg'
import category3 from '../assets/images/pages/home/category3.jpg'
import category4 from '../assets/images/pages/home/category4.jpg'
import category5 from '../assets/images/pages/home/category5.jpg'
import {Col, Row} from "react-bootstrap";
import Banner from "../component/Banner";

const Home = () => {
    return <div className="home">

        <Banner />
        <div className="home__collection w-100 d-flex justify-content-center mt-5">
            <img className="w-25" src={intro6} alt=""/>
            <img className="w-25" src={intro7} alt=""/>
        </div>

        <Row className="home__category mt-4">
            <Col xs={6}>
                <img className="w-100" src={category1} alt=""/>
            </Col>
            <Col xs={6}>
                <Row xs={12}>
                    <Col xs={6}>
                        <figure>
                            <img className="w-100" src={category2} alt=""/>
                        </figure>
                    </Col>
                    <Col xs={6}>
                        <figure>
                            <img className="w-100" src={category3} alt=""/>
                        </figure>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6}>
                        <figure>
                            <img className="w-100" src={category4} alt=""/>
                        </figure>

                    </Col>
                    <Col xs={6}>
                        <figure>
                            <img className="w-100" src={category5} alt=""/>
                        </figure>
                    </Col>
                </Row>
            </Col>
        </Row>
    </div>
}

export default Home