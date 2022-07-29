import { useState } from "react";
export default function Seats({ value, setIsWarningVisible }){

    const [buttonClass, setButtonClass] = useState("");
    function ChangeSeatState(value){
        if (value.isAvailable === true){
            setButtonClass("selected")
            setIsWarningVisible(false)
        }
        else if (value.isAvailable === false) {
            setIsWarningVisible(true)

        }
        if (buttonClass === "selected"){
            setButtonClass("");
        }

    }
    return (
        <button onClick={() => ChangeSeatState(value)} className={`${value.isAvailable ? "seat true" : "seat false"} ${buttonClass}`}>{value.name}</button>
    )
}