import { Button, Form } from "react-bootstrap"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { loginAsync } from "../features/login/loginSlice"
export const LoginStudent =()=>{
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const dispatch=useDispatch();
    const onSubmit=()=>{
        console.log('login')
        dispatch(loginAsync({email,password}))
    }
    return(
        <Form>
            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control 
                    value={email}
                    onChange={e=>setemail(e.target.value)}
                type="email" placeholder="Enter email..."></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                    value={password}
                    onChange={e=>setpassword(e.target.value)}
                 type="password" placeholder="Enter password..."></Form.Control>
            </Form.Group>
            <Button variant="primary" onClick={onSubmit}>LOGIN</Button>
        </Form>
    )
}