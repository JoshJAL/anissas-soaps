import Products from '@/public/products.json';
import Image from 'next/image';
import Link from 'next/link';
import { Oleo_Script_Swash_Caps } from 'next/font/google';

const oleo = Oleo_Script_Swash_Caps({ weight: '400', subsets: ['latin'] });

export default function Page() {
  const basePath = '/images/';

  return (
    <div className='grid md:grid-cols-2 w-full items-center justify-center md:gap-10 gap-5'>
      {Products.map((product, index) => {
        return (
          <Link
            href={`shop/${product.id}`}
            key={index}
            className='flex flex-col gap-5 text-center text-2xl hover:bg-mint group transition-all duration-200 ease-in-out p-5 rounded-lg'
          >
            <div className='object-cover overflow-hidden h-[500px] flex  justify-center rounded-lg shadow-lg'>
              <Image
                priority
                src={`${basePath}${product.image}`}
                alt={product.title}
                width={370}
                height={550}
                className='w-full object-cover group-hover:scale-110 group-hover:opacity-80 transition-all duration-300 ease-in-out'
              />
            </div>
            <p>{product.title}</p>
            <p>${product.price}</p>
            <p
              className={`${oleo.className} px-2 py-3 bg-green-800 hover:bg-red-800 text-white hover:text-black transition-all duration-200 ease-in-out rounded-md`}
            >
              Buy Now
            </p>
          </Link>
        );
      })}
    </div>
  );
}
