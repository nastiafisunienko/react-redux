import { useState } from "react"
import { useReceiveAllQuery } from "./reducer"
import Book from "./Book"
import "./Search.css"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { ClockLoader } from "react-spinners";
import { addFavorite } from "./favoriteSlice";
import "./Comments.css"
import { useDispatch, useSelector } from "react-redux";
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Form2 from "./Form2";
import Comments from "./Comments";
import ModeIcon from '@mui/icons-material/Mode';



export default function Search() {

    const comments = useSelector((state) => state.comments)


    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "100%",
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 10,
      };


    
        const [value, setValue] = useState("")
        const {data, isLoading, error} = useReceiveAllQuery(value, {skip : !value})
        const [selectedComment, setSelectedComment] = useState(null);
   

        const dispatch = useDispatch()

        const [open, setOpen] = useState(false);
        const handleOpen = (id) => setOpen(id);
        const handleClose = () => setOpen(false);


        const handleBotton = (item) => {
            dispatch(addFavorite(item))
        }

    const handleChange = (e) => {

        setValue(e.target.value)

    }

    
    const handleEdit = (comment) => {
        setSelectedComment(comment);
    };



    return(
        <>
        <div className="principal">
            <h2 className="book-header-search"><span className="m">M</span>ake your own book storage.</h2>
    
            <div className="searching-bar">


                <Box sx={{ width: 500, maxWidth: '100%' }}>
                    <TextField sx={{fontFamily: "Cormorant Garamond"}} fullWidth label="SEARCH..." id="SEARCH" value={value} onChange={handleChange} />
                </Box>
            </div>
            {isLoading &&  <div className="loader"><p>Searching</p><ClockLoader color="black" size={75} speedMultiplier={2}/></div>}
            {error && <div className="error-ms">Error</div>}
            
            <ul className="ulBook">
                {data 
                    ? data.items.map((item) => {

                    return(
                    <li key={item.id}>
  
                        <Book
                            title={item.volumeInfo.title} src={item.volumeInfo.imageLinks?.smallThumbnail} 
                            author={item.volumeInfo.authors ? item.volumeInfo.authors[0] : "Unknown author"}
                            rate={item.volumeInfo.averageRating} clickButton1={() => handleBotton(item)} clickButton2={()=>handleOpen(item.id)}
                        />

                    <Modal
                        open={open === item.id}
                            onClose={handleClose}
                                aria-labelledby="modal-modal-title"
                                aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h1">
                                {item.volumeInfo.title}
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 4 }}>
                            {item.volumeInfo.description ? item.volumeInfo.description : "No description"}
                            </Typography>

                            <Typography id="modal-modal-description" sx={{ mt: 4 }}>
                            {item.volumeInfo.authors ? item.volumeInfo.authors[0] : "Unknown author"}
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 4 }}>
                            Published Date: {item.volumeInfo.publishedDate ? item.volumeInfo.publishedDate : "No date"}
                            </Typography>
                        </Box>
                    </Modal>

                    </li>
 
                    )
                }) : null}
                    
            </ul>


        </div>

            <div className="opinion">
            <h1>Leave your comment here.</h1>
                {<ul>
                    {comments?.data.map((item) => (
                        
                        <li  key={item.id} className="comments" >
                            <Comments autor={item.author} comm={item.comentario} hour={selectedComment ? item.houring : item.hour} id={item.id}/>
                            <button  className="update-btn" onClick={()=> handleEdit(item)}><ModeIcon/></button>
                        </li>
                        

                    ))}
                
                </ul>}

                    <Form2 selectedComment={selectedComment} setSelectedComment={setSelectedComment}/>

            </div>
    </>

    )
}