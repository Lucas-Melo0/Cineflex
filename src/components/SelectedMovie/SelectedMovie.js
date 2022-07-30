import Footer from "../Footer/Footer";
import "./styles.css";
import axios from "axios";
import TimeButton from "./TimeButton";
import { useState, useEffect } from "react";
export default function SelectedMovie({ selectedId,movieData,setTime,setSessionId, setWeekday }) {

    
    const [movieInfo, setMovieInfo] = useState([]);
    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/movies/${selectedId}/showtimes`)
        promise.then((response) => setMovieInfo(response.data.days))

    }, [selectedId]);
    if (movieInfo.length === 0) {
        return (
            <>
                <div className="loader"></div>
            </>

        )
    }
    return (
        <>
            <div className="selectedMovie">
                <p>Selecione o horário</p>
                {movieInfo.map((value,index )=> {
                    return (
                        <div className="availability">
                            <div className="availableDate">
                                <p className="availableDay">{value.weekday} - {value.date}</p>
                                <TimeButton key ={index} setWeekday={setWeekday} value={value} setSessionId={setSessionId} setTime={setTime} selectedId={selectedId} movieInfo={movieInfo}/>
                            </div>
                        </div>
                    )
                })}
            </div>
            <Footer selectedId={selectedId} movieData ={movieData}  />
        </>

    )
}