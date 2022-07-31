import { useState } from "react";
export default function Seats({ value, setIsWarningVisible, seatsNumber, setSeatsNumber, setForm, form}){
    const [buttonClass, setButtonClass] = useState("");

    function addForm(value){

        let newForm = {idAssento:value.id ,nome: "", cpf:""}
        setForm([...form,newForm])
        console.log(form)

    }

    function ChangeSeatState(value){
        if (value.isAvailable === true && buttonClass!== "selected"){
            setButtonClass("selected")
            setSeatsNumber([...seatsNumber,value.name])
            setIsWarningVisible(false)
            addForm(value)
        }
        else if (value.isAvailable === false) {
            setIsWarningVisible(true)

        }
        if (buttonClass === "selected"){
            setButtonClass("");
            seatsNumber.pop()
            let formUpdate = [...form]
            formUpdate.pop()
            setForm(formUpdate)
        }

    }
    return (
        <button onClick={() => ChangeSeatState(value)} className={`${value.isAvailable ? "seat true" : "seat false"} ${buttonClass}`}>{value.name}</button>
    )
}