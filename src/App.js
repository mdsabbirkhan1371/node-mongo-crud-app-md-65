import { Routes, Route } from 'react-router-dom'
import './App.css';
import AddUsers from './components/AddUsers/AddUsers';
import Home from './components/Home/Home';
import UpdateUser from './components/UpdateUser/UpdateUser';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='user/add' element={<AddUsers></AddUsers>}></Route>
        <Route path='/update/:id' element={<UpdateUser></UpdateUser>}></Route>
      </Routes>
    </div>
  );
}

export default App;
