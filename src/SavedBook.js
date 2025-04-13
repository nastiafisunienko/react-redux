import "./Saved.css"
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteFavorite } from "./favoriteSlice";
import { useDispatch } from "react-redux";

export default function SavedBook({title, desc, src, author, id}) {
    const dispatch = useDispatch()
    return (
        <div className="bookStyle">
            <FavoriteIcon className="icon"/>
            <h1>{title}</h1>
            <h3>{author}</h3>

            <div>
                <p dangerouslySetInnerHTML={{ __html: desc }}></p>
                <img style={{maxWidth: "50%"}}  src={src} alt="id1"/>
            </div>
            <div className="botones-book">
                <button onClick={() => dispatch(deleteFavorite({id}))}><DeleteIcon className="delete"/></button>

            </div>
        </div>
    )
}