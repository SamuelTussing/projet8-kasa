//import React, {useState} from 'react'
import { aProposList } from '../../datas/apropos'

import AccordeonChild from '../Accordeon'



const key = 2
const keyD = 4

function Accordion(){

    
        //we map our database.json to find the properties needed
        //we use props to send properties to the children accordeon and
        //we render as much accordion as there are elements in database
        return(<div key={key} className='accordion'>
            <div key={keyD} className='accordion_card'>
                {aProposList.map(({item,index,title,content}) =>
                    <AccordeonChild 
                    item = {item}
                    index= {index}
                    title={title}
                    content={content}   
                    key = {title}                  
                    />
                    )}
            </div>
        </div>)
        

}


export default Accordion