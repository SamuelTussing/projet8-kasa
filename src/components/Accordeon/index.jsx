import React, {useState} from 'react'
//import { annoncesList } from '../../../datas/annonces'
import {Fade} from "../../components/Fade"





function AccordeonChild(item,index,title,content){

    // const define the accordion state (open/close)
    const [open, setOpen] = useState(false)


    //function change the openState on click
    function toogleAccordion(index){
        setOpen(o => !o)
        return
    }

const key1 = item.content.length

    //on click we check if accordeon is open. if not we add classname .active to div
    // and .rot to picto for rotation animation
    //fade animation plays if state open = true and add className to content.
    //we use props from parent to add title and content dynamically
    return(
        <div key={`k${key1}`} className='infos_accordeon' onClick={() => toogleAccordion(index)}>
        <div key={`p${key1}`} className='accordion_card_top'>
            <div key={`m${key1}`} className='accordion_card_heading'>
                <h2 className={open === false ? "active" : "" }>{item.title}</h2>
            </div>
            <div key={`key${key1}`} className='accordion_card_heading_picto'>
                {open === false ? (
                <>
                    <i className="rot fas fa-chevron-down"></i>
                </>
                ) : (
                <>
                    <i className="fas fa-chevron-down rotrev"></i>
                </>
                )}
            </div>
        </div>
        <Fade visible={open}>
            <div className={open === true ? "accordion_card_content active" : "accordion_card_content inactive"} >
                   
                
                <p key={`key${key1}`} className={ open === true ? "active" : "inactive"}>{item.content}</p>
       

            </div>
        </Fade>
    </div>
    )
    
}

export default AccordeonChild