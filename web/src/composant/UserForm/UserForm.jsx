import { useGetUserById, useUpdateById } from "../../api/user/user";
import useAuth from "../../hooks/useAuth";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import styles from "./UserForm.module.css";
import { Link } from "react-router-dom"; // Import Link

function UserForm() {
  const [isEditing, setIsEditing] = useState(false);
  const user = useAuth();
  const { data: userInformation } = useGetUserById(user.user.id);
  const updateUser = useUpdateById(user.user.id);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data);

    updateUser.mutate(data);
  };

  return (
    <div>
      <div className={styles.container}>
        <h1>Bienvenue sur ton profil {userInformation?.name} !</h1>

        {isEditing ? (
          <form onSubmit={handleSubmit} className={styles.userForm}>
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
            <Button
              variant="primary"
              style={{ margin: "1.5rem" }}
              type="submit"
            >
              Enregistrer
            </Button>
          </form>
        ) : (
          <div className={styles.userForm}>
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
        )}
        <Button
          variant="primary"
          style={{ margin: "2.5rem" }}
          onClick={() => setIsEditing(!isEditing)}
        >
          {isEditing ? "Annuler" : "Editer"}
        </Button>
      </div>
      <Link to={`/profile/recommendation/${user.user.id}`}>
        <Button variant="outline-dark">Gérer mes recommendations</Button>
      </Link>
    </div>
  );
}
export default UserForm;
