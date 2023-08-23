import React from 'react'
import {AiOutlineInstagram}from "react-icons/ai";
import {AiOutlineYoutube}from "react-icons/ai";
import {AiFillGithub}from "react-icons/ai";
import "./Footer.css"

const Footer = () => {
  return (
    <>
    
      <div className='footer'>
     <h3>shashank </h3>
     <h3>Aidus PageMaker</h3>
     <h3>Including version</h3>
     <h3>lorem if sum</h3>
     <h3>@2023 shashank All rights reserved</h3>
   </div>
   <div className="footer-2">
     <div className="footer-3">
     <label>Subcribe</label>
     <input type="text" placeholder='Your E-Mail'></input>
     {/* </div>
     </div> */}

     <h3>Important <br/>Update</h3>
     <button class="button">Subscribe</button>
     <h3>Privacy Policy</h3>
     <h3>Term & Condition</h3>
     </div>
     </div>

   
   
     <div className="footer-4">
   <div ><AiOutlineInstagram /></div>
   <div><AiFillGithub /></div>
   <div><AiOutlineYoutube /></div>
   </div>
   

   </>

  )    
}

export default Footer