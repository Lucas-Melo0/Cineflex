import "./styles.css"
import { useNavigate, useLocation } from "react-router-dom"
export default function Header() {
    const location = useLocation();
    const navigate = useNavigate();
    return (
        <>
            <header>CINEFLEX</header>
            {
                location.pathname !== "/" && <ion-icon onClick={()=> navigate(-1)}name="arrow-back-circle"></ion-icon>
            }
               
        </>

    )
}