import './App.css';
import Login from './Pages/Login/Login';
import {
    createBrowserRouter,
    Route,
    Routes,
    RouterProvider,
} from "react-router-dom";
import Register from './Pages/Register/Register';
import DarkModeSwitch from './components/DarkModeSwitch/DarkModeSwitch';
// import NotFoundTemplate from './components/NotFoundTemplate/NotFoundTemplate';
import Home from './Pages/Home/Home';
import ConnectionStatus from './components/ConnectionStatus/ConnectionStatus';
import AllCredits from './Pages/AllCredits/AllCredits';
import Landing from './Pages/Landing/Landing';
import Navbar from './components/Navbar/Navbar';

const router = createBrowserRouter([
    {
        path: '',
        element: <Landing />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/home/add",
        element: <Home />
    },
    {
        path: "/home/my_credits",
        element: <AllCredits />
    }
]);

function App() {
    return (
        <div className="App">
            <Navbar />
            <ConnectionStatus />
            <Routes>
                <Route path='' element={<Landing />} />
                <Route path='login' element={<Login />} />
                <Route path='register' element={<Register />} />
                <Route path='home/add' element={<Home />} />
                <Route path='home/all' element={<AllCredits />} />
            </Routes>
        </div>
    );
}

export default App;
