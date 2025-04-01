import LoginImage from '../assets/Screenshot 2025-04-01 013401.png'


export default function Login() {

    function loginUser({email, password}) {
        
    }

    return (
        <div className="full-page">
            <img src={LoginImage} className='Login-img' />
            <div className="login-container">
                <div className="login-card">
                    <h1 className="app-name">OAuth</h1>
                    <h3 className="welcome">Welcome Back to OAuth ✌️</h3>
                    <p className="instruction">Please signin to your account and start your adventures</p>
                    <form>
                        <input
                            className="input-box"
                            type="email"
                            name="email"
                            id="email"
                            placeholder="example@gmail.com"
                        />
                        <input
                            className="input-box"
                            type="password"
                            name="password"
                            id="password"
                            placeholder="PassWord"
                        />
                        <div className="rem-fog">
                            <div>
                            <input className="checkbox" type="checkbox" name="rememberMe" />
                            <label className="rem-me" htmlFor="rememberMe">Remember me</label>
                            </div>
                            <p className="forgot-password">forgot password ?</p>
                        </div>
                        <button className="login-button" type="submit" onSubmit={loginUser}>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}