import "./assets/global.css/reset.css";
import "./assets/global.css/styles.css";
import Sessions from "./components/Sessions/Sessions";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Sucess from "./components/Sucess/Sucess";
import axios from "axios";
import SelectedMovie from "./components/SelectedMovie/SelectedMovie";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";


export default function App() {

    const [movieData, setMovieData] = useState([]);
    const [selectedId, setSelectedId] = useState(0);
    const [time, setTime] = useState("");
    const [sessionId, setSessionId] = useState(0);
    const [weekday, setWeekday] = useState("");

    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v7/cineflex/movies");
        promise.then(response => {
            setMovieData(response.data);
        });
    }, []);
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<Home movieData={movieData} setSelectedId={setSelectedId} />} />
                <Route path="/sessoes/:movieId" element={<SelectedMovie setWeekday={setWeekday} setSessionId={setSessionId} setTime={setTime} selectedId={selectedId} movieData={movieData} />} />
                <Route path="/assentos/:idSessao" element={<Sessions weekday={weekday} sessionId={sessionId} time={time} movieData={movieData} selectedId={selectedId} />} />
                <Route path="/sucesso" element={<Sucess movieData={movieData} selectedId={selectedId} setSelectedId={setSelectedId} />} />
            </Routes>
        </>



    )
}