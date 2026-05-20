import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import { SearchStudent } from './SearchStudent';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { logout } from '../features/login/loginSlice';
export const HeaderStudent = () => {
    const username = useSelector(state => state.auth.username)
    const dispatch=useDispatch();
    const onLogout=()=>{
        localStorage.removeItem('user');
        dispatch(logout())
    }
    return (
        <Navbar bg="light" data-bs-theme="light">
            <Container>
                <Nav>
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/add">ADD</Nav.Link>
                    <SearchStudent />
                    Welcome<h2>{username}</h2>
                    <Button variant='danger' onClick={onLogout}>logout</Button>
                </Nav>
            </Container>
        </Navbar>
    )
}