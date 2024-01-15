/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import { FaUpload } from "react-icons/fa6";
import { motion } from "framer-motion"
import { Link } from 'react-router-dom';

import { FcAddImage } from "react-icons/fc";

function Upload({reference,user, userId}) {
    console.log("upload has this ", userId)
    const handleClick = ()=>{

    }
  return (
    <motion.div  drag dragConstraints={reference} whileDrag={{scale: 1.1}} dragElastic={0.1} dragTransition={{bounceStiffness: 100, bounceDamping: 10}} className='relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-900/40 backdrop-blur-sm text-white px-8 py-10 overflow-hidden'>

        <div className='flex-col items-center justify-center w-full '>
            <Link to={`/${user}/upload?userId=${userId}`} className='cursor-pointer'>
                <FcAddImage className='relative left-5 ' size="80%"/>
            </Link>
        <p className='text-sm font-semibold leading-tight mt-5 text-center'>
        Accepting only specific document and image file extensions.
        </p>
        
        </div>
    </motion.div>
  )
}

export default Upload