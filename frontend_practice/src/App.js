import './App.css';
import Navbar from './layout/Navbar';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BoardList from './board/BoardList';
import ViewBoard from './board/ViewBoard';
import AddBoard from './board/AddBoard';
import EditBoard from './board/EditBoard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
        <Routes>
          {/* element={<BoardList />} */}
          <Route path="/" element={<BoardList />}/>
          {/* element={<AddBoard />} */}
          <Route path="/register" element={<AddBoard />}/>
          <Route path="/viewboard/:bno" element={<ViewBoard />}/>
          <Route path="/editboard/:bno" element={<EditBoard />}/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
