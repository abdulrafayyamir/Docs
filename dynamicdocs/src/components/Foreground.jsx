import React, { useRef, useState } from 'react'
import Card from './Card'
function Foreground() {

  //const data=[
    // {
      //  description,filesize,toggleDownload,tag
  //   }
  //]
  const ref= useRef(null)
  const data=[

    {desc:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis corrupti quo, natus ",
     filesize:"8kb",
     toggleDownload:true,
     tag:{isOpen:true, tag:'Download Now',tagColor:'green'},

    },

    {desc:"non nobis provident nesciunt expedita maiores. Quaerat, fuga!",
    filesize:"1kb",
    toggleDownload:true,
    tag:{isOpen:false, tag:'Download Now',tagColor:'Green'},

   },
   {desc:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur pariatur libero at ipsa inventore",
   filesize:"7kb",
   toggleDownload:true,
   tag:{isOpen:true, tag:'Upload',tagColor:'blue'},

  },
  ]
  return (
    <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-10 flexwrap-wrap p-5">

       {data.map((item,index)=>(

         <Card data={item} reference={ref}/>
       ))}
    </div>
  )
}

export default Foreground