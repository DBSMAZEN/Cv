import React from 'react';
import './Skill.css'
import {FaReact} from 'react-icons/fa';

const Skill=()=>{
    return(   
    <div className="MySkill" id='Skill'>
            <div className="headSkills"> 
            <div className='Line'></div> <h2>My Skills</h2><div className='Line'></div>
            </div>
            <div className="Skills">
            <div className="Front-End">
                <h2>Front-End</h2>
                <p>HTML/CSS</p>
                <div className="HTML">
                    <span className="prohtml"><span className='Icon'><FaReact className='FaReact'/></span></span>   
                    <span className='Value'>90%</span>
                </div> 
                <p>JavaScript</p>
                <div className="CSS">
                <span className="procss"><span className='Icon'><FaReact className='FaReact'/></span></span> 
                <span className='Value'>80%</span>
                </div>
                <p>ECMAScript6</p>
                <div className="JavaScript">
                <span className="projs"><span className='Icon'><FaReact className='FaReact'/></span></span> 
                <span className='Value'>83%</span>
                </div>
                <p>React</p>
                <div className="React">
                    <span className="proReact"><span className='Icon'><FaReact className='FaReact'/></span></span>   
                    <span className='Value'>88%</span>
                </div>
                <p>BootStrap</p>
                <div className="BootStrap">
                    <span className="proBootStrap"><span className='Icon'><FaReact className='FaReact'/></span></span>   
                    <span className='Value'>87%</span>
                </div>
               
            </div>
            <div className="Backend">
            <h2>Backend</h2>
            <p>PHP</p>
            <div className="PHP">
                <span className="prophp"><span className='Icon'><FaReact className='FaReact'/></span></span>  
                <span className='Value'>77%</span> 
            </div>
            <p>DATABASE</p>
            <div className="DATABASE">
            <span className="prodatabase"><span className='Icon'><FaReact className='FaReact'/></span></span> 
            <span className='Value'>89%</span>
            </div>
            <p>Anlayic Algoritme</p>
            <div className="AnlayicAlgoritme">
            <span className="proAnlayicAlgoritme"><span className='Icon'><FaReact className='FaReact'/></span></span>
            <span className='Value'>80%</span>
            </div>
            <p>Laravel</p>
            <div className="Laravel">
            <span className="proLaravel"><span className='Icon'><FaReact className='FaReact'/></span></span>
            <span className='Value'>70%</span>
            </div>
            <p>Git/Github</p>
                <div className="Git">
                <span className="proGit"><span className='Icon'><FaReact className='FaReact'/></span></span> 
                <span className='Value'>78%</span>
            </div>
            </div>
        </div>
        </div>      
)
}
export default Skill;