import CustomSoapForm from '@/components/forms/CustomSoapForm';
import { Oleo_Script_Swash_Caps } from 'next/font/google';
const oleo = Oleo_Script_Swash_Caps({ weight: '400', subsets: ['latin'] });

export default function Page() {
  return (
    <div className='flex flex-col gap-10'>
      <p className='text-5xl text-center'>
        Whatever the occasion, Mama Anissa will make the{' '}
        <span className={`${oleo.className} text-red-800 text-6xl`}>perfect</span> soaps to impress!
      </p>
      <p className='text-center text-4xl my-10'>Leave a Lasting Impression!</p>
      <div className='w-full flex md:flex-row flex-col  justify-around md:gap-32 gap-10'>
        <section className='text-center md:w-1/2 flex gap-5 flex-col'>
          <h2 className='text-3xl'>Any Event, Any Size!</h2>
          <p className='text-2xl'>
            Baby Shower? Graduation? Class Reunion? Anissa can make any custom soap to your specification for any
            occasion!
          </p>
        </section>
        <section className='text-center md:w-1/2 flex gap-5 flex-col'>
          <h2 className='text-3xl'>Build It!</h2>
          <p className='text-2xl'>
            Please reach out to Anissa below to start the process of designing, picking the right scent, and figuring
            out the timeline!
          </p>
        </section>
      </div>
      <CustomSoapForm />
    </div>
  );
}
