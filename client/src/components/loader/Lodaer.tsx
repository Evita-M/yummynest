import { LuLoader } from 'react-icons/lu';

export const Loader = () => (
  <div className='flex h-full items-center justify-center'>
    <LuLoader
      className='h-[5.6rem] w-[5.6rem] animate-spin'
      color='var(--color-brown)'
    />
  </div>
);
