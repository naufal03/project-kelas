import Jadwal from './components/Jadwal';
import Login from './components/Login';
import { Menu } from './components/Menu';
import Tugas from './components/Tugas';

function App() {
  return (
    // page menu
    <>
      <Menu />
      <Jadwal />
      <Tugas />
      <Login />
    </>
  );
}

export default App;
