import { useGetUserById, useUpdateById } from "../../api/user/user";
import useAuth from "../../hooks/useAuth";
import Button from "react-bootstrap/Button";
import { useState } from "react";

function UserForm() {
  const [isEditing, setIsEditing] = useState(false);
  const user = useAuth();
  const { data: userInformation } = useGetUserById(user.user.id);
  const updateUser = useUpdateById();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    updateUser.mutate({ id: user.user.id, data });
  };

  return (
    <div>
      <div className="container">
        <h1>Bienvenue sur ton profil {userInformation?.name} !</h1>
        <Button variant="primary" onClick={() => setIsEditing(!isEditing)}>
          Gérer mes recommendations
        </Button>
        {isEditing ? (
          <>
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
          </>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="name">
              <h4>Prénom:</h4>
              <input type="text" name="name" />
            </div>
            <div className="lastname">
              <h4>Nom:</h4>
              <input type="text" name="lastname" />
            </div>
            <div className="Email">
              <h4>Email:</h4>
              <input type="text" name="email" />
            </div>
            <Button variant="primary" type="submit">
              Enregistrer
            </Button>
          </form>
        )}
      </div>
      <Button variant="outline-dark">Gérer mes recommendations</Button>
      <Button variant="outline-dark">Editer mon profil</Button>
    </div>
  );
}
export default UserForm;
