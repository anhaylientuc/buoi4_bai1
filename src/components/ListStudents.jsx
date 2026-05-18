import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { ModalAdd } from './ModalAdd.jsx';
import { StudentService } from '../service/StudentService.js';
import { useSearchParams } from 'react-router-dom';
export const ListStudents = () => {
    const [list, setlist] = useState([])
    const [show, setshow] = useState(false)
    const navigate = useNavigate()
    const [params] = useSearchParams();
    const keyword = params.get('q');

    useEffect(() => {
        const fetchData = async () => {
            const students = await StudentService.getAll();
            console.log(students)
            setlist(students);
        }
        const fetchByKeyword = async () => {
            const students = await StudentService.search(keyword);
            console.log(students)
            setlist(students);
        }

        if (!keyword)
            fetchData();
        else {
            fetchByKeyword();
        }
    }, [keyword])
    const addStudent = (e) => {
        setlist([...list, e]);
    }
    const toggleModal = () => {
        setshow(!show);
    }
    return (
        <Stack className='container' direction='horizontal'>
            <ModalAdd show={show} addStudent={addStudent} toggleModal={toggleModal} />
            <div>
                <Table>
                    <thead>
                        <tr>
                            <td>#</td>
                            <td>Name</td>
                            <td>Age</td>
                            <td>Subject</td>
                            <td>FN</td>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            list && list.map((e, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index}</td>
                                        <td>{e.name}</td>
                                        <td>{e.age}</td>
                                        <td>{e.subject}</td>
                                        <td>
                                            <Button variant='secondary' onClick={() => {
                                                navigate(`/${e.id}`)
                                            }}>Info</Button>
                                        </td>

                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </div>
        </Stack>

    )
}