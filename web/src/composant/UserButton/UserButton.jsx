import Button from "react-bootstrap/Button";

function UserButton() {
  return (
    <>
        <Button
        variant="outline-dark"
        onClick={() => navigate(`/`)}
        >
            Gérer mes recommendations
        </Button>
        <Button
        variant="outline-dark"
        onClick={() => navigate(`/`)}
        >
            Editer mon profil
        </Button>
        </>
  );
}

export default UserButton;
