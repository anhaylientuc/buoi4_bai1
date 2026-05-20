import{useEffect, React} from "react";
import {
    Routes,
    Route,
    Link
} from "react-router-dom"

import { SearchStudent } from "./SearchStudent";
import { FormAdd } from "./FormAdd";
import { ListStudents } from "./ListStudents";
import { DetailStudent } from "./DetailStudent";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { HeaderStudent } from "./HeaderStudent";
import { FooterStudent } from "./FooterStudent";
import '../styles/app.css'
import { useSelector } from "react-redux";
import { LoginStudent } from "./LoginStudent";
import { useDispatch } from "react-redux";
import { setUser } from "../features/login/loginSlice";
export const App = () => {
    const dispatch = useDispatch();
    const isLogin = useSelector(state => state.auth.isLogin);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));

        if (user) {
            dispatch(setUser(user));
        }
    }, [dispatch]);
    
    return (
        isLogin?<>
            <HeaderStudent/>
            <Routes>
                <Route path="/" element={<ListStudents />}></Route>
                <Route path="/:id" element={<DetailStudent />}></Route>
                <Route path="/add" element={<FormAdd />}></Route>
            </Routes>
            <FooterStudent/>
        </>:<LoginStudent/>

    )
}