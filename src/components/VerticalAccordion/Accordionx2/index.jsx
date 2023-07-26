import React, {useState} from 'react'
import { annoncesList } from '../../../datas/annonces'
import {Fade} from "../../Fade"
import { useParams } from 'react-router-dom'


function Accordion2(){
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


    const { id } = useParams()
    const logement = annoncesList.find((opop) => opop.id === id)
    const equipementsAnnonce = logement.equipments
    const index = 1;



    //we map the data.js to create  accordion per element. Each element is defined by id/index
    //we listen to click to change state and play transition
    //on click, if accordion = index then add class .active if not add noclass
    //for picto : if accordion = index then chevron up beacause accordion is open else chevron down to suggest it can be open
    //Fade is for css transition
    return(
        <div className='accordion'>
            <div className='accordion_card'>
                    <div key={index} onClick={() => toogleAccordion(index)}>
                        <div className='accordion_card_top'>
                            <div className='accordion_card_heading'>
                                <h2 className={accordion=== index ? "active" : "" }>Equipements</h2>
                            </div>
                            <div className='accordion_card_heading_picto'>
                                {accordion === index ? (
                                <>
                                    <i className="fas fa-chevron-up"></i>
                                </>
                                ) : (
                                <>
                                    <i className="fas fa-chevron-down"></i>
                                </>
                                )}
                            </div>
                        </div>
                        <Fade visible={open}>
                                <ul className={accordion === index ? "accordion_card_content active" : "accordion_card_content inactive"} >
                                    
                                    {equipementsAnnonce.map((item,index) =>{
                                        return (
                                            <li className={accordion === index ? "active" : "active"}>{item}</li>
                                        )
                                    })}
                                </ul>                            
                        </Fade>
                    </div> 
            </div>
        </div>
    )
}


export default Accordion2