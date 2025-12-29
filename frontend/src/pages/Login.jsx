import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/api";

import "../styles/auth.css";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await loginUser(form);

      // ✅ Save login state
      localStorage.setItem("user", JSON.stringify(res.data.user));
      localStorage.setItem("isAuth", "true");

      navigate("/dashboard");
    } catch (err) {
      // ❌ DO NOT NAVIGATE
      alert(err.response?.data?.message || "Invalid email or password");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2 className="auth-logo">🌿 Smart Irrigation</h2>
        <p className="auth-subtitle">Login to your account</p>

        <form className="auth-form" onSubmit={handleSubmit}>
          <input
            className="auth-input"
            placeholder="Email address"
            required
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <input
            className="auth-input"
            type="password"
            placeholder="Password"
            required
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
          <button className="auth-btn">Login</button>
        </form>
      </div>
    </div>
  );
}
