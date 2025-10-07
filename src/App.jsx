
import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavBar from "./navbar"
import Body from "./Body"
import Profile from "./Profile"
import Userlogin from "./Userlogin"




function App() {

  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body />} >
          <Route path="/login" element={<Userlogin/>} ></Route>
          
          <Route path="/profile" element={<Profile/>}></Route>
          </Route>
          

        </Routes>
        </BrowserRouter>
      {/* <NavBar /> */}

    </>
  )
}

export default App
