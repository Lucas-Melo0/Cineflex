import "./assets/global.css/reset.css";
import "./assets/global.css/styles.css";
import Sessions from "./components/Sessions/Sessions";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import axios from "axios";
import SelectedMovie from "./components/SelectedMovie/SelectedMovie";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";


export default function App() {

    const [movieData, setMovieData] = useState([]);
    const [selectedId, setSelectedId] = useState(0);
    const [time, setTime] = useState("");

    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
        promise.then(response => {
            setMovieData(response.data);
        });
    }, []);


    
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home movieData ={movieData}setSelectedId={setSelectedId}/>} />
                <Route path="/sessoes/:movieId" element={<SelectedMovie setTime={setTime} selectedId={selectedId} movieData ={movieData}/>} />
                <Route path="/assentos/:idSessao" element ={<Sessions time={time} movieData={movieData} selectedId ={selectedId}/>} />
            </Routes>
            


        </Router>

    )
}