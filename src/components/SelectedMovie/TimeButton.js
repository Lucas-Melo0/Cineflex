import { Link } from "react-router-dom";
export default function TimeButton({ movieInfo , selectedId, setTime,setSessionId, value, setWeekday }) {

    
    
    return (
        <>
            {movieInfo[0].showtimes.map(element => {
                return (
                    <Link to={`/assentos/${selectedId}`}>
                        <button onClick={() => {setTime(element.name);setSessionId(element.id);setWeekday(value.weekday)}} className="availabeTime">{element.name}  </button>
                    </Link>

                )
            })}

        </>

    )

}