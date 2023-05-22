'use client';

import Link from 'next/link';
import { useReducer } from 'react';

export default function LoginPage() {
  const [authState, dispatch] = useReducer(
    (authState, action) => ({
      ...authState,
      ...action,
    }),
    {
      email: '',
      password: '',
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    let credential = {
      email: authState.email,
      password: authState.password,
    };
    console.log(credential);
  };

  return (
    <>
      <div className='LoginPage'>
        <form className='form-container' onSubmit={handleSubmit}>
          <h3 className='section-title'>Login</h3>
          <div className='input-field'>
            <label htmlFor='email'>Email/College id</label>
            <input
              type='text'
              id='email'
              value={authState.email}
              onChange={(e) => dispatch({ email: e.target.value })}
              required
            />
          </div>

          <div className='input-field'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              id='password'
              value={authState.password}
              onChange={(e) => dispatch({ password: e.target.value })}
              required
            />
          </div>

          <button className='button-primary'>Login</button>

          <p>
            Not Registered? <Link href={'/register'}>Register Here</Link>
          </p>
        </form>
      </div>
    </>
  );
}
