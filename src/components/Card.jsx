/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { FaRegImage } from "react-icons/fa6";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
import { MdDelete } from "react-icons/md";
import axios from 'axios'



const dataURI = "https://us-east-1.aws.data.mongodb-api.com/app/mydocsapp-vartu/endpoint/";

function Card({ data, reference }) {

    const handleDelete = async (userId, fileId) => {
        const formData = {"userId": userId, "fileId": fileId}
        try {
            const response = await axios.post(`${dataURI}deleteFile`, formData)
            console.log(response.deletedData);
            console.log(fileId, " deleted successfully.")
            } catch (error) {
              console.error('Error deleting file:', error);
            }
    }
    console.log(data.fileDownloadUrl)
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.1 }}
      dragElastic={0.1}
      dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }}
      className="relative flex-shrink-0 w-60 h-72 rounded-[45px] bg-zinc-900/90 text-white overflow-hidden"
      style={{ 
        backgroundImage: `url(${data.fileUrl})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center', 
        position: 'relative'}}>
      <div className="w-full h-full px-8 py-9" style={{
          
          backgroundColor: 'rgba(0, 0, 0, 0.4)', // Adjust the opacity as needed
          borderRadius: 'inherit',
        }}><div>
      <div className="flex items-center justify-start"><FaRegImage color=""/><span className="px-2 font-semibold capitalize">{data.title}</span></div>
      </div>
      <p className="text-sm mt-5 font-semibold normal-case leading-tight">{data.desc}</p>
      <div className="footer absolute bottom-0 w-full   left-0">
        <div className="flex items-center justify-between px-8  py-3">
          <h5>0{data.fileSize}mb</h5>
          
        <MdDelete className="cursor-pointer" onClick={()=>{handleDelete(data.userId, data._id)}} size="20px"/>


        </div>
        <a href={data.fileDownloadUrl}>
          <div
            className="tag w-full py-4 bg-gray-500/40  flex items-center backdrop-blur-sm cursor-pointer justify-center"
          >
            <h3 className="text-sm font-semibold">Download</h3>
          </div>
          </a>
      </div>
      </div>

    </motion.div>
  );
}

export default Card;