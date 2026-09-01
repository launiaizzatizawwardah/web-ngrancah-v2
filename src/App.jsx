import Layout from './components/layout/Layout'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Potential from './components/sections/Potential'
import Activities from './components/sections/Activities'
import News from './components/sections/News'
import UMKM from './components/sections/UMKM'
import Gallery from './components/sections/Gallery'

import Location from './components/sections/Location'
import BackgroundMusic from './components/ui/BackgroundMusic'

export default function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Potential />
      <Activities />
      <News />
      <UMKM />
      <Gallery />
     
      <Location />
      <BackgroundMusic />
      <audio id="bg-music" loop>
  <source src="/music.mp3" type="audio/mpeg" />
</audio>
    </Layout>
    
    
  )
}
