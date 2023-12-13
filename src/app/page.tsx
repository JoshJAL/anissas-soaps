import Link from 'next/link';
import Showcase from '@/components/Showcase';
import ABarOfSoap from '@/public/images/aBarOfSoap.jpeg';
import AnissaHoldingSoap from '@/public/images/anissaHoldingSoap.jpg';
import { Oleo_Script_Swash_Caps } from 'next/font/google';
import CustomSoap from '@/public/images/customSoap.jpg';
import PurpleSoap from '@/public/images/purpleSoap.jpeg';

const oleo = Oleo_Script_Swash_Caps({ weight: '400', subsets: ['latin'] });

export default function Home() {
  return (
    <div className='w-full flex flex-col items-center justify-center gap-12'>
      <section className='flex gap-12 flex-col'>
        <h2 className={`${oleo.className} text-center text-5xl text-red-800`}>A Bar Above the Rest</h2>
        <div className='grid md:grid-cols-2 gap-10'>
          <Showcase title='Traditionally Handmade!' image={AnissaHoldingSoap} alt='Anissa Holding Soap' priority>
            <p className='text-2xl'>
              Every bar of Anissa&apos;s Soap is{' '}
              <b>
                <i>handmade</i>
              </b>{' '}
              by Anissa herself, in the traditional Lebanese fashion which was passed on to her. With her delicate means
              of production and proper care, every bar of soap is a delight!
            </p>
            <div className='flex-1' />
            <Link
              className={`${oleo.className} bg-green-800 text-white text-3xl px-2 py-3 w-full rounded-md hover:bg-red-800 hover:text-black transition-all duration-200 ease-in-out`}
              href={'/about'}
            >
              Read Our Story
            </Link>
          </Showcase>
          <Showcase title='All Natural and Organic!' image={ABarOfSoap} alt='An Example of Our Soap' priority>
            <p className='text-2xl'>
              Every single one of Anissa&apos;s soaps is made with the same base of{' '}
              <b>
                <i>natural and organic</i>
              </b>{' '}
              ingredients every time: <b>Extra Virgin Olive Oil, Water, Lye & The Scent of Your Choice</b>
            </p>
            <div className='flex-1' />
            <Link
              className={`${oleo.className} bg-green-800 text-white text-3xl px-2 py-3 w-full rounded-md hover:bg-red-800 hover:text-black transition-all duration-200 ease-in-out`}
              href={'/about'}
            >
              Learn More
            </Link>
          </Showcase>
        </div>
      </section>
      <section className='bg-[#9bcd9f] rounded-tl-[200px] rounded-br-[200px] w-screen py-10'>
        <div className='w-full flex flex-col max-w-7xl mx-auto gap-12'>
          {' '}
          <h2 className={`${oleo.className} text-center text-5xl text-red-800`}>Fan Favorites</h2>
          <div className='grid md:grid-cols-2 gap-10'>
            <Showcase tall title='Custom Event Soaps' image={CustomSoap} alt='Custom Soap Example' priority>
              <Link
                className={`${oleo.className} bg-green-800 text-white text-3xl px-2 py-3 w-full rounded-md hover:bg-red-800 hover:text-black transition-all duration-200 ease-in-out`}
                href={'/custom'}
              >
                Request Yours
              </Link>
            </Showcase>
            <Showcase tall title='Traditional Organic Lebanese Soap' image={PurpleSoap} alt='Lavender Soap' priority>
              <Link
                className={`${oleo.className} bg-green-800 text-white text-3xl px-2 py-3 w-full rounded-md hover:bg-red-800 hover:text-black transition-all duration-200 ease-in-out`}
                href={'/shop'}
              >
                Buy Now
              </Link>
            </Showcase>
          </div>
        </div>
      </section>
    </div>
  );
}
