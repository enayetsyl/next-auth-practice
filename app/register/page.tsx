'use client'
import axios from 'axios';
import { NextPage } from 'next';
import React, { FormEventHandler, useState } from 'react';

const RegisterPage : NextPage = (props): JSX.Element => {

  const [userInfo, setUserInfo] = useState({email: '', password: ''})

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
   const res =  await axios.post('http://localhost:5000/api/v1/addUser', userInfo)
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
      onChange={({target}) => setUserInfo({...userInfo, email: target.value})}
      />
    </div>
    <div className='flex items-center gap-2'>
      <label>Password</label>
      <input type="password" name="email" id="" className='border'
      onChange={({target}) => setUserInfo({...userInfo, password: target.value})}
      />
    </div>
  <input type="submit" value="Login"  className='p-2 border rounded-md'
 
  />
    </form>
  </div>
  );
};

export default RegisterPage;