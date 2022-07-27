import "./assets/global.css/reset.css";
import "./assets/global.css/styles.css";
import Sessions from "./components/Sessions/Sessions";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import axios from "axios";
import SelectedMovie from "./components/SelectedMovie/SelectedMovie";
import { BrowserRouter as Router, Routes, Route, useParams } from "react-router-dom";
import { useState, useEffect } from "react";


export default function App() {

    const [imageSource, setImageSource] = useState([]);
    
    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
        promise.then(response => {
            setImageSource(response.data);
        });
    }, []);

    const [selectedId, setSelectedId] = useState(0)

    function MoviePage(){
        let { movieId} = useParams()
    }
    
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home imageSource ={imageSource}setSelectedId={setSelectedId}/>} />
                <Route path="/movie/:movieId" element={<SelectedMovie selectedId={selectedId} imageSource ={imageSource}/>} />
                <Route path="/sessao/x" element ={<Sessions/>} />
            </Routes>
            


        </Router>

    )
}