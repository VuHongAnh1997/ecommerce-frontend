import React from "react";
import '../assets/scss/component/footer/footer.scss'
import {Col, Row} from "reactstrap";

const Footer = () => {

    const INFO = [
        {style: ["mb-2", "text-white"], text: "MUA HÀNG TRỰC TUYẾN"},
        {style: ["text-warning", "fz-16"], text: "0938.803.633"},
        {style: ["text-warning", "fz-16"], text: "1900.633.501"},
        {style: ["text-white"], text: "sale.online@todoshop.vn"}
    ]

    const INTRO = ["Giới thiệu", "Liên hệ công ty", "Đối tác", "Tuyển dụng"];
    const POLICY = ["Chính sách đổi hàng", "Chính sách bảo hành", "Chính sách bảo mật", "Chính sách hoàn tiền"];

    return (
        <section className="footer p-md-5 px-3 py-4">
            <Row>
                <Col md={6} lg={4}>
                    {INFO.map((item, index) => (
                        <div key={index + "INFO"} className={item.style.toString().split(",").join(" ")}>{item.text}</div>
                    ))}
                </Col>
                <Col md={6} lg={2} className="col-2">
                    <div className="text-white mb-2">HOTLINE GÓP Ý</div>
                    <ul className="list-unstyled">
                        <li className="text-warning">0908.18.12.89</li>
                        <li className="text-white">cskh@todoshop.vn</li>
                    </ul>
                </Col>
                <Col md={12} lg={2}>
                    <h4 className="text-white mb-2">Thông tin</h4>
                    <ul className="list-unstyled text-white">
                        {INTRO.map((item, key) => (
                            <li key={"INTRO" + key}>{item}</li>
                        ))}
                    </ul>
                </Col>
                <Col md={12} lg={2}>
                    <h4 className="text-white mb-2">Chính sách</h4>
                    <ul className="list-unstyled text-white">
                        {POLICY.map((item, key) => (
                            <li>{item}</li>
                        ))}
                    </ul>
                </Col>
                <Col md={12} lg={2}>
                    <h4 className="text-white mb-2">FAQ</h4>
                    <ul className="list-unstyled text-white">
                        <li>Thanh toán và vận chuyển</li>
                        <li>Hướng dẫn chọn size</li>
                        <li>Kiểm tra thông tin đơn hàng</li>
                        <li>Câu hỏi thường gặp</li>
                    </ul>
                </Col>
            </Row>
        </section>
    )
}

export default Footer