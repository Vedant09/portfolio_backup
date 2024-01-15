import './App.css';
import Profile from './Components/Profile';
import Navbar from './Components/Navbar';
import WorkExp from './Components/Work Experience';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Footer from './Components/Footer'

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Profile/>
      <Projects/>
      <Skills/>
      <WorkExp/>
      <Footer/>
    </div>
  );
}

export default App;
