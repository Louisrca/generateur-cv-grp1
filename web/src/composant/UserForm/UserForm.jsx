import { useGetUserById } from "../../api/user/user";
import useAuth from "../../hooks/useAuth";

function UserForm() {
    const user=useAuth();
    const {data: userInformation} = useGetUserById(user.user.id)
   
    return(
        <div>
            <div className="container">
                <h1>Bienvenue sur ton profil {userInformation?.name} !</h1>
                <div className="name">
                    <h4>Prénom:</h4>
                    <p>{userInformation?.name}</p>
                </div>
                <div className="lastname">
                    <h4>Nom:</h4>
                    <p>{userInformation?.lastname}</p>
                </div>
                <div className="Email">
                    <h4>Email:</h4>
                    <p>{userInformation?.email}</p>
                </div>
            </div>
        </div>
    )
}
export default UserForm;
