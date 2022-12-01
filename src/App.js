import {Route, Routes, Navigate, Link} from "react-router-dom";
import Posts from "./pages/Posts";
import {useAuth} from './auth-context';
import Login from "./pages/Login";
import './assets/scss/main.scss';
import Register from "./pages/Register";
import Header from "./components/Header";
import Admin from "./pages/Admin";
import Post from "./pages/Post";

function App() {
    const { loggedIn, loading } = useAuth();

    if(loading) {
        return <div>Loading...</div>
    }

    if(!loggedIn) {
        return (
            <Routes>
                <Route path='login' exact element={<Login />} />
                <Route path='register' exact element={<Register />} />
                <Route path='*' element={<Navigate replace to="/login" />} />
            </Routes>
        )
    }

    return (
        <div className="App">
            <Header />
            <div className="container">
                <Routes>
                    <Route path='/' exact element={<Posts />} />
                    <Route path='post/:id' element={<Post />} />
                    <Route path='admin' element={<Admin />} />
                    <Route path='*' element={<Navigate replace to="/" />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
