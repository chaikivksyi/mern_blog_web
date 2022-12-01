import {useState} from "react";
import {Link} from "react-router-dom";
import {useAuth} from '../auth-context';

export default () => {

    const { login } = useAuth();

    const [user, setUser] = useState({
        login: '',
        password: ''
    })

    return (
        <div className="login-page">
            <div className="div-center">
                <div className="content">
                    <h3>Login form</h3>
                    <hr/>
                    <form>
                        <div className="form-group mb-3">
                            <label htmlFor="exampleInputEmail1">Login</label>
                            <input type="text" className="form-control" id="exampleInputEmail1"
                                   placeholder="Login" value={user.login} onChange={(e) => {
                                setUser({...user, login: e.target.value})
                            }}/>
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1"
                                   placeholder="Password" value={user.password} onChange={(e) => {
                                setUser({...user, password: e.target.value})
                            }}/>
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={(e) => {
                            e.preventDefault();
                            login(user)
                        }}>Login</button>
                        <hr/>
                        <Link to="/register" className="btn btn-link">Signup</Link>
                        {/*<button type="button" className="btn btn-link">Reset Password</button>*/}
                    </form>
                </div>
            </div>
        </div>
    )
}