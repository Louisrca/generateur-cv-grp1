import { useGetUserById } from "../../api/user/user";
import NavBar from "../../composant/NavBar/NavBar";
import useAuth from "../../hooks/useAuth";

export default function UserGestion(){
    const user=useAuth();
    const {data: userInformation} = useGetUserById(user.user.id)
   
    return(
        <div>
            <NavBar/>
            Bonjour {userInformation.name}
        </div>
    )
}