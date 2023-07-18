import React, {useState} from 'react'
import { aProposList } from '../../datas/apropos'


function Accordion(){
    const [accordion, setActiveAccordion] = useState(-1)

    function toggleAccordion(index){
        if(index === accordion){
            setActiveAccordion(-1);
        }
        setActiveAccordion(index);
    }

    return(
        <div className='accordion'>
            <div>
                <span className='accordion_title'>A propos</span>
            </div>
            <div className='accordion_card'>
                {aProposList.map((item,index,title,content) =>
                    <div key={index} onClick={() => toggleAccordion(index)}>
                        <div className='accordion_card_top'>
                            <div className='accordion_card_heading'>
                                <h2 className={accordion=== index ? "active" : "" }>{item.title}</h2>
                            </div>
                            <div className='accordion_card_heading_picto'>
                                {accordion === index ? (
                                <>
                                    <span className='verticle'>-</span>
                                </>
                                ) : (
                                <>
                                    <span className='verticle'>+</span>
                                </>
                                )}
                            </div>
                        </div>
                        <div className='accordion_card_content'>
                            <p className={accordion === index ? "active" : "inactive"}>{item.content}</p>
                        </div>
                    </div>
                    )}
            </div>
        </div>
    )
}


export default Accordion