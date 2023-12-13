import { Menu } from '@headlessui/react';
import Link from 'next/link';
import { Oleo_Script_Swash_Caps } from 'next/font/google';

const oleo = Oleo_Script_Swash_Caps({ weight: '400', subsets: ['latin'] });

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

interface DropdownMenuItemProps {
  href: string;
  children: React.ReactNode;
  target?: '_self' | '_blank' | '_parent' | '_top';
  additionalClasses?: string;
}

export default function DropdownMenuItem({
  href,
  children,
  target = '_self',
  additionalClasses
}: DropdownMenuItemProps) {
  return (
    <Menu.Item>
      {(active) => (
        <Link
          target={target}
          href={href}
          className={classNames(
            active ? 'bg-green-800 font-semibold' : '',
            'block px-4 py-2 text-lg hover:bg-red-800',
            `text-white hover:text-black hover:no-underline ${oleo.className}`,
            additionalClasses ? additionalClasses : ''
          )}
        >
          {children}
        </Link>
      )}
    </Menu.Item>
  );
}
