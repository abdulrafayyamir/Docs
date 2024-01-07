import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { IoDownload } from "react-icons/io5";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { motion } from "framer-motion"

function Card({data,reference}) {
  return (
    <motion.div drag dragConstraints={reference} 
    whileDrag={{scale:1.1}} 
    dragElastic={"0.2"}
    dragTransition={{bounceStiffness:100, bounceDamping:30}}
    className="relative w-60 h-72 bg-cyan-800 rounded-[30px] p-10 text-white overflow-hidden" >
        <FaFileAlt />

        <p className='text-sm leading-tight mt-5 font-semibold'>{data.desc}</p>
        
        <div className="footer absolute bottom-0 w-full h-20 py-3 left-0 flex flex-col justify-center items-center">
          <div className='flex gap-[150px] mb-2'>
            <h5>{data.filesize  }</h5>
             
            {data.toggleDownload ? <IoIosCloseCircleOutline/> :<IoDownload size="1.2em"/>}
            
          </div>

          {
            data.tag.isOpen && (
                <div className={`tag w-full py-4 ${data.tag.tagColor==="blue" ? "bg-blue-600" : "bg-green-600"} text-center`}>
                  <h3 className='font-semibold text-sm'>{data.tag.tag}</h3>
                </div>) 

            
          }
 
        </div>
    </motion.div>
  )
}

export default Card
