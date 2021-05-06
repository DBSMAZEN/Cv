import React from 'react';
import './mainnav.css';
import {FaBars} from 'react-icons/fa';
import Personal from './image/personal.jpg';
const mainnav=() =>
{
 
    const x=()=>
    {
       
       let y= document.getElementById('MainContaint');
       let n=document.getElementById('nav');
       if(y.classList.contains('newClass'))
       { 
          y.classList.remove('newClass2');
          y.classList.remove('newClass');
          y.classList.add('newClass1');
          n.classList.add('newClass3');
        
       }
       else
       {
           n.classList.remove('newClass3');
           y.classList.remove('newClass1');
           y.classList.add('newClass');
           n.classList.add('newClass2');
       }
    }
    
    return(
      
        <div className='mainnav'>
           <div onClick={x}><FaBars className='Bar'/></div>
            <img src={Personal} alt=""/>
            <p>Dev Mazen</p>
        </div>
    );
}

export default mainnav;