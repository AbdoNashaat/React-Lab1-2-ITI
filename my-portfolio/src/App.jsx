import './App.css'
import Contacts from './components/contact/contact';
import Education from './components/education/education';
import Hero from './components/hero/hero';
import Navbar from './shared/navbar/navbar';
import Projects from './components/projects/projects';
import Skills from './components/skills/skills';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
      <Navbar />
      <Routes location={location} key={location.pathname}>
        <Route path='' element={<Hero/>}/>
        <Route path='/hero' element={<Hero/>}/>
        <Route path='/education' element={<Education/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/contact' element={<Contacts/>}/>
      </Routes>
    </>
  );
}

export default App;
