import Link from 'next/link';
import HeaderLink from './HeaderLink';
import { Oleo_Script_Swash_Caps } from 'next/font/google';
import DropdownMenu from './DropdownMenu';
const oleo = Oleo_Script_Swash_Caps({ weight: '400', subsets: ['latin'] });

export default function Header() {
  return (
    <header className={`w-full bg-green-800/75 backdrop-blur-md p-5 fixed top-0 ${oleo.className} z-50`}>
      <nav className='w-full flex items-center mx-auto max-w-7xl text-2xl'>
        <Link href={'/'} className='group'>
          <Logo />
        </Link>
        <div className='flex-1' />
        <div className='items-center gap-8 md:flex hidden'>
          <HeaderLink text='Contact' href='/contact' />
          <HeaderLink text='Custom Soaps' href='/custom' />
          <HeaderLink text='Our Story' href='/about' />
          <HeaderLink text='Shop' href='/shop' />
        </div>
        <div className='md:hidden block'>
          <DropdownMenu />
        </div>
      </nav>
    </header>
  );
}

function Logo() {
  return (
    <div className='rounded-full h-24 w-24 bg-white border-4 border-red-800 flex flex-col items-center justify-center text-xl group-hover:rotate-12 group-hover:scale-110 transition-all duration-200 ease-in-out'>
      <p className='text-red-800'>Anissas</p>
      <p className='text-green-800'>Soap</p>
    </div>
  );
}
