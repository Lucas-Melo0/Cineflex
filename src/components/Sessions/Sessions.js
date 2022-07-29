import Footer from "../Footer/Footer";
import "./styles.css"
import axios from "axios";
import { useState, useEffect } from "react";
import Seats from "./Seats";
export default function Sessions({ movieData, selectedId, time, sessionId, weekday }) {

    const [seatsInformation, setSeatsInformation] = useState([]);
    const [isWarningVisible, setIsWarningVisible] = useState(false);
    const [userName, setUserName] = useState("");
    const [userCPF, setUserCPF] = useState("");
    const [userNameError, setUserNameError] = useState(false);
    const [userCPFError, setUserCPFError] = useState(false);
    const validateCPF = new RegExp("([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})")
    const validateName = new RegExp(".{8,}");

    const validate = () => {
        if (!validateName.test(userName)) {
            setUserNameError(true)
        } else {
            setUserNameError(false)
        }

        if (!validateCPF.test(userCPF)) {
            setUserCPFError(true)
        } else {
            setUserCPFError(false)
        }

    }

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessionId}/seats`)
        promise.then((response) => setSeatsInformation(response.data.seats))
    }, [sessionId])

    function handeSubmit(e) {
        e.preventDefault();

    }
    return (
        <>
            <div className="movieSessions">
                <p>Selecione o(s) assento(s)</p>
                <div className="movieSeats">

                    {seatsInformation.map((value, index) => {
                        return <Seats key={index} setIsWarningVisible={setIsWarningVisible} value={value} />
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
                {
                    isWarningVisible ? <p className="warning">Esse assento não está disponivel</p> : null
                }
                <form onSubmit={handeSubmit}>
                    <div className="inputContainer">
                        <label htmlFor="username">Nome do Comprador:</label>
                        <input id="username"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            placeholder="Digite seu nome..."
                            required onInvalid={e => e.target.setCustomValidity('Digite seu nome')}>
                        </input>
                        {userNameError && <p>Digite um nome válido</p>}
                    </div>
                    <div className="inputContainer">
                        <label htmlFor="userCPF">CPF do Comprador:</label>
                        <input id="userCPF"
                            value={userCPF}
                            onChange={(e) => setUserCPF(e.target.value)}
                            placeholder="Digite seu CPF..."
                            required onInvalid={e => e.target.setCustomValidity('Digite um CPF válido')}>
                        </input>
                        {userCPFError && <p>Digite um CPF válido</p>}
                    </div>
                    <div className="buttonContainer">
                        <button onClick={validate}>Reservar assento(s)</button>
                    </div>
                </form>

            </div>
            <Footer weekday={weekday} time={time} movieData={movieData} selectedId={selectedId} />
        </>

    )
}