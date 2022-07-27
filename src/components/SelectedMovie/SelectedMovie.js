import Footer from "../Footer/Footer"
import "./styles.css"
export default function SelectedMovie({selectedId}) {
    return (
        <>
            <div className="selectedMovie">
                <p>Selecione o horário</p>
                <div className="availability">
                    <div className="availableDate">
                        <p className="availableDay">Quinta-feira - 24/06/2021</p>
                        <button className="availabeTime">15:00</button>
                        <button className="availabeTime">15:00</button>
                    </div>


                </div>
            </div>
            <Footer />
        </>

    )
}