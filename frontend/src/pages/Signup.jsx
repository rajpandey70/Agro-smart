import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signupUser } from "../services/api";

import "../styles/auth.css";

export default function Signup() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signupUser(form);
      alert("Signup successful");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2 className="auth-logo">🌿 Smart Irrigation</h2>
        <p className="auth-subtitle">Create your account</p>

        <form className="auth-form" onSubmit={handleSubmit}>
          <input
            className="auth-input"
            placeholder="Full name"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <input
            className="auth-input"
            placeholder="Email address"
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <input
            className="auth-input"
            type="password"
            placeholder="Password"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
          <button className="auth-btn">Sign Up</button>
        </form>
      </div>
    </div>
  );
}
