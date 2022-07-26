import "./styles.css"
import movie from "./movie.png"
export default function Home(){
    return (
       <div className="home">
           <p>Selecione o filme</p>
           <div className="movies">
               <div className="movie">
                   <img src={movie}alt="movie poster"></img>
               </div>
               <div className="movie"></div>
               <div className="movie"></div>
               <div className="movie"></div>
           </div>

       </div>
    )
}