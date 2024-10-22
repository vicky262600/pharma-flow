import React from 'react'

const Register = () => {
  return (
    <div className='container'>
        <div className='doctor'>
        <form>
            <div>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" />
            </div>
            <button type="submit">Register</button>
        </form>
        </div>
        <div className='pharmasict'></div>
        <div className='patient'></div>
    </div>
  )
}

export default Register