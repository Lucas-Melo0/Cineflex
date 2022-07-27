import "./styles.css"
import Movie from "./Movie.js/Movie";


export default function Home( {setSelectedId}){
    
    return (
       <div className="home">
           <p>Selecione o filme</p>
           <div className="movies">
               <Movie setSelectedId={setSelectedId}/>
           </div>

       </div>
    )
}