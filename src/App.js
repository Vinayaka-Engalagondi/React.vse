import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Inbox from './Inbox';
import Icon from './icon';
import Details from './home/detail';
import Drawer1 from './drawer';
import About from './about/About';
import Academics from './academics/Academics';
import Sliders from './Certificate/Certificate';

function App(props) {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Details />} />
        <Route path="/inbox" element={<Inbox />} />
        <Route path="/dtails" element={<Details />} />
        <Route path="/about" element={<About/>}  />
        <Route path="/academics" element={<Academics/>}  />
        <Route path="/certificate" element={<Sliders/>}  />
      </Routes>
      <Icon />
      <Drawer1 />
    </BrowserRouter>
  );
}

export default App;
