import './App.css';
import Login from './components/Pages/Login/Login';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Register from './components/Pages/Register/Register';
import DarkModeSwitch from './components/UI/DarkModeSwitch/DarkModeSwitch';
// import NotFoundTemplate from './components/NotFoundTemplate/NotFoundTemplate';
import Home from './components/Pages/Home/Home';

const router = createBrowserRouter([
    {
        path: "login",
        element: <Login />
    },
    {
        path: "register",
        element: <Register />
    },
    {
        path: "home",
        element: <Home />
    }
]);

function App() {
    return (
        <div className="App">
            <DarkModeSwitch />
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
