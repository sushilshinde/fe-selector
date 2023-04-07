import './App.css'
import Form from './components/Form'
import BarChart from './components/BarChart'

function App() {
  return <div className='flex flex-col'>
    <Form />
    <div className='flex justify-around mt-40'>
      <BarChart />
      <BarChart />
    </div>
  </div>
}

export default App
