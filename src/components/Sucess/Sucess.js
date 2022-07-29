import "./styles.css";
import { useLocation } from "react-router-dom";
export default function Sucess({userCPF, userName}) {

    const info = useLocation();
    return (
        <div className="sucessPage">
            <div className="sucessMessage">
                <p>Pedido feito com sucesso!</p>
            </div>
            <div className="infoContainer">
                <p className="header">Filme e sessão</p>
                <p className="movieInfo">{info.state.weekday}</p>
                <p className="movieInfo">{info.state.time}</p>
            </div>
            <div className="infoContainer">
                <p className="header">Ingressos</p>
                {
                    info.state.seatsNumber.map(value => {
                        return  <p className="movieInfo">Assento {value}</p>
                    })
                }
            </div>
            <div className="infoContainer">
                <p className="header">Comprador</p>
                <p className="movieInfo">Nome: {info.state.name} </p>
                <p className="movieInfo">CPF: {info.state.cpf}</p>
            </div>
        </div>

    )
}