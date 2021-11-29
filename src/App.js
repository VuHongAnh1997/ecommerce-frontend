import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Home from "./pages/Home";
import Sidebar from "./component/Sidebar";
import Footer from "./component/Footer";
import Login from "./pages/Login";
import './assets/scss/app.scss'

function App() {
    return (
        <div className="app">
            <Sidebar />
            <div className="main">
                <Routes>
                    <Route index element={<Home/>}/>
                    <Route path="/login" element={<Login/>} />
                </Routes>
                <Footer />
            </div>
        </div>
    );
}

export default App;
