import { useState } from 'react'
import SearchInput from "./Components/SearchInput"
import Photobook from "./Story"

function Storybook() {

  const [data, setData] = useState<{imageData:string[]}>({imageData:[]})

  const setImageData = (data:string[]) => {
    setData({imageData:data})
  }

  return (
    <div className="w-screen h-[600px] p-2 flex flex-col items-center overflow-hidden">
      <h1 className='text-center font-bold text-2xl m-2'>Votre livre de rêve</h1>
      <SearchInput setImageData={setImageData}/>
      <Photobook imageData={data.imageData}></Photobook>
    </div>
  )
}

export default Storybook
