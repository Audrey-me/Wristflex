import React from 'react'
import Home from './components/views/Home/Home'
import {Routes,Route} from 'react-router-dom'
function App() {
  return (
    <>
     <Routes>
    <Route exact path ="/" index element ={<Home/>}/>
    {/* <Route exact path ="Register" element ={<Register/>}/> */}
    {/* <Route exact path ="Demo" element ={<Demo/>}/> */}
     </Routes> 
    </>
  );
}

export default App;
