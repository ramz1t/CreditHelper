import logo from './logo.svg';
import './App.css';
import Login from './components/Login/Login';
import {
    createBrowserRouter,
    RouterProvider,
    Route,
} from "react-router-dom";
import Register from './components/Register/Register';

const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: '/register',
        element: <Register />
    }
]);

function App() {
    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
