'use client';

import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { IoMenu } from 'react-icons/io5';
import DropdownMenuItem from './DropdownMenuItem';

export default function DropdownMenu() {
  return (
    <Menu as='div' className={'relative inline-block text-left bg-green-800'}>
      <Menu.Button
        className={
          'bg-green-800 inline-flex justify-center rounded-md border text-white hover:text-black border-white p-2 font-medium shadow-sm hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:ring-offset-gray-100 transition-all'
        }
        aria-label='menu'
      >
        <IoMenu className='w-8 h-8' />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <Menu.Items
          className={
            'absolute right-0 z-20 mt-2 w-52 origin-top-right rounded-md border border-zinc-400 bg-green-800 ring-1 ring-black ring-opacity-5 focus:outline-none divide-zinc-400'
          }
        >
          <div className='py-1'>
            <DropdownMenuItem href={'/contact'}>Contact</DropdownMenuItem>
            <DropdownMenuItem href={'/custom'}>Custom Soaps</DropdownMenuItem>
            <DropdownMenuItem href={'/about'}>Our Story</DropdownMenuItem>
            <DropdownMenuItem href={'/shop'}>Shop</DropdownMenuItem>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
