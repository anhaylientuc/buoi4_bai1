import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { StudentService } from '../service/StudentService'
import { useNavigate } from 'react-router-dom'
export const DetailStudent = () => {
    const [name, setname] = useState('')
    const [age, setage] = useState('')
    const [subject, setsubject] = useState('')
    const { id } = useParams()
    const navigate = useNavigate();
    useEffect(() => {
        const fetchData = async () => {
            const student = await StudentService.getById(id)
            setname(student.name);
            setage(student.age)
            setsubject(student.subject)
        }
        fetchData();
    }, [])

    const handleRemove = async () => {
        await StudentService.remove(id);
        navigate('/')
    }
    const handleEdit = async () => {
        await StudentService.edit(id, { name, age, subject });
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