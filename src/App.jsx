import { Outlet } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import { GlobalFonts } from './assets/fonts';
import Navbar from './components/common/Navbar/NavbarCore';

function App() {
  return (
    <>
      <GlobalFonts />
      <GlobalStyles />
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
