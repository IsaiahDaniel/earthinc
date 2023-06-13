import { Route, Routes } from 'react-router-dom'
import { Roadmap, Home} from './pages'
import './App.css'


function App() {

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/roadmap' element={<Roadmap/>}/>
    </Routes>
  )
}

export default App
