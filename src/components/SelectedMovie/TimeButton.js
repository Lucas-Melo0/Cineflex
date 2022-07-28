import { Link } from "react-router-dom";
import { useState } from "react";
export default function TimeButton({ movieInfo , selectedId, setTime}) {

    
    
    return (
        <>
            {movieInfo[0].showtimes.map(value => {
                return (
                    <Link to={`/assentos/${selectedId}`}>
                        <button onClick={() => setTime(value.name) } className="availabeTime">{value.name}  </button>
                    </Link>

                )
            })}

        </>

    )

}