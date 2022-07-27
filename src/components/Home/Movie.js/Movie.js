import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Movie({ setSelectedId }) {

    const [imageSource, setImageSource] = useState([]);

    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
        promise.then(response => {
            setImageSource(response.data);
        });
    }, []);

    return (

        <>
            {imageSource.map(value => {
                return (<div className="movie">
                    <Link to={`/movie/:${value.id}`}>
                        <img onClick={() => setSelectedId(value.id)} src={value.posterURL} alt="movie poster"></img>
                    </Link>

                </div>)
            })}



        </>

    )
}