import { ShoppingBagIcon } from '@heroicons/react/24/solid';
import React from 'react';

function SignInScreen() {
  return (
    <div className="flex h-screen backdrop-blur-sm">
      <div className="max-w-md mx-auto flex flex-col space-y-8 py-8 px-8">
        <div className="w-full flex-0">
          <span>
            <ShoppingBagIcon className="w-10 h-10 text-emerald-700" />{' '}
          </span>
          <h2 className="text-black text-5xl font-medium tracking-wide mt-8">
            Sign In.
          </h2>
        </div>
        <div className="flex-grow min-h-0">
          <form className="w-96 flex flex-col space-y-5">
            <input
              type="email"
              className="w-96 py-3 px-4 border border-black rounded-xl"
              placeholder="example@email.com"
            />
            <input
              type="password"
              className="w-96 py-3 px-4 border border-black rounded-xl"
              placeholder="********"
            />
            <ul className="text-gray-400 text-xs px-1 -py-4">
              <li>X Minimum of 8 characters</li>
              <li>X Uppercase, lowercase letters, symbols and numbers</li>
            </ul>

            <button className="bg-black text-white py-4 px-6 mt-7 w-96 rounded-full outline-none right-0">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignInScreen;
