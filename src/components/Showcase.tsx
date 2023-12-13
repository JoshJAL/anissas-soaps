import Image from 'next/image';
import type { StaticImageData } from 'next/image';

interface Props {
  children: React.ReactNode;
  title: string;
  image: StaticImageData;
  alt: string;
  priority?: boolean;
  tall?: boolean;
}

export default function Showcase({ children, title, image, alt, priority, tall }: Props) {
  return (
    <div className='flex flex-col gap-6 text-center'>
      <div
        className={`w-full ${
          tall ? 'h-[780px] ' : 'h-[400px]'
        } rounded-md shadow-lg overflow-hidden flex items-center justify-center`}
      >
        <Image src={image} alt={alt} priority={priority} className={`h-full min-w-full w-auto object-cover`} />
      </div>
      <h3 className='text-3xl'>{title}</h3>
      {children}
    </div>
  );
}
