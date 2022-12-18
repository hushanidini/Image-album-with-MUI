import { Routes, Route } from "react-router-dom";
import "./App.css";
import Albums from './Pages/Albums/Albums';
import AlbumImages from "./Pages/AlbumImages/AlbumImages";
import NotFound from "./Pages/NotFound/NotFound";

function App() {

  return (
    <div className="App">
          <Routes> 
                <Route path = "/" element={<Albums />} />
                <Route
                  path="/albums/:albumId"
                  element={ <AlbumImages/> }
                />
                <Route path="*" element={<NotFound />} /> 
            </Routes>
      
    </div>
  );
}

export default App;
