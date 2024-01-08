import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import AllStudent from './components/AllStudent';
import AddStudents from './components/AddStudents';
import ViewStudent from './components/ViewStudent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';

function App() {
  return (
    <div className=''>
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='allstudents' element={<AllStudent/>}/>
      <Route path='addstudents' element={<AddStudents/>}/>
      <Route path='viewstud' element={<ViewStudent/>}/>
      </Routes>
      </BrowserRouter>
     

    </div>
  );
}

export default App;
