"use client";

import Link from "next/link";
import { useReducer, useState } from "react";

export default function LoginPage() {
  const [authState, dispatch] = useReducer(
    (authState, action) => ({
      ...authState,
      ...action,
    }),
    {
      email: "",
      password: "",
    }
  );

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    let credential = {
      email: authState.email,
      password: authState.password,
    };
    console.log(credential);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="LoginPage">
        <form className="form-container" onSubmit={handleSubmit}>
          <h3 className="section-title">Login</h3>
          <div className="input-field">
            <label htmlFor="email">
              Email/College id <span className="required">*</span>
            </label>
            <input
              placeholder="username@example.com"
              type="text"
              id="email"
              value={authState.email}
              onChange={(e) => dispatch({ email: e.target.value })}
              required
            />
          </div>

          <div className="input-field">
            <label htmlFor="password">
              Password <span className="required">*</span>
            </label>
            <div className="password-input">
              <input
                placeholder="Password"
                type={showPassword ? "text" : "password"}
                id="password"
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

          <button className="button-primary">Login</button>

          <p>
            Not Registered? <Link href={"/register"}>Register Here</Link>
          </p>
        </form>
      </div>
    </>
  );
}
