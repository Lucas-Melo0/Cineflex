import Footer from "../Footer/Footer";
import "./styles.css"
import axios from "axios";
import { useState, useEffect } from "react";
import Seats from "./Seats";
export default function Sessions({ movieData, selectedId,time }) {

    const [seatsInformation, setSeatsInformation] = useState([]);
    
    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${250}/seats`)
        promise.then((response) => setSeatsInformation(response.data.seats))
    }, [])
    
    
    
    return (
        <>
            <div className="movieSessions">
                <p>Selecione o(s) assento(s)</p>
                <div className="movieSeats">
                   
                    {seatsInformation.map((value, index) => {
                        return  <Seats value={value} />
                        
                    })}
                </div>
                <div className="seatsLabel">
                    <div>
                        <button className="seat false selected"></button>
                        <p>Selecionado</p>
                    </div>
                    <div>
                        <button className="seat true"></button>
                        <p>Disponível</p>
                    </div>
                    <div>
                        <button className="seat false"></button>
                        <p>Indisponível</p>
                    </div>
                </div>
                <div className="inputContainer">
                    <label>Nome do Comprador:</label>
                    <input placeholder="Digite seu nome..."></input>
                </div>
                <div className="inputContainer">
                    <label>CPF do Comprador:</label>
                    <input placeholder="Digite seu CPF..."></input>
                </div>
                <div className="buttonContainer">
                    <button>Reservar assento(s)</button>

                </div>

            </div>
            <Footer time={time} movieData={movieData} selectedId={selectedId} />
        </>

    )
}