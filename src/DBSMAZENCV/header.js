import React  from 'react';
import './header.css';
import './About'
import Personal from './image/personal.jpg'
import {FaFacebookF,FaGithubAlt,FaTwitter,FaWhatsapp,FaHome,FaUser,FaSkiing,FaRegGem,FaRegCommentDots} from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';



const Nav=() =>{
         
        return( 
        <nav className="nav" id='nav'>
         <div className="img">
         <img src={Personal}  alt="" className="Iamge"/>
         <h2>Backend Mazen</h2>
         <p >Web Devloper</p>
         </div>
        <div className='list'>
            <IconContext.Provider value={{size:"23px"}}>
            <ul>
                <li>
                    <a href='#Home'>
                        <FaHome />
                        <p>Home</p>
                    </a>
                </li>
                <li>
                    <a href='#About'>
                        <FaUser/>
                        <p>About</p>
                    </a>
                </li>
                <li>
                    <a href='#Skill'>
                      <FaSkiing/>
                        <p>SKILLS</p>
                        </a>
                    </li>
                    <li>
                        <a href='#Project'>
                            <FaRegGem/>
                            <p>PROJECT</p>
                        </a>
                     </li>
                    <li>
                        <a href='#Concate'>
                            <FaRegCommentDots />
                            <p>CONCATE</p>
                            </a>
                    </li>
            </ul>
            </IconContext.Provider>
        </div>
        <ul className="socialmedia1">
            <a href="dvlprmazen@gmail.com">
                <FaFacebookF/>
            </a>
            <a href="DBSMAZE@gmail.com">
                <FaGithubAlt className='FaGithubAlt'/>
                </a>
            <a href="DBSMAZE@gmail.com" >
                <FaTwitter/>
            </a>
            <a href="DBSMAZE@gmail.com">
                <FaWhatsapp/>
            </a>
        </ul>
        <div className='DownloadCv'> 
        <a href='Download'>Download Cv</a>
        </div>
        </nav>
     )
 }






export default Nav;