import './App.css'
import Form from './components/Form'
import BarChart from './components/BarChart'

function App() {
  return <div className='grid grid-cols-1 lg:grid-cols-2'>
    <Form />
    <div className='flex justify-around mt-40'>
      <BarChart />
    </div>
  </div>
}

export default App
