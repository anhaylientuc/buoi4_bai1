import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
export const FooterStudent = () => {
    return (
        
        <Nav className='container'>
            <Nav.Link as={Link} to="/about">
                About
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
                Contact
            </Nav.Link>
            <Nav.Link as={Link} to="/social">
                Social
            </Nav.Link>
        </Nav>
    )

}