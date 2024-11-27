import NavBar from "../../composant/NavBar/NavBar";
import UserButton from "../../composant/UserButton/UserButton"; 
import UserForm from "../../composant/UserForm/UserForm";

export default function UserGestion(){   
    return(
        <div>
            <NavBar/>
            <div className="container">
                <UserForm/>
                <UserButton/>
            </div>
        </div>
    )
}