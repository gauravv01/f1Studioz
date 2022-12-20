import { Routes,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home';
import Config1 from './Pages/ConfigStep1/Config1';
import Config2 from './Pages/ConfigStep2/Config2';
import Config3 from './Pages/ConfigStep3/Config3';
import './App.css';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
     <Route path='/Config' element={<Config1/>}/>
     <Route path='Config2' element={<Config2/>}   />
     <Route path='Config3' element={<Config3/>}   />
      </Routes>
    </>
  );
}

export default App;
