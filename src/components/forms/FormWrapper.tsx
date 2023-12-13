import { Oleo_Script_Swash_Caps } from 'next/font/google';
const oleo = Oleo_Script_Swash_Caps({ weight: '400', subsets: ['latin'] });

interface Props {
  children: React.ReactNode;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  title?: string;
  submitting: boolean;
  buttonText?: string;
  submittingText?: string;
}

export default function FormWrapper({ children, handleSubmit, title, submitting, submittingText, buttonText }: Props) {
  return (
    <form className='flex flex-col w-full mx-auto border-2 border-red-800 p-5 rounded-lg gap-5' onSubmit={handleSubmit}>
      {title && <h1 className={`text-3xl font-semibold  text-center text-green-800 ${oleo.className}`}>{title}</h1>}
      {children}
      <button
        className={`w-full bg-green-800 text-white text-2xl px-2 py-3 rounded-md hover:text-black hover:bg-red-800 transition-all duration-200 ease-in-out ${oleo.className}`}
      >
        {!submitting ? buttonText ?? 'Submit' : submittingText ?? 'Submitting...'}
      </button>
    </form>
  );
}
