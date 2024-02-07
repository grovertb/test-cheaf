import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Main from './containers/Main'
import Login from './containers/Login'
import Home from './containers/Home'
import Uploads from './containers/Uploads'

function App() {
  return (
    <Router>
      <Main>
        <Routes>
          <Route element={<Login />} path='/' />
          <Route element={<Home />} path='/home' />
          <Route element={<Uploads />} path='/uploads' />
        </Routes>
      </Main>
    </Router>
  )
}

export default App
