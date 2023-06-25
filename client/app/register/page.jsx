'use client';

import Link from 'next/link';
import { useEffect, useReducer, useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useUserContext } from '../context/user_context';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const router = useRouter();
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

  const [dispalyEyeIcon, setDisplayEyeIcon] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const val = useUserContext();

  useEffect(() => {
    setDisplayEyeIcon(authState.password.length > 0);
  }, [authState.password]);

  const handleSubmit = async(e) => {
    e.preventDefault();

    let credential = {
      email: authState.email,
      workEmail: authState.workEmail,
      username: authState.username,
      password: authState.password,
    };

    // console.log("register",val.email);
    // let d;
    const fe = await fetch("http://localhost:8000/api/auth/register",{
      method:"POST",
      headers:{
        "content-type":"application/json",
       },
      body:JSON.stringify(credential)
    }).then(data=>data.text().then(data=>{
      val.setUserName(data.username);
      val.setEmail(data.email);
    }));
    // console.log(d);
    router.push("/login");
    // console.log(credential);
  };

  return (
    <>
      <div className='RegisterPage'>
        <form className='form-container' onSubmit={handleSubmit}>
          <h3 className='section-title'>Register</h3>

          <div className='input-field'>
            <label htmlFor='email'>
              Email <span className='required'>*</span>
            </label>
            <input
              type='email'
              placeholder='username@example.com'
              id='email'
              value={authState.email}
              onChange={(e) => dispatch({ email: e.target.value })}
              required
            />
          </div>

          <div className='input-field'>
            <label htmlFor='work-email'>
              Work Email <span className='required'>*</span>
            </label>
            <input
              type='email'
              id='work-email'
              placeholder='Work Email'
              value={authState.workEmail}
              onChange={(e) => dispatch({ workEmail: e.target.value })}
            />
          </div>

          <div className='input-field'>
            <label htmlFor='username'>
              Username <span className='required'>*</span>
            </label>
            <input
              type='text'
              id='username'
              placeholder='Username'
              value={authState.username}
              onChange={(e) => dispatch({ username: e.target.value })}
              required
            />
          </div>

          <div className='input-field'>
            <label htmlFor='password'>
              Password <span className='required'>*</span>
            </label>
            <div className='password-input'>
              <input
                placeholder='Password'
                type={showPassword ? 'text' : 'password'}
                id='password'
                value={authState.password}
                onChange={(e) => dispatch({ password: e.target.value })}
                required
              />
              {dispalyEyeIcon ? (
                <button
                  type='button'
                  className='toggle-password-btn'
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
                </button>
              ) : (
                ''
              )}
            </div>
          </div>
          {/* /input-field */}

          <button className='button-primary'>Register</button>

          <p>
            Already a user? <Link href={'/login'}>Login</Link>
          </p>
        </form>
      </div>
    </>
  );
}
