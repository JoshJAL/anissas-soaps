import { Oleo_Script_Swash_Caps } from 'next/font/google';
const oleo = Oleo_Script_Swash_Caps({ weight: '400', subsets: ['latin'] });

interface Props {
  children: React.ReactNode;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  required?: boolean;
  name: string;
  value: string;
}

export default function Select({ children, label, onChange, required = true, name, value }: Props) {
  return (
    <div className='grid md:grid-cols-2 gap-5 md:gap-0 text-xl items-center'>
      <label
        className={`underline underline-offset-4 font-semibold text-2xl text-green-800 ${oleo.className}`}
        htmlFor={name}
      >
        {label}:
      </label>
      <select
        value={value}
        name={name}
        id={name}
        onChange={onChange}
        required={required}
        className={`cursor-pointer outline-none border-2 border-green-800 px-2 py-3 rounded-md`}
      >
        {children}
      </select>
    </div>
  );
}
