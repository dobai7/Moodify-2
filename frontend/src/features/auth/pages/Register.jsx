import React, { useState } from 'react'
import "../style/auth.scss"
import { Link } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth.jsx'
import Loading from './Loading.jsx'
import AuthSide from './AuthSide.jsx'

const Register = () => {

  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPass, setShowPass] = useState(false)
  const [error, setError] = useState("")
  const [isRegistered, setIsRegistered] = useState(false)

  const { loading, register } = useAuth()

  const submitHandler = async (e) => {
    e.preventDefault()
    if (loading) return

    setError("")
    const result = await register(username, email, password)

    if (result.success) {
      setIsRegistered(true)
    } else {
      setError(result.message)
    }
  }

  return (
    <main className="auth-page">
      {loading && <Loading />}

      <div className="glow glow1"></div>
      <div className="glow glow2"></div>

      <div className="auth-shell">
        <AuthSide />

        <section className="auth-main">
          <div className="auth-card">
            <Link to="/" className="back-link"><i className="ri-arrow-left-line"></i> Back to home</Link>

            {isRegistered ? (
              <div className="verify-box">
                <span className="icon-box"><i className="ri-mail-send-line"></i></span>
                <h1>Check your email</h1>
                <p className="sub">
                  We sent a verification link to <strong>{email}</strong>.
                  Click the link, then come back and login.
                </p>
                <Link to="/login" className="btn primary full">Go to Login</Link>
              </div>
            ) : (
              <>
                <h1>Create account</h1>
                <p className="sub">Register to start detecting your mood.</p>

                {error && (
                  <div className="alert error"><i className="ri-error-warning-line"></i> {error}</div>
                )}

                <form className="auth-form" onSubmit={submitHandler}>

                  <div className="field">
                    <label htmlFor="username">Username</label>
                    <div className="input-wrap">
                      <i className="ri-user-3-line"></i>
                      <input
                        type="text"
                        id="username"
                        placeholder="choose a username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="field">
                    <label htmlFor="email">Email</label>
                    <div className="input-wrap">
                      <i className="ri-mail-line"></i>
                      <input
                        type="email"
                        id="email"
                        placeholder="enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="field">
                    <label htmlFor="password">Password</label>
                    <div className="input-wrap">
                      <i className="ri-lock-line"></i>
                      <input
                        type={showPass ? "text" : "password"}
                        id="password"
                        placeholder="at least 6 characters"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                      <button type="button" className="eye" aria-label="Show or hide password" onClick={() => setShowPass(!showPass)}>
                        <i className={showPass ? "ri-eye-off-line" : "ri-eye-line"}></i>
                      </button>
                    </div>
                  </div>

                  <button type="submit" className="btn primary full" disabled={loading}>
                    {loading ? "Please wait..." : "Register"}
                  </button>
                </form>

                <p className="switch">Already have an account? <Link to="/login">Login</Link></p>
              </>
            )}
          </div>
        </section>
      </div>
    </main>
  )
}

export default Register