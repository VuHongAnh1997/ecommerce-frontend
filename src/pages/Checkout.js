import React from "react";
import {Button, Col, Row, Table} from "reactstrap";
import {Field, Form, Formik} from 'formik';
import '../assets/scss/pages/checkout.scss'

const Checkout = () => {

    return (
        <Formik
            initialValues={{
                name: '',
                email: '',
                lastName: '',
                promoCode: ''

            }}
            onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 500));
                alert(JSON.stringify(values, null, 2));
            }}
        >
            <Form className="checkout-container px-2">
                <h4 className="py-3 border-bottom fw-bold">Thanh toán giỏ hàng</h4>
                <Row className="mt-3">
                    <Col md={6} lg={4}>
                        <h5 className="fw-bold">Thông tin hóa đơn</h5>
                        <div className="mb-3">
                            <div className="mb-1">Họ và tên<span className="text-danger">*</span></div>
                            <Field id="name" name="name" className="w-100"/>
                        </div>
                        <Row className="mb-3">
                            <Col>
                                <div className="mb-1">Email<span className="text-danger">*</span></div>
                                <Field id="email" name="email"/>
                            </Col>
                            <Col>
                                <div className="mb-1">Số điện thoại<span className="text-danger">*</span></div>
                                <Field id="phone" name="phone"/>
                            </Col>
                        </Row>
                        <div className="mb-3">
                            <div className="mb-1">Địa chỉ<span className="text-danger">*</span></div>
                            <Field id="address" name="address"/>
                        </div>
                        <Row className="mb-3">
                            <Col>
                                <div className="mb-1">Tỉnh / Thành phố<span className="text-danger">*</span></div>
                                <Field name="province" as="select" className="my-select">
                                    <option value="red">Red</option>
                                    <option value="green">Green</option>
                                    <option value="blue">Blue</option>
                                </Field>
                            </Col>
                            <Col>
                                <div className="mb-1">Quận / Huyện<span className="text-danger">*</span></div>
                                <Field name="district" as="select" className="my-select">
                                    <option value="red">Red</option>
                                    <option value="green">Green</option>
                                    <option value="blue">Blue</option>
                                </Field>
                            </Col>
                        </Row>
                        <div className="mb-3">
                            <div className="mb-1">Phường / Xã<span className="text-danger">*</span></div>
                            <Field name="ward" as="select" className="my-select">
                                <option value="red">Red</option>
                                <option value="green">Green</option>
                                <option value="blue">Blue</option>
                            </Field>
                        </div>
                        <div className="mb-3">
                            <Field as="textarea" name="note" placeholder="Ghi chú đơn hàng"/>
                        </div>
                    </Col>
                    <Col md={6} lg={4}>
                        <h5 className="fw-bold">Phương thức thanh toán</h5>
                        <div>Thanh toán tiền mặt khi nhận hàng (COD)</div>
                    </Col>
                    <Col md={6} lg={4} className="cart-info">
                        <h5 className="fw-bold">Thông tin giỏ hàng</h5>
                        <Table responsive>
                            <thead>
                            <tr>
                                <th>Tên sản phẩm</th>
                                <th>Số lượng</th>
                                <th>Giá</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>
                                    <a href="#">
                                        <img style={{width: "40px", height: "60px"}}
                                             src="https://img.cdn.vncdn.io/nvn/ncdn/store/7136/ps/20220122/22012022120122_ao_khoac_da_doi_D1AKA01201FOSBB_toto_shop__8__thumb.jpg"
                                             alt=""/>
                                        ÁO KHOÁC D1AKA01201FOSBB - BL - L
                                    </a>
                                </td>
                                <td>2</td>
                                <td>
                                    1,160,000 VND
                                </td>
                            </tr>
                            </tbody>
                        </Table>
                        <div className="d-flex align-items-center justify-content-between py-2 border-bottom">
                            <div>Tạm tính</div>
                            <div>1,730,000 VND</div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between py-2 border-bottom">
                            <div>Phí vận chuyển</div>
                            <div>0 VND</div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between py-2 border-bottom">
                            <div>Tổng cộng</div>
                            <div>1,730,000 VND</div>
                        </div>
                        <div className="mt-3">Nhập mã ưu đãi</div>
                        <div className="d-flex promotion">
                            <Field id="promoCode" name="promoCode"/>
                            <Button secondary>Áp dụng</Button>
                        </div>
                        <div className="mt-3">
                            <Button className="d-block w-100 mb-3">Tiếp tục mua hàng</Button>
                            <Button className="d-block w-100">Tiến hành thanh toán</Button>
                        </div>
                    </Col>
                </Row>
                <button type="submit">Submit</button>
            </Form>
        </Formik>

    )
}

export default Checkout