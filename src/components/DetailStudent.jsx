import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { remove } from '../service/StudentService'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { getAll,edit } from '../service/StudentService'
import { useNavigate } from 'react-router-dom'
export const DetailStudent = () => {
    const students=getAll();
    const {id}=useParams()
    const [name, setname] = useState(students[id].name)
    const [age, setage] = useState(students[id].age)
    const [subject, setsubject] = useState(students[id].subject)
    const navigate=useNavigate();
    const handleRemove=()=>{
        remove(id);
        navigate('/')
    }
    const handleEdit=()=>{
        edit(id,{name,age,subject});
        navigate('/')
    }
    return (
        <Form>
            <Form.Group>
                <Form.Label>Name:</Form.Label>
                <Form.Control value={name} onChange={e => { setname(e.target.value) }}></Form.Control>
            </Form.Group>

            <Form.Group>
                <Form.Label>Age:</Form.Label>
                <Form.Control value={age} onChange={e => { setage(e.target.value) }}></Form.Control>
            </Form.Group>

            <Form.Group>
                <Form.Label>Subject:</Form.Label>
                <Form.Control value={subject} onChange={e => { setsubject(e.target.value) }}></Form.Control>
            </Form.Group>
            <Button variant='warning' onClick={handleEdit}>EDIT</Button>
            <Button variant='danger' onClick={handleRemove}>DELETE</Button>

        </Form>
    )

}