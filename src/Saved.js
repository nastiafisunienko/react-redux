import "./Saved.css"
import { useSelector } from "react-redux"
import SavedBook from "./SavedBook";
import Forma from "./Forma";



export function Saved() {
    const favorite = useSelector((state) => state.favorite)

    return (
        <>
                {favorite.items.length === 0 ? <div className="empty"><span className="y">Y</span>our storage is empty.
                </div> : null}
        <div className="saved-div">
        <p className="book-header">´The best books… are those that tell you what you know already.´</p>
        <p>- George Orwell, 1984</p>
        </div>
        

<ul className="ulSavedBook">

{favorite.items.map((item) => (<li className="liSavedBook" key={item.id || item?.id}>
    {item.volumeInfo ? 
    <SavedBook title={item.volumeInfo.title} desc={item?.searchInfo?.textSnippet} src={item.volumeInfo.imageLinks?.smallThumbnail}
    author={item.volumeInfo.authors ? item.volumeInfo.authors[0] : "Unknown author"} id={item.id}
    /> : <SavedBook title={item?.name} desc={item?.description} src={item?.foto} author={item?.autor} id={item?.id}/> }
    
</li>) )}

</ul>

<Forma/>
</>
)
}