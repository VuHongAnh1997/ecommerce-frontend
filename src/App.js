import './App.css';
import {
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Sidebar from "./component/Sidebar";
import Footer from "./component/Footer";
import Login from "./pages/Login";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/assets/scss/app.scss'

function App() {
    return (
        <div className="app">
            <Sidebar/>
            <div className="app__right">
                <Routes>
                    <Route index element={<Home/>}/>
                    <Route path="/login" element={<Login/>}/>
                </Routes>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
