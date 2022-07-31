import "./styles.css"
import Movie from "./Movie.js/Movie";


export default function Home( { setSelectedId,movieData }){
    
    return (
       <div className="home">
           <p>Selecione o filme</p>
           <div className="movies">
               {movieData.map((value,index)=>{
                   return <Movie key ={index} value={value} setSelectedId={setSelectedId}/>
               })}  
           </div>
       </div>
    )
}