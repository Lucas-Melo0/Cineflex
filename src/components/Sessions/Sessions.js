import Footer from "../Footer/Footer";
import "./styles.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Seats from "./Seats";
export default function Sessions({ movieData, selectedId, time, sessionId, weekday }) {

    const [seatsInformation, setSeatsInformation] = useState([]);
    const [isWarningVisible, setIsWarningVisible] = useState(false);
    const [form, setForm] = useState([]);
    const [checked, setChecked] = useState(false);
    //eslint-disable-next-line 
    const validateCPF = new RegExp("([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})")
    const validateName = new RegExp(".{3,}");
    let navigate = useNavigate();

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${sessionId}/seats`)
        promise.then((response) => setSeatsInformation(response.data.seats))
    }, [sessionId])

    if (seatsInformation.length === 0) {
        return <div className="loader"></div>
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (form.length !== 0) {
            const send = axios.post("https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many",
                {
                    ids: form.map(value => value.idAssento),
                    compradores: [
                        form
                    ]
                });
            send.then((response) => {
                console.log(response)
                navigate('/sucesso', {
                    state: {
                        form: form,
                        weekday: weekday,
                        time: time,
                    }
                })
            }
            )
        }
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
                            setIsWarningVisible={setIsWarningVisible}
                            value={value}
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
                                    {checked && !validateName.test(value.nome) && <p className="warning">Digite um nome válido</p>}
                                    <label htmlFor="userCPF">CPF do Comprador:</label>
                                    <input id="userCPF"
                                        name="cpf"
                                        value={value.cpf}
                                        //eslint-disable-next-line 
                                        pattern={"([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})"}
                                        onChange={event => handleFormChange(index, event)}
                                        placeholder="Digite seu CPF..."
                                        required
                                        onInvalid={e => e.target.setCustomValidity('Digite um CPF válido')}
                                        onInput={e => e.target.setCustomValidity('')}>
                                    </input>
                                    {checked && !validateCPF.test(value.cpf) && <p className="warning">Digite um CPF válido</p>}
                                </div>


                            )
                        })
                    }
                    {
                    form.length === 0 ? <div className="fakeButtonContainer">
                        <button >Reservar assento(s)</button>
                    </div> : <div className="buttonContainer">
                        <button onClick={() => setChecked(true)} type="submit">Reservar assento(s)</button>
                    </div>
                    }
                </form>
            </div>
            <Footer weekday={weekday} time={time} movieData={movieData} selectedId={selectedId} />
        </>

    )
}