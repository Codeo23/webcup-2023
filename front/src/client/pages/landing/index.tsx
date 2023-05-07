import React,{useRef,useEffect} from 'react'
import { Navigation } from '../../layouts/navigation'
import { Section1 } from './section1'
import { Section2 } from './section2'

type Props = {}

export const Landing = (props: Props) => {

  const ref = useRef<HTMLDivElement>(null)
  useEffect(()=> {
    const overlay = ref.current
    window.addEventListener("load", function () {
    overlay?.classList.add("loaded");
  });


  },[])

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
      <div className='main_container'>  
        <Navigation/>
        <div className='fixed-section'>
            <Section1/> 
        </div>
        <div className='scrollable_section'> 
            <Section2/>
            
        </div>
      </div>  
    </div>
  )
}