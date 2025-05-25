import { Form, Field, Formik, ErrorMessage } from "formik";
import { addComment, updateComment } from "./commentSlice";
import { useDispatch } from "react-redux";

export default function Form2({ selectedComment, setSelectedComment }) {
  const dispatch = useDispatch();

  const initialValues = selectedComment
    ? {
        nombre: selectedComment.author,
        comment: selectedComment.comentario,
      }
    : { nombre: "", comment: "" };

  const validate = (values) => {
    const errors = {};

    if (!values.nombre) {
      errors.nombre = "Required";
    } else if (values.nombre.length < 3) {
      errors.nombre = "The field must be at least 3 characters";
    }

    if (!values.comment) {
      errors.comment = "Required";
    } else if (values.comment.length < 10) {
      errors.comment = "The field must be at least 10 characters";
    }

    return errors;
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={(values, { resetForm }) => {
        if (selectedComment) {

          dispatch(
            updateComment({
              ...values,
              id: selectedComment.id,
            })
          );
          setSelectedComment(null); 
        } else {

          dispatch(addComment(values));
        }
        resetForm(); 
      }}
    >
      <Form>
        <ul>
          <li>
            <label htmlFor="nombre">
              {selectedComment ? "Update name:" : "Name:"}
            </label>
            <Field type="text" id="nombre" name="nombre" placeholder={initialValues.nombre} />
            <ErrorMessage name="nombre" component="div" className="error2" />
          </li>

          <li>
            <label htmlFor="comment">
              {selectedComment ? "Update comment:" : "Comment:"}
            </label>
            <Field as="textarea" rows="3" cols="20" id="comment" name="comment" placeholder={initialValues.comment} />
            <ErrorMessage name="comment" component="div" className="error2" />
          </li>

          <button type="submit">
            {selectedComment ? "Update" : "Send"}
          </button>
        </ul>
      </Form>
    </Formik>
  );
}