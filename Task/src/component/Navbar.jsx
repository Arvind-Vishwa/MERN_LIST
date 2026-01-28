import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-amber-50 flex justify-between px-5 py-7'>
      <h2>Task Manager</h2>
      <div className='flex gap-6'>
        <form>
            <input 
            className='bg-white rounded-xl border-0'

            />
            <button className='outline rounded-2xl cursor-pointer'>Search</button>
        </form>
        <a>Home</a>
        <a>Login</a>
        <a>Dark</a>
      </div>
    </div>
  )
}

export default Navbar
