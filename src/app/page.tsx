import Header from '@/components/header'
import Navigation from '@/components/navigation'
import MainPage from './main/page'

export default function Home() {
  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <MainPage/>
      </main>
    </div>
  )
}
