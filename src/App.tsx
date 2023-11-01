import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from './Pages/Login'
import Mainmenu from './Pages/Mainmenu'
import Presentation from './Pages/Presentation'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={(<Login />)} />
        <Route path="/mainmenu" element={(<Mainmenu />)}/>
        <Route path="/presentation" element={(<Presentation />)}/>
      </Routes>
    </Router>
  )
}