import "./styles.css";
import { useLocation } from "react-router-dom";
export default function Footer({ movieData,selectedId,time,weekday }) {

 
    const path= useLocation().pathname;

    return (
        <footer>
            <div className="thumbnail">
                <img src={movieData[selectedId-1].posterURL} alt="movie poster thumbnail"></img>
            </div>
            <div className="movieInfo">
                <p>{movieData[selectedId-1].title}</p>
                {
                path.includes(["/assentos"]) && <p>{weekday} - {time}</p>
                }
            </div>
        </footer>
    )
}