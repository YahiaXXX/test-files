import React,{useState} from 'react'
import {motion, transform,useAnimationControls} from "framer-motion"
import "./header.css";

function AnimatedLetter({children}) {
    const controls = useAnimationControls()
    const [isPlaying,setIsPlaying]=useState(false)
    const rubberBand=()=>{
        controls.start({
            transform:[
                "scale3d(1,1,1)",
                "scale3d(1.4,.55,1)",
                "scale3d(.75,1.25,1)",
                "scale3d(1.25,.85,1)",
                "scale3d(.9,1.05,1)",
                "scale3d(1,1,1)",
        
            ]

        })
        setIsPlaying(true)
    }
   
  return (
    <motion.span className='y' 
    animate={controls} 
    onMouseOver={()=>{ if(!isPlaying) rubberBand()}}
    onAnimationComplete={()=>setIsPlaying(false)}
    >
        {children}
    </motion.span>
  )
}

export default AnimatedLetter