import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home'
import Addmovie from './components/Addmovie'
import About from './components/About'
import SearchMovie from './components/SearchMovie'
import EditMovie from './components/EditMovie';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/addmovie' element={<Addmovie/>}></Route>
        <Route path='/searchmovie' element={<SearchMovie/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path="/edit" element={<EditMovie/>}/>
      </Routes>
    </div>
  );
}

export default App;
