import { useState } from 'react'
import './App.css'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

function App() {
  return (
    <>
      <div>
        <Parallax pages={4}>
          <ParallaxLayer speed={1}>
            <h1>Hello World!</h1>
          </ParallaxLayer>

          <ParallaxLayer offset={1} speed={0.5}>
            <h1>That would be fun</h1>
          </ParallaxLayer>
        </Parallax>
      </div>
    </>
  )
}

export default App
