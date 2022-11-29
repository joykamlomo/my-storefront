import React from 'react';
import { ShoppingBagIcon } from '@heroicons/react/24/solid';

function SignupScreen() {
  return (
    <div className="flex h-screen">
      <div className="max-w-md mx-auto flex flex-col space-y-8 py-8 px-4">
        <div className="w-full flex-0">
          <span>
            <ShoppingBagIcon className="w-10 h-10 text-emerald-700" />{' '}
          </span>
          <h2 className="text-black text-4xl font-sans tracking-wide leading-9r mt-10">
            Now lets make you a Member.
          </h2>
        </div>
        <div className="flex-grow min-h-0">
          <form className="w-full flex flex-col items-center space-y-5">
            <input
              type="text"
              className="w-full py-3 px-4 border border-black rounded-xl"
              placeholder="John Doe"
            />
            <input
              type="email"
              className="w-full py-3 px-4 border border-black rounded-xl"
              placeholder="example@email.com"
            />
            <input
              type="password"
              className="w-full py-3 px-4 border border-black rounded-xl"
              placeholder="********"
            />
            <span className="text-gray-400 text-xs">
              <p className="py-2 px-1">
                X Minimum of 8 characters <br /> X Uppercase, lowercase letters,
                symbols and numbers
              </p>
            </span>
            <input
              type="password"
              className="w-full py-3 px-4 border border-black rounded-xl"
              placeholder="Enter password again"
            />

            <button className="bg-black text-white py-4 px-6 mt-5 sm:w-full md:w-96 rounded-full">
              Create Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignupScreen;
