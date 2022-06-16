import React, {useEffect} from "react";
import Banner from "../component/Banner";
import '../assets/scss/pages/men-clothes.scss'
import product1 from '../assets/images/pages/men-clothes/product1.jpg'
import product2 from '../assets/images/pages/men-clothes/product2.jpg'
import product3 from '../assets/images/pages/men-clothes/product3.jpg'
import product4 from '../assets/images/pages/men-clothes/product4.jpg'
import Header from "../component/Header";
import {useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getCategoriesByMenuPath} from "../store/actions/categoryAction";
import {Col, Container, Row} from "reactstrap";


const MenClothes = () => {

    const dispatch = useDispatch()
    const {pathname} = useLocation();
    const {menuPaths} = useSelector(state => state.user)
    const {categories} = useSelector(state => state.category)

    useEffect(() => {
        const id = menuPaths.find(item => item.path === pathname)
        if (id) {
            // get category by menupath
            dispatch(getCategoriesByMenuPath(id))
        }

    }, [pathname])

    return (
        <div className="men-clothes">
            <Banner/>

            <div className="men-clothes__main">

                <Header/>

                {/*component riêng*/}
                <Container className="products">
                    <Row>
                        <Col className="product" xs={4}>
                            <div className="product_main">
                                <img src={product1} alt=""/>
                            </div>
                            <div className="product-price">285,000 ₫</div>
                        </Col>
                        <Col className="product" xs={4}>
                            <div className="product_main">
                                <img src={product2} alt=""/>
                            </div>
                            <div className="product-price">285,000 ₫</div>
                        </Col>
                        <Col className="product" xs={4}>
                            <div className="product_main">
                                <img src={product3} alt=""/>
                            </div>
                            <div className="product-price">285,000 ₫</div>
                        </Col>
                        <Col className="product" xs={4}>
                            <div className="product_main">
                                <img src={product4} alt=""/>
                            </div>
                            <div className="product-price">385,000 ₫</div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default MenClothes