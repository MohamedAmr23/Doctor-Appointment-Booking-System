import React, { useState } from 'react'

const Login = () => {
  const [state,setState] = useState('sign up')
  const [name ,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const onSubmitHandler=async(e)=>{
    e.preventDefault()
  }
  return (
    <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center '>
        <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg'>
            <h3 className='text-2xl font-semibold'>{state === 'sign up' ? 'Sign Up' : 'Login'}</h3>
            <p>Please {state==='sign up' ? 'sign up' : 'log in'} to book appointment</p>
            {state === 'sign up' &&  <div className='w-full'>
              <label>Full Name</label>
              <input className='border border-[#DADADA] rounded w-full p-2 mt-1' type="text" value={name} onChange={(e)=>setName(e.target.value)} required/>
            </div>}
            <div className='w-full'>
              <label>Email</label>
              <input className='border border-[#DADADA] rounded w-full p-2 mt-1' type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
            </div>
             <div className='w-full'>
              <label>Password</label>
              <input className='border border-[#DADADA] rounded w-full p-2 mt-1' type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
            </div>
            <button className='bg-primary text-white w-full py-2 my-2 rounded-md text-base'>{state === 'sign up' ? 'Sign Up' : 'Login'}</button>
            <p>{state === 'sign up' ? 'Already have an account?' : 'Don\'t have an account?'} <span onClick={()=>setState(state==='sign up'?'login':'sign up')} className='text-primary underline cursor-pointer'>Click here</span></p>
        </div>
    </form>
  )
}

export default Login