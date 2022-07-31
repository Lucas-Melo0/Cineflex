import { useState } from "react";
export default function Seats({ value, setIsWarningVisible, setForm, form }) {
    const [buttonClass, setButtonClass] = useState("");

    function addForm(value) {

        let newForm = { idAssento: value.id, nome: "", cpf: "" }
        setForm([...form, newForm])

    }

    function ChangeSeatState(value) {
        if (value.isAvailable === true && buttonClass !== "selected") {
            setButtonClass("selected")
            setIsWarningVisible(false)
            addForm(value)
        }
        else if (value.isAvailable === false) {
            setIsWarningVisible(true)

        }
        if (buttonClass === "selected") {
            let message = window.confirm("Deseja realmente remover o assento");
            if (message === true) {
                setButtonClass("");
                let formUpdate = [...form]
                setForm(formUpdate.filter(element=> element.idAssento !== value.id))
            }
        }

    }
    return (
        <button onClick={() => ChangeSeatState(value)} className={`${value.isAvailable ? "seat true" : "seat false"} ${buttonClass}`}>{value.name}</button>
    )
}