import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import { SearchStudent } from './SearchStudent';
export const HeaderStudent = () => {
    return (
        <Navbar bg="light" data-bs-theme="light">
            <Container>
                <Nav>
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/add">ADD</Nav.Link>
                    <SearchStudent />

                </Nav>
            </Container>
        </Navbar>
    )
}