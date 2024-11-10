import React from "react"
import{motion} from "framer-motion"

const variants ={
  default: {width:0},
  active:{width: "calc(100% - 0.75rem)"}
}

  // interface ButtonProps {
  //   onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  // }
  interface TabProps {
    active: boolean;
    selectTab: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void; // Change to function type
    children: React.ReactNode; // Use React.ReactNode to support different types of children (not just string)
  }
  
  

export default function TabButton({active, selectTab, children}:TabProps){
    const buttonClasses = active ? 'text-white border-b border-purple-500' : 'text-[#ADB7BE]'
    return(
        <button onClick={selectTab}>
            <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
{children}
</p>
<motion.div animate={active? "active" : "default"} variants={variants} 
className="h-1 bg-primary-500 mt-2 mr-3"
>
</motion.div>
        </button>
    )
}