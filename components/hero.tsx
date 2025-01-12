import Logo from '@/app/logo'

export default function Hero() {
  return (
    <section className="h-screen flex flex-col items-center justify-center animate-fade-in">
      <Logo className="w-24 h-24 mb-20" />
      <h1 className="text-4xl md:text-5xl font-light tracking-wide text-center">
        <span className="text-neutral-400">{'<'}</span>
        <span className="mx-2 font-normal">kauan lima</span>
        <span className="text-neutral-400">{'/>'}</span>
      </h1>
      <p className="mt-6 text-xl text-neutral-600"></p>
    </section>
  )
}

