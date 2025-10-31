import Logo from '@/app/logo'

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center animate-fade-in px-4">
      <h1 className="text-4xl md:text-5xl font-bold tracking-wide text-center font-sans">
        <span className="text-neutral-400">{'['}</span>

        <span className="mx-4 md:mx-10 text-transparent bg-clip-text bg-gradient-to-r  bg-green-900">
         Gustavo peres <strong className='bg-blue'> deselvolvedor</strong>
        </span>
        <span className="text-neutral-400">{']'}</span>
      </h1>

      <Logo className="w-32 h-32 md:w-80 md:h-80 mb-24 animate-pulse " />
    </section>
  )
}
