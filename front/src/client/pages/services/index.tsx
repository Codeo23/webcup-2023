import React, { useEffect, useState } from 'react'
import { Navigation } from '../../layouts/navigation'
import TextareaAutosize from 'react-textarea-autosize';
import { ImageQuestion } from './imageQuestion';
import { ImageNone } from './imageNone';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup"
import { FormData, schema } from './schema';
import axios, { AxiosResponse } from 'axios';


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

  const [prediction, setPrediction] = useState<string>("")
  const speak = (text : string) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.volume = 1;
    utterance.rate = 1;
    utterance.pitch = 1;
    speechSynthesis.speak(utterance);
  };

  const onSubmit = async (data: FormData) => {
    setPrediction("loading")
    await axios.post<any, AxiosResponse<{ choices: { message: { content: string } }[] }>>("https://free.churchless.tech/v1/chat/completions", {
      messages: [
        {
          role: "user",
          content: data.dream
        }
      ]
    }).then((res) => {
      setPrediction(res.data.choices[0].message.content)
    }).catch(err => setPrediction(""))
    setValue("dream", "")
  }

  useEffect(() => {
    if (prediction !== "" && prediction !== "loading") {
      speak(prediction)
    }
  }, [prediction])


  return (
    <div className='services'>
      <Navigation />
      {/* <div className='ellipse'>
          </div> */}
      <div className='services-content'>
        <ImageQuestion handleSubmit={handleSubmit} onSubmit={onSubmit} register={register} prediction={prediction} loading={prediction === "loading"} />
        {/* <ImageNone/> */}
      </div>
    </div>
  )
}