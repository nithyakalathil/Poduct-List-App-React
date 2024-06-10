import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Addproduct from './components/Addproduct';
import Search from './components/Search';
import ViewAll from './components/ViewAll';

function App() {
  return (
   
<BrowserRouter>
<Routes>
  <Route path='/' element={<Addproduct/>}/>
  <Route path='/s' element={<Search/>}/>
  <Route path='/v' element={<ViewAll/>}/>
</Routes>
</BrowserRouter>

  );
}

export default App;
