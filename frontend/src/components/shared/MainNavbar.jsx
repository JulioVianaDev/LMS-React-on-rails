import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'
function MainNavbar() {
  return (
    <>
       <Navbar bg='dark' variant='dark'>
      <Container>
        <Link to='/'><Navbar.Brand>Learn LMS</Navbar.Brand></Link>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav.Link>
            <Link to='/'>
              Home
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to='/courses'>
              Courses
            </Link>
          </Nav.Link>
          <Nav.Link>
            <Link to='/users'>
              Users
            </Link>
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default MainNavbar
