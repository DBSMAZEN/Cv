import React from 'react';
import './Concate.css';
import {FaRegEnvelope,FaUser,FaPhone,FaRegComments} from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import emailjs from 'emailjs-com';


export default function Contact() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_tzl4k02', e.target, 'user_aa90qN4Lc6Hugzks6ot8Q')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }
    return(
        <IconContext.Provider value={{size:"23px" ,color:'blue'}}>
             
                <div className="contactMe" id='Concate'>
                <div className='contacthead'>
                <div className='Line'></div> <h2>Contact Me</h2><div className='Line'></div>
                </div>
         
            <div className="Fullcontact">
                <div className="contact">  
                 <form  onSubmit={sendEmail}>  
                <div><input type="hidden" name="contact_number" /></div>             
                <div><input type="text" placeholder='Full Name' name="name" /><span><FaUser/></span></div>
                <div><input type="email" placeholder="Your Email" name="email"/><span><FaRegEnvelope/></span></div>
                <div><input type="text" placeholder='phone' name="phone" /><span><FaPhone/></span></div>
                <div className="Message"><input type="text" placeholder="Type Your Message Here"  name="message"/><span><FaRegComments/></span></div>
                <div className='btn'><input type="submit" value="Send..."  className='btn'/></div>
             </form>
            </div>
            </div>
            </div>
            </IconContext.Provider>
      );
    }
    
       /*<div className="Fullcontact">
                <div className="contact">  
                   <form className="Fullcontact" onSubmit={sendEmail}>  
                  <input type="hidden" name="contact_number" />                
                <div><input type="text" placeholder="Full Name" name="user_name" /><span><FaUser/></span></div>
                <div><input type="email" placeholder="Your Email" name="user_email"/><span><FaRegEnvelope/></span></div>
                <div><input type="text" placeholder="Phone Number"/><span><FaPhone/></span></div>
                <div class="Message"><input type="text" placeholder="Type Your Message Here"  name="message"/><span><FaRegComments/></span></div>
                <div><a onClick={sendEmail} class="btn">Send..</a></div>
             </form>
            </div>
            </div>*/
