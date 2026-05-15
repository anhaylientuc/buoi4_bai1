import { useState } from "react"
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
export const SearchStudent = () => {
    const [keyword, setkeyword] = useState('')
    const navigate=useNavigate();
    const handleKeyDown=(e)=>{
        if(e.key=='Enter'){
            navigate(`/?q=${keyword}`)
        }
    }
    return (
        <InputGroup className="mb-3">
            <Form.Control placeholder="search..." value={keyword} onChange={e=>{setkeyword(e.target.value)}} 
            onKeyDown={handleKeyDown}  />
        </InputGroup>
    )
}