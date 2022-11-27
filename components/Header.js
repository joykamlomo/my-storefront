import React from 'react';
import Image from 'next/image';
import {
  Bars4Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
} from '@heroicons/react/24/solid';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';

function Header() {
  const { data: session } = useSession();

  // routing
  const router = useRouter();
  // session.user
  return (
    <header>
      {/* topnav */}
      <div className="flex items-center bg-gray-900 p-1 flex-grow py-2">
        {/* left */}
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            src="https://links.papareact.com/f90"
            alt=""
            height={40}
            width={100}
            onbjectFit="contain"
            className="cursor-pointer h-10 w-20"
          />
        </div>

        {/* search */}
        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow bg-yellow-400 hover:bg-yellow-500">
          <input
            type="text"
            className="p-2 h-full w-6 flex-grow flex-shrink rouded-l-md focus:outline-none px-4"
          />
          <MagnifyingGlassIcon className="h-12 p-4" />
        </div>

        {/* right */}
        <div className="text-white flex items-center text-xs space-x-6 mx-6">
          {session ? (
            <>
              <div onclick={signOut} className="link cursor-pointer">
                <p>{`Hey, ${session.user.name}`}</p>
                <p className="font-extrabold md:text-md">Accounts & Lists</p>
              </div>
              <div className="link cursor-pointer">
                <p>Returns</p>
                <p className="font-extrabold md:text-md">& Orders</p>
              </div>
            </>
          ) : (
            <div onClick={signIn}>
              <p>Sign In</p>
            </div>
          )}

          <div
            onclick={() => router.push('/checkout')}
            className="relative link flex items-center"
          >
            <span className="absolute top-0 right-0 md:right-7 h-5 w-5 bg-yellow-400 text-center text-black font-bold rounded-full">
              0
            </span>
            <ShoppingBagIcon className="h-10" />
            <p className="hidden  md:inline font-extrabold md:text-sm mt-2">
              Cart
            </p>
          </div>
        </div>
      </div>
      {/* bottomnav */}
      <div className="flex items-center space-x-3 p-2 pl-6 bg-gray-500 text-white">
        <p className="link flex items-center">
          <Bars4Icon className="h-6 mr-1" />
          All
        </p>
        <p className="link hidden md:inline-flex">menu</p>
        <p className="link hidden md:inline-flex">menu</p>
        <p className="link hidden md:inline-flex">menu</p>
        <p className="link hidden md:inline-flex">menu</p>
        <p className="link hidden md:inline-flex">menu</p>
      </div>
    </header>
  );
}

export default Header;
