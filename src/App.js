import {
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Sidebar from "./component/sidebar/Sidebar";
import Footer from "./component/Footer";
import Login from "./pages/Login";
import '../src/assets/scss/app.scss'
import MenClothes from "./pages/MenClothes";
import ProductDetail from "./pages/ProductDetail";
import Clothes from "./pages/Clothes";
import Checkout from "./pages/Checkout";
import {useState} from "react";

function App() {

    const [isBlur, setIsBlur] = useState(false)
    return (
        <>
            <div className="app">

                <Sidebar setIsBlur={setIsBlur} />
                <div className="app__right">
                    <Routes>
                        <Route index element={<Home/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/men-clothes" element={<MenClothes/>}/>
                        <Route path="/product-detail" element={<ProductDetail/>}/>
                        <Route path="/clothes" element={<Clothes/>}/>
                        <Route path="/checkout" element={<Checkout/>}/>
                    </Routes>
                    <Footer/>
                </div>
            </div>
            {isBlur ? <div className='app_blur'/> : null}
        </>
    );
}

export default App;
