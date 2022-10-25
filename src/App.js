import logo from './logo.svg';
import './App.css';
import Login from './components/Login/Login';
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    NavLink
} from "react-router-dom";
import Register from './components/Register/Register';
import DarkModeSwitch from './components/DarkModeSwitch/DarkModeSwitch';
import NotFoundTemplate from './components/NotFoundTemplate/NotFoundTemplate';

const router = createBrowserRouter([
    {
        path: "/",
        element: <NavLink to="login">Login</NavLink>,
        errorElement: <NotFoundTemplate url='/' />,
        children: [
            {
                path: "login",
                element: <Login />
            },
            {
                path: "register",
                element: <Register />
            }
        ]
    }
]);

function App() {
    debugger;
    return (
        <div className="App">
            <DarkModeSwitch />
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
