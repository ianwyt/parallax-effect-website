import { useRef } from 'react';
import './App.css'
import first from './assets/avant-garde-1.jpg'
import second from './assets/avant-garde-2.jpg'

import { Parallax, ParallaxLayer } from '@react-spring/parallax'

function App() {
  const ref = useRef();

  return (
    <>
      <div>
        <Parallax pages={4}>

        <ParallaxLayer
          offset={0}
          speed={1}
          factor={2}
          style={{
            backgroundImage: `url(${first})`,
            backgroundSize: 'cover',
          }}
        />

        <ParallaxLayer
          offset={2}
          speed={1}
          factor={4}
          style={{
            backgroundImage: `url(${second})`,
            backgroundSize: 'cover',
          }}
        ></ParallaxLayer>

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
