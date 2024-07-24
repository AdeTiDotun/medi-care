import React from 'react'

const SignIn = () => {
  return (
    <>
      <div className="my-5 text-center mr-96 ml-96">
        <div>
          <h2>Sign In</h2>
        </div>
        <div>
          <h3>Email</h3>
          <input type="text" />
        </div>
        <div>
          <h3>Password</h3>
          <input type="text" />
        </div>
        <div className='mt-5'>
          <input className="text-center" type="text" placeholder='Log In' />
        </div>
      </div>
    </>
  );
}

export default SignIn;
