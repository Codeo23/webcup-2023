import { faMicrophoneAltSlash, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import TextareaAutosize from 'react-textarea-autosize';

type Props = {
  setViewRes : React.Dispatch<React.SetStateAction<boolean>>
}

export const ImageNone = ({setViewRes}: Props) => {
  return (
    <div className='image-none'>
        <img src='logo/logo-text-white.png' alt='logo-text-white' className='text-logo'/>
        <h1>Rêver à l'infini</h1>
        <p>L'IA qui prédit votre avenir grâce à <span>vos rêves.</span></p>
        <div className='textarea-wrapper'>
                <TextareaAutosize onFocus={() => setViewRes(true)} placeholder='Décrivez vos rêves ici' className='textarea' />
                <div className='textarea-actions'>
                    <button><FontAwesomeIcon icon={faPaperPlane} /></button>
                    <button><FontAwesomeIcon icon={faMicrophoneAltSlash} /></button>
                </div>
            </div>
    </div>
  )
}