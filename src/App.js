import Login from './components/Login';
import './App.css';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="flex justify-center gap-24 pt-10 ">
      <Sidebar />
      <Login />
    </div>
  );
}

export default App;
