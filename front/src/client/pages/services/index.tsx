import React, { useEffect, useState } from 'react'
import { Navigation } from '../../layouts/navigation'
import TextareaAutosize from 'react-textarea-autosize';
import { ImageQuestion } from './imageQuestion';
import { ImageNone } from './imageNone';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup"
import { FormData, schema } from './schema';
import axios, { AxiosResponse } from 'axios';
import ReactAudioPlayer from 'react-audio-player';

export const Services = () => {
  const {
    reset,
    register,
    handleSubmit,
    setValue,
    getValues,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const [audio, setAudio] = useState<string>("")
  const [prediction, setPrediction] = useState<string>("")
  const [viewRes,setViewRes] = useState<boolean>(false)

  const onSubmit = async (data: FormData) => {
    setPrediction("loading")
    setAudio("")
    let text = ""
    await axios.post<any, AxiosResponse<{ choices: { message: { content: string } }[] }>>("https://free.churchless.tech/v1/chat/completions", {
      messages: [
        {
          role: "user",
          content: data.dream
        }
      ]
    }).then((res) => {
      text = res.data.choices[0].message.content
    }).catch(err => console.log(""))

    await axios.post<any, AxiosResponse<{ filename: string }>>(`http://webcup.codeo.mg/api/ai/generate_audio`, { text: text, lang: "fr" }).then(res => {
      const audioLink = `http://webcup.codeo.mg/static/${res.data.filename}`
      console.log(audioLink)
      setAudio(audioLink)
    }).catch(err => console.log(err))


    setValue("dream", "")
    setPrediction(text)
  }


  return (
    <div className='services'>
      <Navigation viewTheme={false}/>
      <ReactAudioPlayer
          src={audio}
          autoPlay
        />
      <div className='ellipse'>
      </div>
      <div className='services-content'>

        {viewRes ? <ImageQuestion handleSubmit={handleSubmit} onSubmit={onSubmit} register={register} prediction={prediction} loading={prediction === "loading"} /> : <ImageNone setViewRes={setViewRes}/>}
        
      </div>
    </div>
  )
}