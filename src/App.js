import "./assets/global.css/reset.css"
import "./assets/global.css/styles.css"
import Sessions from "./components/Sessions/Sessions"
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
                <Route path="/sessao/x" element ={<Sessions/>} />
            </Routes>
            


        </Router>

    )
}