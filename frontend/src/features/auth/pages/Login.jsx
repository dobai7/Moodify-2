import React, { useState, useEffect } from 'react'
import "../style/auth.scss"
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth.jsx'
import Loading from './Loading.jsx'
import AuthSide from './AuthSide.jsx'

const Login = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPass, setShowPass] = useState(false)
  const [error, setError] = useState("")

  const { user, loading, login } = useAuth()
  const navigate = useNavigate()
  const [params] = useSearchParams()
  const verified = params.get("verified")

  // already logged in? go to home
  useEffect(() => {
    if (user) navigate("/")
  }, [user, navigate])

  const submitHandler = async (e) => {
    e.preventDefault()
    if (loading) return

    setError("")
    const result = await login(email, password)

    if (result.success) {
      navigate("/")
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

            <h1>Welcome back</h1>
            <p className="sub">Login to detect your mood and get your songs.</p>

            {verified === "true" && (
              <div className="alert success"><i className="ri-checkbox-circle-line"></i> Email verified! You can login now.</div>
            )}
            {verified === "false" && (
              <div className="alert error"><i className="ri-error-warning-line"></i> Verification link is invalid or expired.</div>
            )}
            {error && (
              <div className="alert error"><i className="ri-error-warning-line"></i> {error}</div>
            )}

            <form className="auth-form" onSubmit={submitHandler}>

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
                    placeholder="enter your password"
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
                {loading ? "Please wait..." : "Login"}
              </button>
            </form>

            <p className="switch">Don't have an account? <Link to="/register">Register</Link></p>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Login