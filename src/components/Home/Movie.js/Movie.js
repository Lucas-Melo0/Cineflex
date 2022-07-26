import { Link } from "react-router-dom";

export default function Movie({ setSelectedId, value}) {


    return (
        <>
            <div className="movie">
                <Link to={`/sessoes/${value.id}`}>
                    <img onClick={() => setSelectedId(value.id)} 
                    src = {value.posterURL} 
                    alt = "movie poster"></img>
                </Link>

            </div>
        </>
    )
}
