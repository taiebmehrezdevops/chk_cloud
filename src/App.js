import React from 'react'



import MapSection from './components/Map' // import the map here



import './App.css'

const location = {
  address: 'GoMyCode Hackerspace, 1 Place Tahar Haddad, 1 Tunis 1053, Tunis 1053',
  lat: 36.8340197,
  lng: 10.234206,
} // our location object from earlier

const App = () => (
  <div className="App">
   
    <MapSection location={location} zoomLevel={17} /> {/* include it here */}
   
  </div>
)

export default App