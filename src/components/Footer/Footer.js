import "./styles.css"
import movie from "../Home/movie.png"
export default function Footer() {
    return (
        <footer>
            <div className="thumbnail">
                <img src={movie} alt="movie poster thumbnail"></img>
            </div>
            <div className="movieInfo">
                <p>Movie Name</p>
                <p></p>
            </div>

        </footer>
    )
}