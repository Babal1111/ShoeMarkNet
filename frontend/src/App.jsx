import React from 'react'
import {Cart, Home, Footer} from './components'
import {Sales} from './components'
import {Navbar} from './components'
import { homeapi, popularsales, toprateslaes, footerAPI } from './data/data.jsx'
const App = () => {
  return (
    <>
    <Navbar/>
    <Cart/>
    <main>
      <Home homeapi = {homeapi}/>
      <Sales endpoint={popularsales} ifExists />
      <Sales endpoint={toprateslaes} />
    </main>
    <Footer footerAPI={footerAPI} />
    </>
  )
}
 
export default App