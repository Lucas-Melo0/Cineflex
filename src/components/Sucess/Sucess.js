import "./styles.css";
import { useLocation, useNavigate } from "react-router-dom";
export default function Sucess({selectedId, movieData, setSelectedId }) {

    const navigate = useNavigate();
    const info = useLocation();


    return (
        <div className="sucessPage">
            <div className="sucessMessage">
                <p>Pedido feito com sucesso!</p>
            </div>
            <div className="infoContainer">
                <p className="header">Filme e sessão</p>
                <p className="movieInfo">{movieData[selectedId - 1].title}</p>
                <p className="movieInfo">{info.state.weekday} {info.state.time}</p>
            </div>
            <div className="infoContainer">
                <p className="header">Ingressos</p>
                {
                    info.state.seatsNumber.map(value => {
                        return <p className="movieInfo">Assento {value}</p>
                    })
                }
            </div>
            <div className="infoContainer">
                <p className="header">Comprador</p>
                <p className="movieInfo">Nome: {info.state.name} </p>
                <p className="movieInfo">CPF: {info.state.cpf}</p>
            </div>
            <div className="sucessButton">
                <button onClick={()=> navigate(-3)}>Voltar para Home</button>
            </div>
        </div>

    )
}