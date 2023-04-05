import { Routes,Route } from 'react-router-dom';
import './App.css';
import NavBar from './component/Navbar9';
import ReadingBooks from './component/day7';
import Day8 from './component/day8';
import Entry from './component/enter6';
import List from './component/list6';
import Home from './component/Home9';
import Singer from './component/Singer9';
import Albums from './component/Album9';
import Hello from './component/Hello10';

 function createEntry(items) {
  return (
    <Entry
      key={items.id}
      imgUrl={items.imgUrl}
      name={items.name}
      price={items.price}
    />
  );
}
function App() {
  return (
    <div>
    
      <h1 style={{ textAlign:"center"}}>
         Products
      </h1>
      <dl >{List.map(createEntry)}</dl>
      <ReadingBooks/><br></br>
      <Day8/>
      <div id="new">
      <NavBar />
        <Routes>
       <Route exact path='/Home' element={<Home/>}></Route>
       <Route exact path='/Singer' element={<Singer/>}></Route>
       <Route exact path='/Albums' element={<Albums/>}></Route>
         </Routes>
      </div>
      <Hello/>
    </div>
  );
}
 export default App;


