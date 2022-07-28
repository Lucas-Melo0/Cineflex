import { useState } from "react";
export default function Seats({ value }){

    const [buttonClass, setButtonClass] = useState("");
    function teste(value){
        setButtonClass("selected")
    }
    return (
        <button onClick={() => teste(value)} className={`${value.isAvailable ? "seat true" : "seat false"} ${buttonClass}`}>{value.name}</button>
    )
}