import BookmarkIcon from '@mui/icons-material/Bookmark';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import FavoriteIcon from '@mui/icons-material/Favorite';
import "./Search.css"

export default function Book({title, src,author,rate, clickButton1, clickButton2}) {

    
    return (
        <>
            <div className='iconos'>
                <button className='botones' onClick={clickButton1}><FavoriteIcon/></button>
                <button className='botones' onClick={clickButton2}><QuestionMarkIcon/></button>
            </div>
            <h1>{title}</h1>
            <img src={src} alt={title}/>
            <div className='authores'>
                <p>{author}</p>
                <p>Rating: {rate ? rate : "No rating"}</p>
            </div>
            <BookmarkIcon className='bookmark'/>
            
        </>
    )
}