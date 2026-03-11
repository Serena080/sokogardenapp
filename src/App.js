
import './App.css';

import { BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import Getproducts from './components/Getproducts';
import Addproducts from './components/Addproducts';
import Signup from './components/Signup';

import 'bootstrap/dist/css/bootstrap.min.css';
import Notfound from './components/Notfound';
import Signin from './components/Signin';












function App() {
  return (
    <Router>

      <div className="App">
      <header className="App-header">
        
        <h1 >WELCOME TO SOKOGARDEN</h1>
        
      </header>
       {/* Below is our different routes together with the rendered components */}

       <Routes>
          

          <Route path='/signup' element={<Signup/>}/>

          <Route path='/'element={<Getproducts/>}/>

          <Route path='/addproducts' element={<Addproducts/>}/>

          <Route path='*'element={<Notfound/>}/>

          <Route path='/signin'element={<Signin/>}/>

        
        
        

        
       



      </Routes>
    </div>

    </Router>
  );
}

export default App;
