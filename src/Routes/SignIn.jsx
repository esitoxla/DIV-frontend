import React from 'react'


const SignIn = () => {
  return (
       <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div
        className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0"
      >
         {/* left side */}
        <div className="flex flex-col justify-center p-8 md:p-14">
          <span class="mb-3 text-4xl font-bold">Sign in</span>
          <span class="font-light text-gray-400 mb-8">
            Welcome back! Please enter your details
          </span>
          <div class="py-4">
            <span class="mb-2 text-md">Email</span>
            <input
              type="text"
              class="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              name="email"
              id="email"
            />
          </div>
          <div class="py-4">
            <span class="mb-2 text-md">Password</span>
            <input
              type="password"
              name="pass"
              id="pass"
              class="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
            />
          </div>
          <div class="flex justify-between w-full py-4">
            <div class="mr-24">
              <input type="checkbox" name="ch" id="ch" class="mr-2" />
              <span class="text-md">Remember me</span>
            </div>
            <span class="font-bold text-md">Forgot password</span>
          </div>
          <button
            class="w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300"
          >
            Sign in
          </button>
          <button
            class="w-full border border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-black hover:text-white"
          >
            <img src="google.svg" alt="img" class="w-6 h-6 inline mr-2" />
            Sign in with Google
          </button>
          <div class="text-center text-gray-400">
            Dont'have an account?
            <span class="font-bold text-black">Sign up for free</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn