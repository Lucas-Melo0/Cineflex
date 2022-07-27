import Footer from "../Footer/Footer";
import "./styles.css";
import axios from "axios";
import TimeButton from "./TimeButton";
import { useState, useEffect } from "react";
export default function SelectedMovie({ selectedId }) {

    const [movieData, setMovieData] = useState([]);
    
    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${selectedId}/showtimes`)
        promise.then((response) => setMovieData(response.data.days))

    }, [selectedId]);

    return (
        <>
            <div className="selectedMovie">
                <p>Selecione o horário</p>
                {movieData.map(value => {
                    return (
                        <div className="availability">
                            <div className="availableDate">
                                <p className="availableDay">{value.weekday} - {value.date}</p>
                                <TimeButton movieData={movieData}/>
                            </div>
                        </div>
                    )
                })}
            </div>
            <Footer />
        </>

    )
}