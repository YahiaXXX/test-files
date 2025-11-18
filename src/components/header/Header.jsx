import React, { Suspense } from "react";
import "./header.css";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import {Canvas} from "@react-three/fiber"
import AnimatedSphere from "../AnimatedSphere";
import {OrbitControls} from "@react-three/drei"
import {motion} from "framer-motion"
import AnimatedLetter from "./AnimatedLetter";

function Header() {
  const sentence = "Yahia Boukharouba".split("")
  return (
    <>
    <header id="#" >
      <motion.div  className="container header__container">
        <motion.div 
        animate={{y:100,opacity:1}} 
        initial={{opacity:0}}
        transition={{type:"tween",duration:1.5}}
        >
        <h4>Hello I'm</h4>
        
        {sentence.map((letter,index)=>(
         <AnimatedLetter key={index} >
          {letter===" " ? "\u00A0"   : letter}

         </AnimatedLetter>


        ))}
       
        
      
        
         
        <h5 className="text-light">Web Developer</h5>
        <CTA />

        </motion.div>
        

        <HeaderSocials />
        
       
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </motion.div>
      
     
    </header>
    <div className="canvas-div">
     <Canvas className="canvas" >
       <OrbitControls enableZoom={false} />
       <ambientLight intensity={0.5}/>
       <directionalLight position={[-2,5,2]} intensity={1} />
       <Suspense fallback={null}>
         <AnimatedSphere/>
       </Suspense>
      
     </Canvas>
     </div>
    </>
    
    
  );
}

export default Header;
