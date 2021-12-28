import React from "react";
import '../assets/scss/component/footer/footer.scss'

const Footer = () => {

    return (
        <div className="footer p-5">
            <div className="row">
                <div className="col-4">
                    <div className="text-white mb-2">MUA HÀNG TRỰC TUYẾN</div>
                    <div className="text-warning">0938.803.633</div>
                    <div className="text-warning">1900.633.501</div>
                    <div className="text-white">sale.online@todoshop.vn</div>
                </div>
                <div className="col-2">
                    <div className="text-white mb-2">HOTLINE GÓP Ý</div>
                    <ul className="list-unstyled">
                        <li className="text-warning">0908.18.12.89</li>
                        <li className="text-white">cskh@todoshop.vn</li>
                    </ul>
                </div>
                <div className="col-2">
                    <h4 className="text-white mb-2">Thông tin</h4>
                    <ul className="list-unstyled text-white-50">
                        <li>Giới thiệu</li>
                        <li>Liên hệ công ty</li>
                        <li>Đối tác</li>
                        <li>Tuyển dụng</li>
                    </ul>
                </div>
                <div className="col-2">
                    <h4 className="text-white mb-2">Chính sách</h4>
                    <ul className="list-unstyled text-white-50">
                        <li>Chính sách đổi hàng</li>
                        <li>Chính sách bảo hành</li>
                        <li>Chính sách bảo mật</li>
                        <li>Chính sách hoàn tiền</li>
                    </ul>
                </div>
                <div className="col-2">
                    <h4 className="text-white mb-2">FAQ</h4>
                    <ul className="list-unstyled text-white-50">
                        <li>Thanh toán và vận chuyển</li>
                        <li>Hướng dẫn chọn size</li>
                        <li>Kiểm tra thông tin đơn hàng</li>
                        <li>Câu hỏi thường gặp</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer