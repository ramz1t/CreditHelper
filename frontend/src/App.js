import './App.css';
import Login from './views/Login/Login';
import {
    Route,
    Routes,
} from "react-router-dom";
import Register from './views/Register/Register';
import Home from './views/Home/Home';
import ConnectionStatus from './components/ConnectionStatus/ConnectionStatus';
import AllCredits from './views/AllCredits/AllCredits';
import Landing from './views/Landing/Landing';
import Navbar from './components/Navbar/Navbar';
import Profile from './views/Profile/Profile';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import NotFoundTemplate from './components/NotFoundTemplate/NotFoundTemplate';
import Footer from './components/Footer/Footer';

function App() {
    return (
        <div className="App">
            <Navbar />
            <div className='page_wrapper'>
                <Routes>
                    <Route path='' element={<Landing />} />
                    <Route path='login' element={<Login />} />
                    <Route path='register' element={<Register />} />
                    <Route path='home/add' element={<Home />} />
                    <Route path='home/all' element={<PrivateRoute />}>
                        <Route path='' element={<AllCredits />} />
                    </Route>
                    <Route path='profile' element={<Profile />} />
                    <Route path='*' element={<NotFoundTemplate />} />
                </Routes>
                <div className='page_bottom'>
                    <ConnectionStatus />
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default App;
