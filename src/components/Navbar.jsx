import React from 'react'
import { MdOutlineMessage } from "react-icons/md";
import { IoMdCall } from "react-icons/io";


const Navbar = () => {
  return (
    <>
    <nav className='nav'>
        <div className="logo">
            <img src="/images/im.png" />
        </div>
    </nav>

    <div className="hero">
        <div className="contact">
            CONTACT US
        </div>
        <div className="content">
        LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA. 
        </div>
        <div className="bhero">
            <div className="lcontent">
                <div className="btn">
                    <button className='chat'><MdOutlineMessage className='te'/>VIA SUPPORT CHAT</button>
                    <button className='call'><IoMdCall className='te'/>VIA CALL</button>
                </div>
                <div>
                    <button className='email'><MdOutlineMessage className='te'/>VIA EMAIL FORM</button>
                </div>
                <div className='field'>
                <fieldset className='name'>
                    <legend>Name</legend>
                </fieldset>

                <fieldset className='mail'>
                    <legend>E-Mail</legend>
                </fieldset>

                <fieldset className='text'>
                    <legend>TEXT</legend>
                </fieldset>
                </div>
                <button className='bttn'>SUBMIT</button>
            </div>
            <div className="rcontent">
                <img src="/images/sr.svg" alt="" />
            </div>
        </div>
    </div>
    </>
  )
}

export default Navbar