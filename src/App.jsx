import './App.css'
import HeaderComponent from "./components/HeaderComponent.jsx";
import EmployeeListComponent from "./components/EmployeeListComponent.jsx";
import FooterComponent from "./components/FooterComponent.jsx";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import EmployeeComponent from "./components/EmployeeComponent.jsx";

function App() {

  return (
    <>
        <BrowserRouter>
            <HeaderComponent />
                <Routes>
                {/*// http://localhost:3000*/}
                    <Route path='/' element = { <EmployeeListComponent /> }></Route>

                    {/*// http://localhost:3000/employees*/}
                    <Route path='/employees' element = { <EmployeeListComponent /> }></Route>

                    {/*// http://localhost:3000/add-employee*/}
                    <Route path='/add-employee' element = { <EmployeeComponent /> }></Route>

                    {/*// http://localhost:3000/edit-employee/:id*/}
                    <Route path='/edit-employee/:id' element = { <EmployeeComponent /> }></Route>
                </Routes>
            <FooterComponent />
        </BrowserRouter>
    </>
  )
}

export default App









