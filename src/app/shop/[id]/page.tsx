'use client';

import Input from '@/components/inputs/Input';
import Select from '@/components/inputs/Select';
import Products from '@/public/products.json';
import Scents from '@/public/scents.json';
import { Oleo_Script_Swash_Caps } from 'next/font/google';
import Image from 'next/image';
import { useState } from 'react';

const oleo = Oleo_Script_Swash_Caps({ weight: '400', subsets: ['latin'] });

export default function Page({ params }: { params: { id: string } }) {
  const { id } = params;
  const [scentSelection, setScentSelection] = useState('');
  const [quantity, setQuantity] = useState('1');

  const product = Products.find((product) => product.id === Number(id));
  const basePath = '/images/';

  function createScentOptions() {
    const scentOptions = [];
    for (const scent in Scents) {
      if (Scents.hasOwnProperty(scent)) {
        scentOptions.push(
          <option value={Scents[scent as keyof typeof Scents]} key={scent}>
            {Scents[scent as keyof typeof Scents]}
          </option>
        );
      }
    }
    return scentOptions;
  }

  const scentOptions = createScentOptions();

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setScentSelection(e.target.value);
  }

  return (
    <div className='grid grid-cols-2 w-full gap-10'>
      <Image
        priority
        src={`${basePath}${product?.image}`}
        alt={product?.title ?? ''}
        width={370}
        height={550}
        className='w-full h-auto rounded-md shadow-lg'
      />
      <div className='flex flex-col gap-5 text-center text-2xl'>
        <h1 className='text-3xl'>{product?.title}</h1>
        <p>${product?.price}</p>
        <Select label='Scent' name='scentSelection' onChange={(e) => handleChange(e)} value={scentSelection}>
          {scentOptions}
        </Select>
        <Input
          type='number'
          label='Quantity'
          onChange={(e) => setQuantity(e.target.value)}
          name='quantity'
          value={quantity}
        />
        <div className='flex-1' />
        <button
          className={`px-2 py-3 bg-green-800 hover:bg-red-800 text-white hover:text-black transition-all duration-200 ease-in-out rounded-md ${oleo.className}`}
          type='button'
          onClick={(e) => {
            e.preventDefault();
            alert('This does nothing for now!');
          }}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}
