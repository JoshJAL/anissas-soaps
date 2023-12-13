import Link from 'next/link';

export default function Footer() {
  return (
    <div className='w-full p-5'>
      <div className='w-full max-w-7xl flex flex-col gap-5 items-center justify-center text-center text-xl mx-auto'>
        <p>&copy; Anissa&apos;s Soap {new Date().getFullYear()}</p>
        <Link href={'mailto:Anissa@AnissaSoaps.com'} className='hover:underline underline-offset-4 decoration-red-800'>
          Anissa@AnissaSoaps.com
        </Link>
      </div>
    </div>
  );
}
