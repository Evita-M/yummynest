import hero from '@/assets/images/hero.jpg';

const HomePage = () => {
  return (
    <section className='relative h-[540px] w-full'>
      <div className='shadow-soft absolute left-[50%] top-[50%] flex translate-x-[-50%] translate-y-[-50%] flex-col items-center justify-center rounded-[1.2rem] bg-white p-12 text-center'>
        <h1 className='!mb-[1.6rem]'>Welcome to YummyNest</h1>
        <p>Your favorite grocery e-shop is here. Discover, taste, and enjoy.</p>
      </div>
      <img src={hero} alt='hero' className='h-full w-full object-cover' />
    </section>
  );
};

export default HomePage;
