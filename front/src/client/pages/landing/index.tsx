import React, { useRef, useEffect } from 'react'
import { Navigation } from '../../layouts/navigation'
import { Section1 } from './section1'
import { Section2 } from './section2'

type Props = {}

export const Landing = (props: Props) => {

  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const overlay = ref.current
    window.addEventListener("load", function () {
      overlay?.classList.add("loaded");
    });


  }, [])

  return (
    <div>
      <div className="overlay" ref={ref}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className='chatbot'><iframe width="100%" height="100%" src="https://4e57-197-149-23-4.ngrok-free.app/" title="Embedded Website" /></div>

      <div className='main_container'>
        <Navigation />
        <div className='fixed-section'>
          <Section1 />
        </div>
        <Section2 />
      </div>
    </div>
  )
}