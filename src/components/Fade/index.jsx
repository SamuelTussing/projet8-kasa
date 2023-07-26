import React from "react";
import {useEffect, useState} from 'react'


//animation for the accordion. We add a class "fade" to the div that contain the text
// if the div is visible/open we add the class .out to close it
//this transition is imported directly in accordion component
export function Fade({visible,children}){
    const [showChildren, setShowChildren] = useState(visible);
    console.log(showChildren)

useEffect(() => {
    if (visible){
        setShowChildren(true);
    } else{
        const timer = setTimeout(() =>{
            setShowChildren(false);
        },300);
        return () =>{
            clearTimeout(timer)
        }
    }
}, [visible]);
         


    let className ='fade'
    if(!visible){
        className += ' out'
    }
    return <div className={className}>{children}</div>
}