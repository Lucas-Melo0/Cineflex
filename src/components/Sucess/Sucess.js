import "./styles.css";
import { useLocation, useNavigate } from "react-router-dom";
export default function Sucess({ selectedId, movieData }) {

    const navigate = useNavigate();
    const info = useLocation();
    console.log(info)


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
                    info.state.form.map(value => {
                        return <p className="movieInfo">Assento {value.idAssento % 50}</p>
                    })
                }
            </div>
            <div className="infoContainer">
                <p className="header">Comprador</p>
                {
                    info.state.form.map(value => {
                        return (
                            <>
                                <p className="movieInfo">Nome: {value.nome} </p>
                                <p className="movieInfo">CPF: {value.cpf}</p>
                            </>


                        )

                    })
                }

            </div>
            <div className="sucessButton">
                <button onClick={() => navigate(-3)}>Voltar para Home</button>
            </div>
        </div>

    )
}