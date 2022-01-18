import React from "react";
import Banner from "../component/Banner";
import '../assets/scss/pages/men-clothes.scss'
import {Col, Row} from "reactstrap";
import product1 from '../assets/images/pages/men-clothes/product1.jpg'
import product2 from '../assets/images/pages/men-clothes/product2.jpg'
import product3 from '../assets/images/pages/men-clothes/product3.jpg'
import product4 from '../assets/images/pages/men-clothes/product4.jpg'


const MenClothes = () => {

    return (
        <div className="men-clothes">
            <Banner/>

            <div className="men-clothes__main">
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

                {/*component riêng*/}
                <div className="products">
                    <div className="d-flex justify-content-between">
                        <div className="product">
                            <div className="product_main">
                                <img src={product1} alt=""/>
                                <div className="d-flex justify-content-between bg-white position-absolute product_swatch">
                                    <img src={product2} alt=""/>
                                    <img src={product2} alt=""/>
                                    <img src={product2} alt=""/>
                                </div>
                            </div>
                            <div className="product-price">285,000 ₫</div>
                        </div>
                        <div className="product">
                            <img src={product2} alt=""/>
                            <div className="product-price">285,000 ₫</div>
                        </div>
                        <div className="product">
                            <img src={product3} alt=""/>
                            <div className="product-price">285,000 ₫</div>
                        </div>
                        <div className="product">
                            <img src={product4} alt=""/>
                            <div className="product-price">385,000 ₫</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenClothes