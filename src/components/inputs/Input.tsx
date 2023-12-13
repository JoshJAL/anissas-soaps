import { Oleo_Script_Swash_Caps } from 'next/font/google';
const oleo = Oleo_Script_Swash_Caps({ weight: '400', subsets: ['latin'] });

interface Props {
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  name: string;
  value: string;
  placeholder?: string;
  type?: 'text' | 'email' | 'password' | 'number' | 'tel';
}

export default function Input({ label, onChange, required = true, name, value, placeholder, type = 'text' }: Props) {
  return (
    <div className='grid md:grid-cols-2 gap-5 md:gap-0 text-xl items-center'>
      <label
        className={`underline underline-offset-4 font-semibold text-2xl text-green-800 ${oleo.className}`}
        htmlFor={name}
      >
        {label}:
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        id={name}
        onChange={onChange}
        required={required}
        className={`outline-none border-2 border-green-800 px-2 py-3 rounded-md`}
      />
    </div>
  );
}
