
import { Link, Routes, Route } from 'react-router-dom';
import './App.css';
import Search from './Search';
import Start from './Start';
import {ReactComponent as Logo} from "./logo.svg"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { Saved } from './Saved';
import Badge from '@mui/material/Badge';
import { useSelector } from "react-redux"


function App() {

  const favorites = useSelector((state) => (state.favorite.favorites))
  return (
    <div>
      <header>

        <nav>
          <ul>
            <li>
              <Link to="/saved">
              <Badge badgeContent={favorites} color="error">
                <BookmarkIcon/>
              </Badge>

              </Link>
            </li>
            <li>
            <Link to="/">
                <Logo className='logoSvg' width="70" height="70"/>
              <p className='parrafoLogo'>Book & Quote <br></br> storage</p>
              </Link>
            </li>
            <li>
              <Link to="/search"><SearchOutlinedIcon/></Link>
            </li>

          </ul>

        </nav>
      </header>


      <main>

        <Routes>
          <Route path='/saved' element={<Saved/>} />
          <Route path="/" element={<Start/>}/>
          <Route path="/search" element={<Search/>}/>
        </Routes>
      </main>

      <footer>
        <p className='footer'>Copyright &copy; 2025 by Anastasia <span>F</span>isunenko</p>
      </footer>



    </div>
  );
}

export default App;
