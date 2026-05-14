import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
export const ModalAdd = (props) => {
    const [name, setname] = useState('')
    const [age, setage] = useState('')
    const [classStudent, setclassStudent] = useState('')
    return (
        <Modal show={props.show}>

            <Modal.Header>
                Add student
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Label>Name:</Form.Label>
                        <Form.Control value={name} onChange={e=>{setname(e.target.value)}}></Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Age:</Form.Label>
                        <Form.Control value={age} onChange={e=>{setage(e.target.value)}}></Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Class:</Form.Label>
                        <Form.Control value={classStudent} onChange={e=>{setclassStudent(e.target.value)}}></Form.Control>
                    </Form.Group>

                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant='secondary' onClick={props.toggleModal}>Cancel</Button>
                <Button variant='primary' onClick={()=>{
                    const student={name:name,age:age,class:classStudent}
                    props.addStudent(student)
                    props.toggleModal()
                }}>Save changes</Button>
            </Modal.Footer>
        </Modal>

    )
}