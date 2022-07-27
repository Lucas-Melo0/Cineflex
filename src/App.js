import "./assets/global.css/reset.css";
import "./assets/global.css/styles.css";
import Sessions from "./components/Sessions/Sessions";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import SelectedMovie from "./components/SelectedMovie/SelectedMovie";
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import { useState } from "react";


export default function App() {

    const [selectedId, setSelectedId] = useState(0)

    function MoviePage(){
        let { movieId} = useParams()
    }
    
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home setSelectedId={setSelectedId}/>} />
                <Route path="/movie/:movieId" element={<SelectedMovie selectedId={selectedId}/>} />
                <Route path="/sessao/x" element ={<Sessions/>} />
            </Routes>
            


        </Router>

    )
}