import "./Comments.css"
import Avatar from '@mui/material/Avatar';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from "react-redux";
import { deleteComment } from "./commentSlice";




export default function Comments({ autor, comm, hour, id}) {

    const dispatch = useDispatch()

    return(
        <>
            <Avatar src="img/img2.jpg" alt="id"/> 
            <div>
                <b><p>{autor}</p></b>
                <p>{comm}</p>
                <p className="data">{hour}</p>
            </div>
            <button  className="delete-btn" onClick={()=> dispatch(deleteComment({id}))}><DeleteIcon/></button>

        </>
    )
}