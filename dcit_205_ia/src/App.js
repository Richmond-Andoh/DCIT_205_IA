import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './routes/Home';
import About from './routes/About';
import Event from './routes/Event';

function App() {
  return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='events' element={<Event />} />

      </Routes>
  );
}

export default App;
