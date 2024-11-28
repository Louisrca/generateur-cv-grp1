import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

function NavBar() {
  const { logout } = useAuth();

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

            <Nav.Link as={NavLink} to="/" activeclassname="active">
              Menu
            </Nav.Link>
            <Nav.Link as={NavLink} to="/createcv" activeclassname="active">
              Mes CV
            </Nav.Link>
            <Nav.Link as={NavLink} to="/profile" activeclassname="active">
              Mon espace
            </Nav.Link>

          </Nav>

          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-light">Rechercher</Button>
          </Form>
          <Button variant="danger" className="ms-2" onClick={logout}>
            {" "}
            logout
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
