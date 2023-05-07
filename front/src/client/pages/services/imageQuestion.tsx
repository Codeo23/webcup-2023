import React, { useState } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophoneAlt, faMicrophoneAltSlash, faRefresh } from "@fortawesome/free-solid-svg-icons";
import { faCopy, faPaperPlane, faSave } from '@fortawesome/free-regular-svg-icons';
import TextareaAutosize from 'react-textarea-autosize';
import { FormData } from './schema';
import { UseFormGetValues, UseFormHandleSubmit, UseFormRegister } from 'react-hook-form';
import { BeatLoader } from 'react-spinners';
import { TypeAnimation } from 'react-type-animation';
import useSpeechToText from 'react-hook-speech-to-text';
import { Login } from '../login';

type Props = {
    onSubmit: (data: FormData) => void,
    register: UseFormRegister<FormData>,
    handleSubmit: UseFormHandleSubmit<FormData>,
    prediction: string,
    loading: boolean
}

export const ImageQuestion = ({ onSubmit, register, handleSubmit, prediction, loading }: Props) => {
  const [isOpenLogin, setIsOpenLogin] = useState(false)
    function closeModalLogin() {
        setIsOpenLogin(false)
      }
    
      function openModalLogin() {
        setIsOpenLogin(true)
      }

    return (
        <div className='image-question'>
            <Login isOpen={isOpenLogin} closeModal={closeModalLogin}/>
            <img src='images/back.png' alt='back-services' className='services-back' />
            <div className='video'>
                <video controls={false} autoPlay loop muted>
                    <source src='video/onirix-dark.mp4' type="video/mp4" />
                </video>
            </div>
            <div className='right'>
                <h1>EST-CE L'IMAGE ILLUSTRANT VOS RÊVES?</h1>
                <div className='top'>
                    <div className='img'>
                        <img src='images/reves.jpg' alt='reves-alt' className='img-dream' />
                    </div>
                    <div className='img-actions'>
                        <button className='yes'>Oui</button>
                        <button className='regenerate'>Régénerer</button>
                    </div>
                </div>
                {prediction !== "" && prediction !== "loading" && <div className='predictions'>
                    <h1>PREDICTIONS</h1>
                    <div className='predictions-content'>
                        <TypeAnimation sequence={[prediction]} wrapper='p' cursor={true} repeat={0} />
                    </div>
                </div>}
                <form onSubmit={handleSubmit(onSubmit)} className='textarea-wrapper'>
                    <TextareaAutosize placeholder='Décrivez vos rêves ici' className='textarea' {...register("dream")} />
                    <div className='textarea-actions'>
                        {loading ? <BeatLoader color='#9763A3' size={10} /> : <><button type='submit'><FontAwesomeIcon icon={faPaperPlane} /></button>
                            <button type='button' onClick={openModalLogin}><FontAwesomeIcon icon={faSave} /></button></>}
                    </div>
                </form>
            </div>
        </div>
    )
}