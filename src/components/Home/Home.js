import "./styles.css"
import Movie from "./Movie.js/Movie";


export default function Home( { setSelectedId,imageSource }){
    
    return (
       <div className="home">
           <p>Selecione o filme</p>
           <div className="movies">
               <Movie imageSource={imageSource} setSelectedId={setSelectedId}/>
           </div>

       </div>
    )
}