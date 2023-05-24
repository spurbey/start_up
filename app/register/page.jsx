"use client";

import Link from "next/link";
import { useReducer, useState } from "react";

export default function RegisterPage() {
  const [authState, dispatch] = useReducer(
    (authState, action) => ({
      ...authState,
      ...action,
    }),
    {
      email: "",
      workEmail: "",
      username: "",
      password: "",
    }
  );

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    let credential = {
      email: authState.email,
      workEmail: authState.workEmail,
      username: authState.username,
      password: authState.password,
    };
    console.log(credential);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="RegisterPage">
        <form className="form-container" onSubmit={handleSubmit}>
          <h3 className="section-title">Register</h3>

          <div className="input-field">
            <label htmlFor="email">
              Email <span className="required">*</span>
            </label>
            <input
              type="email"
              placeholder="username@example.com"
              id="email"
              value={authState.email}
              onChange={(e) => dispatch({ email: e.target.value })}
              required
            />
          </div>

          <div className="input-field">
            <label htmlFor="work-email">
              Work Email <span className="required">*</span>
            </label>
            <input
              type="email"
              id="work-email"
              placeholder="Work Email"
              value={authState.workEmail}
              onChange={(e) => dispatch({ workEmail: e.target.value })}
            />
          </div>

          <div className="input-field">
            <label htmlFor="username">
              Username <span className="required">*</span>
            </label>
            <input
              type="text"
              id="username"
              placeholder="Username"
              value={authState.username}
              onChange={(e) => dispatch({ username: e.target.value })}
              required
            />
          </div>

          <div className="input-field">
            <label htmlFor="password">
              Password <span className="required">*</span>
            </label>
            <div className="password-input">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Password"
                value={authState.password}
                onChange={(e) => dispatch({ password: e.target.value })}
                required
              />
              <button
                type="button"
                className="toggle-password"
                onClick={togglePasswordVisibility}
              >
                <img
                  src={
                    showPassword
                      ? "./eye-password-show-icon.png"
                      : "./eye-password-hide-icon.png"
                  }
                  alt={showPassword ? "Hide" : "Show"}
                />
              </button>
            </div>
          </div>

          <button className="button-primary">Register</button>

          <p>
            Already a user? <Link href={"/login"}>Login</Link>
          </p>
        </form>
      </div>
    </>
  );
}
