import { useState } from 'react'
import './App.css'
import ITGMap from './components/map'
import NavigationMenu from './components/navigation-menu'

function App() {
  const [coords , setCoords] = useState({index_of: 0, locations: []})
  return (
    <div className='main'>
      <NavigationMenu set_coords={setCoords} />
      <ITGMap coords={coords} />
    </div>
  )
}

export default App
