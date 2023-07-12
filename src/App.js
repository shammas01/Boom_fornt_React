import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Homepage from './pages/Homepage'
import Advocate from './pages/Advocate'

import './App.css';

function App() {
  return (
    <Router>
        <Routes>
            <Route element={<Homepage/>} path=''/>
            <Route element={<Advocate/>} path='/advocate/:username'/>
              
            
        </Routes>
       
    </Router>
  );
  }

export default App;
