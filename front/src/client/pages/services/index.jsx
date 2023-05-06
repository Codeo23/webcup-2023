import React from 'react'
import { Navigation } from '../../layouts/navigation'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
// import { AudioRecorder, useAudioRecorder } from 'react-audio-voice-recorder';
import TextareaAutosize from 'react-textarea-autosize';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophoneAlt, faMicrophoneAltSlash } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';

export const Services = () => {
  // const recorderControls = useAudioRecorder()
  // const addAudioElement = (blob: Blob) => {
  //   const url = URL.createObjectURL(blob);
  //   const audio = document.createElement("audio");
  //   audio.src = url;
  //   audio.controls = true;
  // };
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  const toggleRecorder = () => {
    if (listening) {
      SpeechRecognition.stopListening()
      return
    }
    SpeechRecognition.startListening({ continuous: true })
  }

  return (
    <div className='services'>
      <Navigation />
      <div className='ellipse'>
          </div>
      <div className='services-content'>
        <img src='images/back.png' alt='back-services' className='services-back' />
        <video controls={false} autoPlay loop>
          <source src='video/onirix-dark.mp4' type="video/mp4" />
        </video>
        <div className='textarea-wrapper'>
          <TextareaAutosize placeholder='Décrivez vos rêves ici' className='textarea' />
          <div className='textarea-actions'>
            {/* <div style={{position: 'absolute', background: 'transparent' }}>
              <AudioRecorder
                onRecordingComplete={(blob) => addAudioElement(blob)}
                recorderControls={recorderControls}
              />
            </div> */}
            <button><FontAwesomeIcon icon={faPaperPlane} /></button>
            <button onClick={toggleRecorder}><FontAwesomeIcon icon={listening ? faMicrophoneAltSlash : faMicrophoneAlt} /></button>
          </div>
          
        </div>
      </div>
    </div>
  )
}