import React from 'react'
import { Navigation } from '../../layouts/navigation'
import TextareaAutosize from 'react-textarea-autosize';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';

type Props = {}

export const Services = (props: Props) => {
  return (
    <div className='services'>
      <Navigation />
      <div className='services-content'>
        <img src='images/back.png' alt='back-services' className='services-back' />
        <video controls={false} autoPlay loop>
          <source src='video/onirix-dark.mp4' type="video/mp4" />
        </video>
        <div className='textarea-wrapper'>
          <TextareaAutosize placeholder='Décrivez vos rêves ici' className='textarea' />
          <div className='textarea-actions'>
            <button><FontAwesomeIcon icon={faPaperPlane}/></button>
            <button><FontAwesomeIcon icon={faMicrophoneAlt}/></button>
          </div>
        </div>
      </div>
    </div>
  )
}