import { useState } from "react";
export default function Seats({ value, setIsWarningVisible, seatsId, setSeatsId, seatsNumber, setSeatsNumber }){
    const [buttonClass, setButtonClass] = useState("");
    function ChangeSeatState(value){
        if (value.isAvailable === true && buttonClass!== "selected"){
            setButtonClass("selected")
            setSeatsId([...seatsId,value.id])
            setSeatsNumber([...seatsNumber,value.name])
            setIsWarningVisible(false)
        }
        else if (value.isAvailable === false) {
            setIsWarningVisible(true)

        }
        if (buttonClass === "selected"){
            setButtonClass("");
            seatsId.pop()
            seatsNumber.pop()
           
        }

    }
    return (
        <button onClick={() => ChangeSeatState(value)} className={`${value.isAvailable ? "seat true" : "seat false"} ${buttonClass}`}>{value.name}</button>
    )
}