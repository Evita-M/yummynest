import heroImage from "../assets/hero.jpg"

const HomePage = () => {
  return (
    <section className="w-full h-[540px] relative">
		<div className="flex p-12 flex-col items-center justify-center absolute top-[50%] left-[50%] bg-white rounded-[1.2rem] shadow-soft translate-x-[-50%] translate-y-[-50%] text-center">
			<h1 className="!mb-[1.6rem]">Welcome to YummyNest</h1>
			<p className="text-4xl">
				Find it. Cook it. Love it. Your recipe journey starts here.
			</p>
		</div>
		<img src={heroImage} alt="hero" className="w-full h-full object-cover" />
    </section>
  )
}

export default HomePage
