import RestaurantCreate from './components/RestaurantCreate';
import RestaurantDetail from './components/RestaurantDetail';
import RestaurantList from './components/RestaurantList';
import RestaurantSearch from './components/RestaurantSearch';
import RestaurantUpdate from './components/RestaurantUpdate';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {Routes,Route} from 'react-router-dom'
import Login from './components/Login';
import './App.css';

function App() {
  return (
    <div className="App">
     < Navbar/>
     <Routes>
     <Route path="" element={<Home />} />
     <Route path="list" element={<RestaurantList />} />
     <Route path="create" element={<RestaurantCreate />} />
     <Route path="detail" element={<RestaurantDetail />} />
     <Route path="search" element={<RestaurantSearch />} />
     <Route path="update/:id" element={<RestaurantUpdate id={1} />} />
     <Route path="login" element={<Login />} />
     </Routes>
    </div>
  );
}

export default App;
