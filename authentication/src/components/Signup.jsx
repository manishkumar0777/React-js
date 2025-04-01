import LoginImage from '../assets/Screenshot 2025-04-01 013401.png'

export default function Signup() {
    return(
        <div className="full-page">
                    <div className="login-container">
                        <div className="login-card">
                            <h1 className="app-name">OAuth</h1>
                            <h3 className="welcome">Welcome to OAuth ✌️</h3>
                            <p className="instruction">Register your account ⭐</p>
                            <form>
                                <input 
                                    className="input-box"
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Jhon Martain"
                                />

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
                                </div>
                                <button className="login-button" type="submit">Create yout Account</button>
                            </form>
                        </div>
                    </div>
                    <img src={LoginImage} className='Login-img' />
                </div>
    )
}