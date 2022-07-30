import "./styles.css"
import { useNavigate } from "react-router-dom"
export default function Header({ selectedId }) {
    const navigate = useNavigate()
    return (
        <>
            <header>CINEFLEX</header>
            {
                selectedId > 0 && <ion-icon onClick={()=> navigate(-1)}name="arrow-back-circle"></ion-icon>
            }
               
        </>

    )
}