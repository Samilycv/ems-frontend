import { Routes,Route } from 'react-router-dom';
import './App.css';
import Admin from './Components/Admin';
import View from './Components/View';
import Edit from './Components/Edit';
import Header from './Components/Header';
import PageNotFound from './Components/PageNotFound';
import Add from './Components/Add';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
<Header/>
    <Routes>
      {/* local host:3000 */}
      <Route path='' element={<Admin/>}/>

      {/* local host:3000/add */}
      <Route path='add' element={<Add/>}/>

      {/* local host:3000/view/1 */}
      <Route path='view/:id' element={<View/>}/>

      {/* local host:3000/edit/1 */}
      <Route path='edit/:id' element={<Edit/>}/>
      
      <Route path='*' element={<PageNotFound/>}/>

    </Routes>
    <Footer/>    </div>
  );
}

export default App;