import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './index.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import SocialLinks from './components/SocialLinks';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <NavBar />
      <Home />
      <SocialLinks />
    </div>
  );
}

export default App;
