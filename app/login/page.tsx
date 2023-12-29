'use client'
import { NextPage } from 'next';
import { signIn } from 'next-auth/react';
import React, { FormEventHandler, useState } from 'react';

const LoginPage: NextPage = (props): JSX.Element => {

const [userInfo, setUserInfo] = useState({email: '', password: ''})

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
   const res =  await signIn('credentials', {
      email: userInfo.email,
      password: userInfo.password,
      redirect: false
    })

    console.log(res)
  }

  return (
    <div className=' flex flex-col  justify-center items-center my-5'>
      <form className='space-y-2' 
      onSubmit={handleSubmit}
      >
      <div className='flex items-center gap-2'>
        <label>Email</label>
        <input type="text" name="email" id="" className='border'
        value={userInfo.email}
        onChange={({target}) => setUserInfo({...userInfo, email: target.value})}
        />
      </div>
      <div className='flex items-center gap-2'>
        <label>Password</label>
        <input type="password" name="email" id="" className='border'
        value={userInfo.password}
        onChange={({target}) => setUserInfo({...userInfo, password: target.value})}
        />
      </div>
    <input type="submit" value="Login"  className='p-2 border rounded-md'
   
    />
      </form>
    </div>
  );
};

export default LoginPage;