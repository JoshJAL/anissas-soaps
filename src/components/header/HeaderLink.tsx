'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

interface Props {
  href: string;
  text: string;
}

export default function HeaderLink({ href, text }: Props) {
  const pathname = usePathname();

  return (
    <Link
      className={`hover:scale-110 transition-all duration-200 ease-in-out hover:underline underline-offset-4 ${
        pathname === href ? 'scale-110 underline' : ''
      }`}
      href={href}
    >
      {text}
    </Link>
  );
}
