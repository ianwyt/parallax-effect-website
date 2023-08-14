import { useState } from 'react'
import './App.css'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import avant-garde-1 from './avant-garde-1.jpg';
import avant-garde-2 from './avant-garde-2.jpg';

function App() {
  return (
    <>
      <div>
        <Parallax pages={4}>

          <ParallaxLayer 
            offset={0}
            speed={1}
            factor={2}
            style={{
              backgroundImage: `url (${avant-garde-1})`,
              backgroundSize: 'cover',
            }}
          />

          <ParallaxLayer 
            offset={2}
            speed={1}
            factor={4}
            style={{
              backgroundImage: `url (${avant-garde-2})`,
              backgroundSize: 'cover',
            }}
          />

          <ParallaxLayer 
            offset={0.2}
            speed={0.5}
          >
            <h1>Hello World!</h1>
          </ParallaxLayer>

          <ParallaxLayer 
            offset={3.2} 
            speed={2}
          >
            <h1>That would be fun</h1>
          </ParallaxLayer>

        </Parallax>
      </div>
    </>
  )
}

export default App
