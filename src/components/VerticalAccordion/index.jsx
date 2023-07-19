import React, {useState} from 'react'
import { aProposList } from '../../datas/apropos'
import {Fade} from "../Fade"


function Accordion(){
    //first const define the accordion state (open/close)
    //second const give state for css transition
    const [accordion, setActiveAccordion] = useState(-1)
    const [open, setOpen] = useState(false)

    
// on click we activate selected accordion using index
//if already active, we deactive it by setAccordion to index -1 = no content
    function toogleAccordion(index){
        if(index === accordion){
            setActiveAccordion(-1);
            setOpen(o => !o)
            return
        }
        setActiveAccordion(index);
        setOpen(o => !o)
    }

    //we map the data.js to create  accordion per element. Each element is defined by id/index
    //we listen to click to change state and play transition
    //on click, if accordion = index then add class .active if not add noclass
    //for picto : if accordion = index then chevron up beacause accordion is open else chevron down to suggest it can be open
    //Fade is for css transition
    return(
        <div className='accordion'>
            <div className='accordion_card'>
                {aProposList.map((item,index,title,content) =>
                    <div key={index} onClick={() => toogleAccordion(index)}>
                        <div className='accordion_card_top'>
                            <div className='accordion_card_heading'>
                                <h2 className={accordion=== index ? "active" : "" }>{item.title}</h2>
                            </div>
                            <div className='accordion_card_heading_picto'>
                                {accordion === index ? (
                                <>
                                    <i class="fas fa-chevron-up"></i>
                                </>
                                ) : (
                                <>
                                    <i class="fas fa-chevron-down"></i>
                                </>
                                )}
                            </div>
                        </div>
                        <Fade visible={open}>
                            <div className={accordion === index ? "accordion_card_content active" : "accordion_card_content inactive"} >
                                <p className={accordion === index ? "active" : "inactive"}>{item.content}</p>
                            </div>
                        </Fade>
                    </div>
                    )}
            </div>
        </div>
    )
}


export default Accordion