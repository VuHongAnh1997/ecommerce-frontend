import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import intro1 from '../assets/images/pages/home/intro1.jpg'
import intro2 from '../assets/images/pages/home/intro2.jpg'
import intro3 from '../assets/images/pages/home/intro3.jpg'
import intro4 from '../assets/images/pages/home/intro4.jpg'
import intro5 from '../assets/images/pages/home/intro5.jpg'
import intro6 from '../assets/images/pages/home/intro6.jpg'
import intro7 from '../assets/images/pages/home/intro7.gif'
import category1 from '../assets/images/pages/home/category1.jpg'
import category2 from '../assets/images/pages/home/category2.jpg'
import category3 from '../assets/images/pages/home/category3.jpg'
import category4 from '../assets/images/pages/home/category4.jpg'
import category5 from '../assets/images/pages/home/category5.jpg'
import {Col, Row} from "react-bootstrap";

const Home = () => {
    return <div className="home">
        <Carousel showThumbs={false} emulateTouch={true} showArrows={false}>
            <div>
                <a href="#">
                    <img src={intro1}  alt="Intro 1"/>
                </a>
            </div>
            <div>
                <img src={intro2}  alt="Intro 2"/>
            </div>
            <div>
                <img src={intro3}  alt="Intro 3"/>
            </div>
            <div>
                <img src={intro4}  alt="Intro 4"/>
            </div>
            <div>
                <img src={intro5}  alt="Intro 5"/>
            </div>
        </Carousel>

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