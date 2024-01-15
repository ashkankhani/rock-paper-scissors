import Image from 'next/image'
import Game from './components/Game'

export default function Home() {
  return (
    <main className="md:w-screen md:h-screen bg-slate-800">
      <h1 className='text-center text-white text-5xl pt-10'>بازی سنگ کاغذ قیچی</h1>
      <Game />
    </main>
  )
}
