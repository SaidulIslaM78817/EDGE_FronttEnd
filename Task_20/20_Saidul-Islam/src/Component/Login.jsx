import "../App.css";

function Login() {
  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-header">Welcome Back!</h2>
        <p className="login-subtext">Please log in to continue</p>
        <form className="login-form" action="#" method="post">
          <div className="input-group">
            <input
              type="text"
              id="username"
              name="username"
              className="input-field"
              placeholder="Username"
              required
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              id="password"
              name="password"
              className="input-field"
              placeholder="Password"
              required
            />
          </div>
          <button type="submit" className="login-button">Sign In</button>
        </form>
        <div className="login-footer">
          <p className="forgot-password">
            <a href="#">Forgot Password?</a>
          </p>
          <p className="signup-text">
            Don’t have an account? <a href="#">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
