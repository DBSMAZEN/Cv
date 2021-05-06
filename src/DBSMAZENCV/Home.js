import React from 'react';
import './Home.css';
import Personal from './image/main.jpg';
import {FaFacebookF,FaGithubAlt,FaTwitter} from 'react-icons/fa';

const Home=()=>{
    
    return(
          <div className='MainHome' id='Home'>
              <div className='divimage'>
               <img src={Personal} alt=''/> 
              <div className='Home'>
              <span className='Title'>
                  <p>Hello!!</p>
                   <h2>I'm Dev Mazen.</h2>
                </span>
              <div className='Button'>
                <div className='DownloadCv1'><a href='#Skill'>Download Cv</a></div>
                <div className='HireMy'><a href='#About'>Hire My</a></div>
              </div>
              </div>
              <div className='Buttonmobile'>
              <div className='DownloadCv1'><a href='#Skill'>Download Cv</a></div>
              <div className='HireMy'><a href='#About'>Hire My</a></div>
              </div>
              </div>
              <ul className="socialmedia1">
            <a href="DBSMAZEN@gmail.com">
                <FaFacebookF/>
            </a>
            <a href="DBSMAZEN@gmail.com">
                <FaGithubAlt className='FaGithubAlt'/>
                </a>
            <a href="DBSMAZEN@gmail.com" >
                <FaTwitter/>
            </a>
          </ul>
          </div>       
    )       
}
export default Home;