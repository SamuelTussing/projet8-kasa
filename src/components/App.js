//import { useState } from 'react'
import '../styles/sass/main.css';
import Banniere from './Banniere';
import Header from './Header'
import Footer from './Footer'
import Gallery from './Gallery'
//import Card from './Card'

function App() {
  return (
    <div className='content'>
      <Header />
      <Banniere />
      <Gallery />
      <Footer />
    </div>
);
}

export default App;
