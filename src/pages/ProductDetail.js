import React, {useState} from "react";
import '../assets/scss/pages/product-detail.scss'
import product1 from '../assets/images/pages/men-clothes/product1.jpg'
import product1_2 from '../assets/images/pages/men-clothes/product1-2.jpg'
import store from '../assets/images/pages/product-details/store.png'
import {Button} from "react-bootstrap";
import {Formik, Field, Form} from 'formik';

const SIZE = ["M", "L", "XL"]

const ProductDetail = () => {

    const [size, setSize] = useState("M")

    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                size: 'M'
            }}
            onSubmit={async (values) => {
                alert(JSON.stringify(values, null, 2));
            }}>
            {({values}) => (
                <Form>
                    <section className="product-detail">

                        {/*breadcrumb*/}
                        <ul className="breadcrumb">
                            <li><a href="#">Trang chủ</a></li>
                            <li><a href="#">Sản phẩm</a></li>
                            <li><a href="#">Đồ nam</a></li>
                            <li><a href="#">Áo thun</a></li>
                        </ul>

                        <section className="product-detail__main">

                            <section className="info d-flex">

                                <div className="info__left">
                                    <img src={product1} alt=""/>
                                </div>
                                <div className="info__right">
                                    <h4>ÁO THUN U1ATN11102FOSHT</h4>
                                    <div className="info__right__price">285,000₫</div>
                                    <div className="mt-1">Hướng dẫn chọn size</div>
                                    <div className="mt-1 mb-2">Màu sắc:</div>
                                    {/*list color*/}
                                    <div className="d-flex info__right_color">
                                        <a className="active">
                                            <img src={product1_2} alt=""/>
                                        </a>

                                    </div>
                                    <div className="d-flex my-3">
                                        <div className="info__right__size">
                                            <div>Kích cỡ:</div>
                                            <div className="d-flex" role="group" aria-labelledby="my-radio-group">
                                                {
                                                    SIZE.map(item => (
                                                        <label className="mx-3 d-block">
                                                            <Field type="radio" name="size"
                                                                   value={item}/>
                                                            <span>{item}</span>
                                                        </label>
                                                    ))
                                                }
                                            </div>
                                        </div>

                                        <div>
                                            <div>Số lượng:</div>
                                            <div>1</div>
                                        </div>
                                    </div>
                                    <div className="my-2 btn-action">
                                        <Button color="primary" className="add-to-cart">THÊM VÀO GIỎ</Button>
                                        <Button color="primary">MUA NGAY</Button>
                                    </div>
                                    <div
                                        className="d-flex align-items-center justify-content-center list-store px-4 my-4">
                                        <img src={store} alt=""/>
                                        <span>Đang có tại các cửa hàng</span>
                                    </div>

                                    <div className="info__right__note">
                                        <p>» BẢO HÀNH SẢN PHẨM 90 NGÀY</p>
                                        <p>» ĐỔI HÀNG TRONG VÒNG 30 NGÀY</p>
                                        <p>» HOTLINE BÁN HÀNG 1900 633 501</p>
                                    </div>
                                </div>
                            </section>

                            <section className="description">

                            </section>
                        </section>
                    </section>
                </Form>
            )}

        </Formik>
    )
}

export default ProductDetail