import './App.css'
import Form from './components/Form'
import BarChart from './components/BarChart'

function App() {
  return <>
  <div className="w-full bg-[#38BDF8] text-white pt-3 pb-3 font-semibold">
    Framework Recommender 
  </div>
  <div className='grid gap-x-8 gap-y-4 grid-cols-1 lg:grid-cols-2'>
    <Form />
    <div className='mt-10'>
      <BarChart />
    </div>
  </div>
  </>
}

export default App
