import React from 'react'

interface Props{
    image_card:string;
    img_up:string;
}

export default function Card({image_card,img_up}:Props) {
  return (
    <div className="card">
    <img className='main_img' src={image_card} height={"450px"} alt="card"  />
    <img className={`${'card_up'}`} src={img_up} height={"450px"} alt="card"  />
    </div>
  )
}
