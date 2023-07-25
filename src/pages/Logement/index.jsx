
import Slider from '../../components/Slider'
import Accordion1 from '../../components/VerticalAccordion/Accordionx1'
import Accordion2 from '../../components/VerticalAccordion/Accordionx2'
import Host from '../../components/Host'
import CategoryButton from '../../components/CategoryButton'
import RatingStar from '../../components/RatingStar'
//import{useState} from 'react'
import { useParams } from 'react-router-dom'

import { annoncesList } from '../../datas/annonces'




function Logement() {
    

    const { id } = useParams()
    const logement = annoncesList.find((opop) => opop.id === id)     

    return (
        <div className='container'>
            <Slider data={annoncesList} />
            <div className='logementDescription'>
                <h1 className='logementDescription_title'>{logement.title}</h1>
                <span className='logementDescription_location'>{logement.location}</span>
                <div className='logementDescription_stats'>
                <CategoryButton />
                <RatingStar />
                </div>
                <Host />
                <div className='infos'>
                    <Accordion1 />
                    <Accordion2 />
                </div>
            </div>
        </div>
    )
}

export default Logement