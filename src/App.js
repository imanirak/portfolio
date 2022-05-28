import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
function App() {
  return (
    <div>
    <Navbar />
    <div className="flex flex-col items-center mt-16">
    <h1 className="text-4xl text-center">
    Tailwind CSS makes styling React components easier!
    </h1>
    <button className="bg-black text-white p-2.5 w-fit mt-9 ">
    Get Started
    </button>
    </div>
    </div>
  );
}

export default App;
