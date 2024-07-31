import { BrowserRouter , Route , Routes , Link} from "react-router-dom";


import Home from './components/Home'
import Artista from "./components/artista";

function RoutesApp(){
  return(
    <BrowserRouter>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Artista">Artista</Link></li>

        </ul>
      </nav>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/artista" element={<Artista/>}/>
    </Routes>
    </BrowserRouter>
  );

}

export default RoutesApp;