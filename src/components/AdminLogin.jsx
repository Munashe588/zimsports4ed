import { useState } from "react"
import { supabase } from "../supabase"

function AdminLogin({ onLogin }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = async (e) => {
  e.preventDefault()
  setError("")

  if (!email || !password) {
    setError("Please enter your email and password.")
    return
  }

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    setError("Invalid email or password.")
    return
  }

  onLogin()
}

  return (
    <div className="admin-login-page">

      <div className="admin-login-card">

        <img
          src="/Logo.png"
          alt="ZimSport4ED logo"
          className="admin-login-logo"
        />

        <p className="section-label">ZIMSPORT4ED ADMINISTRATION</p>

        <h1>Admin Login</h1>

        <p className="admin-login-intro">
          Sign in to manage athlete registrations.
        </p>

        <form onSubmit={handleSubmit}>

          <label htmlFor="admin-email">Email Address</label>

          <input
            id="admin-email"
            type="email"
            placeholder="admin@zimsport4ed.co.zw"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="admin-password">Password</label>

          <input
            id="admin-password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && (
            <p className="admin-login-error">{error}</p>
          )}

          <button type="submit" className="admin-login-button">
            Sign In
          </button>

        </form>

      </div>

    </div>
  )
}

export default AdminLogin