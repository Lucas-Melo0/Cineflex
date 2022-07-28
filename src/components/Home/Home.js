import "./styles.css"
import Movie from "./Movie.js/Movie";


export default function Home( { setSelectedId,movieData }){
    
    return (
       <div className="home">
           <p>Selecione o filme</p>
           <div className="movies">
               <Movie movieData={movieData} setSelectedId={setSelectedId}/>
           </div>
       </div>
    )
}