import './App.css';
import Login from './Pages/Login/Login';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Register from './Pages/Register/Register';
import DarkModeSwitch from './components/DarkModeSwitch/DarkModeSwitch';
// import NotFoundTemplate from './components/NotFoundTemplate/NotFoundTemplate';
import Home from './Pages/Home/Home';
import ConnectionStatus from './components/ConnectionStatus/ConnectionStatus';
import AllCredits from './Pages/AllCredits/AllCredits';

const router = createBrowserRouter([
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
        <>

            <div className="App">
                <ConnectionStatus />
                <DarkModeSwitch />
                <RouterProvider router={router} />
            </div>
        </>
    );
}

export default App;
