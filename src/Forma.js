import "./Saved.css"
import { Formik, Field, ErrorMessage, Form } from "formik";
import { addFavorite } from "./favoriteSlice";
import { useDispatch } from "react-redux";


export default function Forma() {

    const generateRandomId = () => {
        const randomValue = "1234567890qwertyuioplkjhgfdsaxzcvvnbmnnnmyht";
        const random = Math.floor(Math.random() * randomValue.length);
        const random2 = Math.ceil(Math.random() * randomValue.length);

        return `${randomValue[random]}${random}${randomValue[random2]}`;
    };


    const dispatch = useDispatch()

    const validate = (values) => {
        const errors = {};

        if (!values.name) {
            errors.name = "Required"
        } else if (values.name.length < 3) {
            errors.name = "The field must be at least 3 caracteres"
        }

        if(!values.autor) {
            errors.autor = "Required"
        } else if (values.autor.length < 3) {
            errors.autor = "The field must be at least 3 caracteres"
        }

        if(!values.description) {
            errors.description = "Required"
        } else if (values.description.length < 10) {
            errors.description = "The field must be at least 10 caracteres"
        }


        return errors
    }


    return(
        <>
        <Formik initialValues={{name: "", autor: "", description: "", foto: "img/img2.jpg", id: ""}}
        validate={validate}  onSubmit={(values, { resetForm }) => {

            const newId = generateRandomId();
            const newValues = { ...values, id: newId };

            dispatch(addFavorite(newValues));

            resetForm(); 
        }}>

        <Form className="form">
            <fieldset>
                <h1>Add your<br></br> favorite book here.</h1>
                    <ul>
                        <li>
                            <label htmlFor="name">Name</label><br></br>
                            <Field type="text" id="name" name="name"/><br></br>
                            <ErrorMessage  name="name" component="div" className="error"/>
                        </li>

                        <li>
                            <label htmlFor="autor">Add author</label><br></br>
                            <Field type="text" id="autor" name="autor" /><br></br>
                            <ErrorMessage  name="autor" component="div" className="error"/>
                        </li>

                        <li>
                            <label htmlFor="description">Description</label><br></br>
                            <Field type="text" id="description" name="description" /><br></br>
                            <ErrorMessage  name="description" component="div" className="error"/>
                            
                        </li>

            
                        <button type="submit">SUBMIT</button>
                    </ul>


            </fieldset>
        </Form>
        </Formik>
        </>

    )
}


