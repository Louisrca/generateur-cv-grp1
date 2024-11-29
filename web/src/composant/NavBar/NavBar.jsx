import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

function NavBar() {
  const { logout, user } = useAuth();

  return (
    <Navbar expand="lg" className="bg-dark navbar-dark">
      <Container fluid>
        <Navbar.Brand href="/">SimplyCV</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            {user ? (
              <>
                <Nav.Link as={NavLink} to="/" activeclassname="active">
                  Menu
                </Nav.Link>
                <Nav.Link as={NavLink} to="/my-cv" activeclassname="active">
                  Mes CV
                </Nav.Link>
                <Nav.Link as={NavLink} to="/profile" activeclassname="active">
                  Mon espace
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={NavLink} to="/" activeclassname="active">
                  Menu
                </Nav.Link>
                <Nav.Link
                  as={NavLink}
                  onClick={() => alert("Connectez-vous pour voir vos CV")}
                  activeclassname="active"
                >
                  Mes CV
                </Nav.Link>
                <Nav.Link
                  as={NavLink}
                  onClick={() =>
                    alert("Connectez-vous pour aller sur votre espace")
                  }
                  activeclassname="active"
                >
                  Mon espace
                </Nav.Link>
              </>
            )}
          </Nav>

          {user ? (
            <Button variant="danger" className="ms-2" onClick={logout}>
              {" "}
              logout
            </Button>
          ) : (
            <Nav>
              <Nav.Link as={NavLink} to="/register" activeclassname="active">
                Register
              </Nav.Link>
              <Nav.Link as={NavLink} to="/login" activeclassname="active">
                Login
              </Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
