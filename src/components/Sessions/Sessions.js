import Footer from "../Footer/Footer";
import "./styles.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Seats from "./Seats";
export default function Sessions({ movieData, selectedId, time, sessionId, weekday }) {

    const [seatsInformation, setSeatsInformation] = useState([]);
    const [seatsId, setSeatsId] = useState([]);
    const [seatsNumber, setSeatsNumber] = useState([]);
    const [isWarningVisible, setIsWarningVisible] = useState(false);
    const [form, setForm] = useState([])
    //eslint-disable-next-line 
    const validateCPF = new RegExp("([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})")
    const validateName = new RegExp(".{3,}");
    let navigate = useNavigate();
    console.log(form.map(value =>value.idAssento))
 
    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${sessionId}/seats`)
        promise.then((response) => setSeatsInformation(response.data.seats))
    }, [sessionId])

    if (seatsInformation.length === 0) {
        return <div className="loader"></div>
    }

    function handleSubmit(e) {
        e.preventDefault();
        const send = axios.post("https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many",
            {
                ids: form.map(value =>value.idAssento),
                compradores: [
                    form
                ]
            });
        send.then((response) => {
            console.log(response)
            navigate('/sucesso', {
                state: {
                    form:form,
                    weekday: weekday,
                    time: time,
                }
            })
        }
        )
    }

    const handleFormChange = (index, event) => {
        let data = [...form];
        data[index][event.target.name] = event.target.value;
        setForm(data);

    }


    return (
        <>
            <div className="movieSessions">
                <p>Selecione o(s) assento(s)</p>
                <div className="movieSeats">

                    {seatsInformation.map((value, index) => {
                        return <Seats key={index}
                            setSeatsId={setSeatsId}
                            setIsWarningVisible={setIsWarningVisible}
                            value={value}
                            seatsId={seatsId}
                            setSeatsNumber={setSeatsNumber}
                            seatsNumber={seatsNumber}
                            setForm={setForm}
                            form={form} />
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
                <form onSubmit={handleSubmit}>
                    {
                        form.map((value, index) => {
                            return (

                                <div key={index} className="inputContainer">
                                    <p>Assento {value.idAssento % 50} </p>
                                    <label htmlFor="username">Nome do Comprador:</label>
                                    <input
                                        id="username"
                                        name="nome"
                                        value={value.nome}
                                        onChange={event => handleFormChange(index, event)}
                                        placeholder="Digite seu nome..."
                                    >
                                    </input>
                                    <label htmlFor="userCPF">CPF do Comprador:</label>
                                    <input id="userCPF"
                                        name="cpf"
                                        value={value.cpf}
                                        type="text"
                                        //eslint-disable-next-line 
                                        pattern={"([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})"}
                                        onChange={event => handleFormChange(index, event)}
                                        placeholder="Digite seu CPF..."
                                        required
                                        onInvalid={e => e.target.setCustomValidity('Digite um CPF válido')}>
                                    </input>

                                </div>


                            )
                        })
                    }
                    <div className="buttonContainer">
                        <button>Reservar assento(s)</button>
                    </div>
                </form>
            </div>
            <Footer weekday={weekday} time={time} movieData={movieData} selectedId={selectedId} />
        </>

    )
}