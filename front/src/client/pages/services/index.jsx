import React from 'react'
import { Navigation } from '../../layouts/navigation'

// import { AudioRecorder, useAudioRecorder } from 'react-audio-voice-recorder';
import TextareaAutosize from 'react-textarea-autosize';
import { ImageQuestion } from './imageQuestion';
import { ImageNone } from './imageNone';


export const Services = () => {
  // const recorderControls = useAudioRecorder()
  // const addAudioElement = (blob: Blob) => {
  //   const url = URL.createObjectURL(blob);
  //   const audio = document.createElement("audio");
  //   audio.src = url;
  //   audio.controls = true;
  // };
  

  return (
    <div className='services'>
      <Navigation />
      <div className='ellipse'>
          </div>
      <div className='services-content'>
        {/* <ImageQuestion/> */}
        <ImageNone/>
      </div>
    </div>
  )
}