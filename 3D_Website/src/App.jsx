import * as Sentry from '@sentry/react'; 

import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import Highlights from './components/Highlights/Highlights';
import Model from './components/Models/Model';
import Features from './components/Features/Features';
import HowItWorks from './components/HIW/HowItWorks';
import Footer from './components/Footer/Footer';
function App() {
  return (
   <main className='bg-[#c47eb7]'>
    <NavBar/>
    <Hero/>
    <Highlights/>
    <Model/>
    <Features/>
    <HowItWorks/>
    <Footer/>
   </main>
  )
}

export default Sentry.withProfiler(App);
