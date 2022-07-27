import "./styles.css"
import movie from "../Home/movie.png"
export default function Footer({ imageSource,selectedId }) {

   
    

    return (
        <footer>
            <div className="thumbnail">
                <img src={imageSource[selectedId-1].posterURL} alt="movie poster thumbnail"></img>
            </div>
            <div className="movieInfo">
                <p>{imageSource[selectedId-1].title}</p>
                <p></p>
            </div>

        </footer>
    )
}