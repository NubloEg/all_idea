import React, { useState } from 'react'

export default function Menu() {
    const [select,setSelect]=useState(28)

  return (
    <div className='menu'>
        <div onClick={()=>setSelect(28)} className='variant'>1</div>
        <div onClick={()=>setSelect(160)} className='variant'>2</div>
        <div onClick={()=>setSelect(292)} className='variant'>3</div>
        <div onClick={()=>setSelect(select*4)} className='variant'>4</div>
        <div onClick={()=>setSelect(select*5)} className='variant'>5</div>
        <div style={{left:select}} className="selector"></div>
    </div>
  )
}
