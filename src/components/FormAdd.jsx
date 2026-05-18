import { Formik, Form, Field, ErrorMessage } from "formik";
import Button from "react-bootstrap/esm/Button";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { StudentService } from "../service/StudentService";
export const FormAdd = () => {
    const navigate=useNavigate();

    const schema = Yup.object({
        name: Yup.string().required('require'),
        age: Yup.number().required('require').typeError('must be a number'),
        subject: Yup.string().required('require')
    })
    const handleSubmit=async (values)=>{
        await StudentService.insert(values);
        navigate('/');
    }
    return (
        <Formik
            initialValues={{ name: '', age: '', subject: '' }}
            onSubmit={(values) => {
                handleSubmit(values)
            }}
            validationSchema={schema}
        >
            <Form>
                <label>Name</label>
                <Field name="name"></Field>
                <ErrorMessage name="name"></ErrorMessage>

                <label>Age</label>
                <Field name="age"></Field>
                <ErrorMessage name="age"></ErrorMessage>

                <label>Subject</label>
                <Field name="subject"></Field>
                <ErrorMessage name="subject"></ErrorMessage>

                <Button type="submit">Submit</Button>

            </Form>
        </Formik>
    )
}
