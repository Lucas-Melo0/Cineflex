import Footer from "../Footer/Footer";
import "./styles.css";
import axios from "axios";
import TimeButton from "./TimeButton";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
export default function SelectedMovie({ selectedId,movieData,setTime }) {

    const { movieId } = useParams()
    const [movieInfo, setMovieInfo] = useState([]);
    console.log(movieData)
    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${selectedId}/showtimes`)
        promise.then((response) => setMovieInfo(response.data.days))

    }, [selectedId]);

    return (
        <>
            <div className="selectedMovie">
                <p>Selecione o horário</p>
                {movieInfo.map((value,index )=> {
                    return (
                        <div className="availability">
                            <div className="availableDate">
                                <p className="availableDay">{value.weekday} - {value.date}</p>
                                <TimeButton key ={index} setTime={setTime} selectedId={selectedId} movieInfo={movieInfo}/>
                            </div>
                        </div>
                    )
                })}
            </div>
            <Footer selectedId={selectedId} movieData ={movieData}  />
        </>

    )
}