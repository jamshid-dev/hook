
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Page1 from './page/page1'
import Page2 from './page/page2'

function App() {

  return (
    <>
    <Routes>
      <Route path='/page1' element={<Page1/>}/>
      <Route path='/page2' element={<Page2/>}/>
    </Routes>
    </>
  )
}

export default App
