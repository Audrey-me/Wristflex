import React from 'react'
import Home from './components/views/Home/Home'
import {Routes,Route} from 'react-router-dom'
import Collection from "./components/views/molecules/Collections"
function App() {
  return (
    <>
     <Routes>
    <Route exact path ="/" index element ={<Home/>}/>
    <Route exact path ="/collections" element ={<Collection/>}/>
    {/* <Route exact path ="Demo" element ={<Demo/>}/> */}
     </Routes> 
    </>
  );
}

export default App;
