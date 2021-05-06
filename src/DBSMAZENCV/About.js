import React from 'react';
import './About.css';
import Personal from './image/personal.jpg';
import {FaRegEnvelope,FaUser,FaPhone, FaAddressBook,} from 'react-icons/fa';


const About=()=>{
    return(
  <section className="section" id='About'>
  <div className="headabout"> 
          <h2>About My</h2>
          <div className="line"></div>
        </div>
   <div className="aboutMy">
        <div className="img">
              <img src={Personal} alt=""/>
        </div>
          <div className="about">
          <p>My name is Mazen, Lover Computer Science Especially the languages of programming, I'm curently Front-End Developer and I aspire to be Full-stack Developer, and owner of a company, I have a bachelor's degree in computer science, quick to understand, and up-to date with technology .</p>
          <div className="maintable">
          <table>
              <tbody>
              <tr>
                  <td rowSpan='5' className='td' style={{width:'200px' }}>
                      Basic Information
                  </td>
              </tr>
               <tr>
                   <td className='Icons'> <FaUser className='Icon'/><span>Name:</span></td>
                   <td>Mazen</td>
               </tr>
               <tr>
                
                  <td  className='Icons'><FaPhone className='Icon'/><span>Phone:</span></td>
                  <td>+679734043538</td>
               </tr>
               <tr>
                 
                 <td  className='Icons'><FaAddressBook className='Icon'/><span>Address:</span></td>
                 <td>Yemen,Aden</td>
             </tr>
             <tr>
             
                 <td  className='Icons'><FaRegEnvelope className='Icon'/><span>Email:</span></td>
                 <td>DBSMazen@gmail.com</td>
             </tr>
             </tbody>
           </table>
       </div>
      </div>
          </div>
          </section>

    )
}
export default About;
