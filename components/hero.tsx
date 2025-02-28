import Logo from '@/app/logo'

export default function Hero() {
  return (

    <section className="h-screen flex flex-col items-center justify-center animate-fade-in">
<h1 className="text-4xl md:text-5xl font-bold tracking-wide text-center font-sans">
<span className="text-neutral-400">{'['}</span>
<span className="mx-10 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">

          kauan lima
        </span>
        <span className="text-neutral-400">{']'}</span>
      </h1>
      <Logo className="w-41 h-41 mb-30" />
      <h1 className="text-4xl md:text-5xl font-bold tracking-wide text-center font-sans">
  
      </h1>
      <p className="mt-6 text-xl text-neutral-300"></p>
    </section>
  )
}
