import React from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophoneAlt, faMicrophoneAltSlash } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import TextareaAutosize from 'react-textarea-autosize';

type Props = {}

export const ImageQuestion = (props: Props) => {
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
        <>
            <img src='images/back.png' alt='back-services' className='services-back' />
            <video controls={false} autoPlay loop>
                <source src='video/onirix-dark.mp4' type="video/mp4" />
            </video>
            <div className='textarea-wrapper'>
                <TextareaAutosize placeholder='Décrivez vos rêves ici' className='textarea' />
                <div className='textarea-actions'>
                    <button><FontAwesomeIcon icon={faPaperPlane} /></button>
                    <button onClick={toggleRecorder}><FontAwesomeIcon icon={listening ? faMicrophoneAltSlash : faMicrophoneAlt} /></button>
                </div>
            </div>
        </>
    )
}