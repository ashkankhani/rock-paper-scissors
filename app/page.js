import Game from './components/Game'

export default function Home() {
  return (
    <main className="md:w-screen md:h-screen bg-slate-800">
      <h1 className='text-center text-white text-5xl pt-10'>بازی سنگ کاغذ قیچی</h1>
      <Game />
      
      <h2 className='mt-72 pb-2 text-3xl text-center text-slate-300'>
        developed by <a 
          className='font-bold'
          href='https://github.com/ashkankhani/'>Ashkan Khani</a>
      </h2>

    </main>
  )
}
