import React,{useRef,useEffect} from 'react'
import { Navigation } from '../../layouts/navigation'
import { Section1 } from './section1'

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
      <Navigation/>
      <Section1/>
    </div>
  )
}