'use client';

import Link from 'next/link';
import { useEffect, useReducer, useState} from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useRouter } from 'next/navigation';
import { useUserContext } from '../context/user_context';

export default function LoginPage() {
  const router  = useRouter();
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

  const [dispalyEyeIcon, setDisplayEyeIcon] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const val = useUserContext();

  const handleSubmit = async (e) => {
    e.preventDefault();

    let credential = {
      email: authState.email,
      password: ''+authState.password,
    };
    const fe = await fetch("http://localhost:8000/api/auth/login",{
      method:"POST",
      headers:{
        "content-type":"application/json",
       },
      body:JSON.stringify(credential)
    }).then(data=>{
      if(!data.ok) throw new Error("Not found");
      return data.json();
    }).then(data=>{
      // console.log(data);
      // localStorage.setItem("username",data.details.username);
      // localStorage.setItem("email",data.details.email);
      // console.log("login",val.email);
      val.setEmail(data.details.email);
      val.setUserName(data.details.username);
      // val.setWorkEmail(data.details.)
        router.push('/profile');
    })
    };

  useEffect(() => {
    setDisplayEyeIcon(authState.password.length > 0);
  }, [authState.password]);

  return (
    <>
      <div className='LoginPage'>
        <form className='form-container' onSubmit={handleSubmit}>
          <h3 className='section-title'>Login</h3>
          <div className='input-field'>
            <label htmlFor='email'>
              Email/College id <span className='required'>*</span>
            </label>
            <input
              placeholder='username@example.com'
              type='text'
              id='email'
              value={authState.email}
              onChange={(e) => dispatch({ email: e.target.value })}
              required
            />
          </div>
          {/* /input-field */}

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

          <button className='button-primary'>Login</button>

          <p>
            Not Registered? <Link href={'/register'}>Register Here</Link>
          </p>
        </form>
      </div>
    </>
  );
}
