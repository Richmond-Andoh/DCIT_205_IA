import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './routes/Home';
import About from './routes/About';
import Catalog from './routes/Catalog'
import Event from './routes/Event';
import Resources from './routes/Resources';
import Contact from './routes/Contact';
import StudentProjects from './routes/StudentProjects';
import StaffProfile from './routes/StaffProfile';
import Faqs from './routes/Faqs';
import Gallery from './routes/Gallery'

function App() {
  return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='catalog' element={<Catalog />} />
        <Route path='resources' element={<Resources />} />
        <Route path='events' element={<Event />} />
        <Route path='contact' element={<Contact />} />
        <Route path='student-projects' element={<StudentProjects />} />
        <Route path='staff-profile' element={<StaffProfile />} />
        <Route path='faqs' element={<Faqs />} />
        <Route path='gallery' element={<Gallery />} />
      </Routes>
  );
}

export default App;
