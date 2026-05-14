import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

import { students } from '../service/getAll.js'
import { useEffect, useState } from 'react';
import { ModalAdd } from './ModalAdd.jsx';
export const ListStudents = () => {
    const [list, setlist] = useState([])
    const [show, setshow] = useState(false)
    useEffect(() => {
        setlist([...students])
    }, [])
    const addStudent = (e) => {
        setlist([...list,e]);
    }
    const toggleModal=()=>{
        setshow(!show);
    }
    return (
        <Stack className='container' direction='horizontal'>
            <ModalAdd show={show} addStudent={addStudent} toggleModal={toggleModal}/>
            <div>
                <Table>
                    <thead>
                        <tr>
                            <td>#</td>
                            <td>Name</td>
                            <td>Age</td>
                            <td>Class</td>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            list && list.map((e, index) => {
                                return (
                                    <tr>
                                        <td>{index}</td>
                                        <td>{e.name}</td>
                                        <td>{e.age}</td>
                                        <td>{e.class}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </div>
            <Button onClick={()=>
               toggleModal()
            }>ADD</Button>

        </Stack>

    )
}