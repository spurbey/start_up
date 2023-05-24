'use client';

import Link from 'next/link';
import { useReducer } from 'react';

export default function RegisterPage() {
  const [authState, dispatch] = useReducer(
    (authState, action) => ({
      ...authState,
      ...action,
    }),
    {
      email: '',
      workEmail: '',
      username: '',
      password: '',
    }
  );

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

  return (
    <>
      <div className='RegisterPage'>
        <form className='form-container' onSubmit={handleSubmit}>
          <h3 className='section-title'>Register</h3>

          <div className='input-field'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              value={authState.email}
              onChange={(e) => dispatch({ email: e.target.value })}
              required
            />
          </div>

          <div className='input-field'>
            <label htmlFor='work-email'>Work Email</label>
            <input
              type='email'
              id='work-email'
              value={authState.workEmail}
              onChange={(e) => dispatch({ workEmail: e.target.value })}
            />
          </div>

          <div className='input-field'>
            <label htmlFor='username'>Username</label>
            <input
              type='text'
              id='username'
              value={authState.username}
              onChange={(e) => dispatch({ username: e.target.value })}
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

          <button className='button-primary'>Register</button>

          <p>
            Already a user? <Link href={'/login'}>Login</Link>
          </p>
        </form>
      </div>
    </>
  );
}
