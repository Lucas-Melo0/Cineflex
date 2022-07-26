import "./assets/global.css/reset.css"
import "./assets/global.css/styles.css"
import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import SelectedMovie from "./components/SelectedMovie/SelectedMovie"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/movie/x" element={<SelectedMovie />} />
            </Routes>
            


        </Router>

    )
}