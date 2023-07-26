
import Slider from '../../components/Slider'
import Host from '../../components/Host'
import CategoryButton from '../../components/CategoryButton'
import RatingStar from '../../components/RatingStar'
//import{useState} from 'react'
import { useParams } from 'react-router-dom'

import { annoncesList } from '../../datas/annonces'
import AccordeonChild from '../../components/Accordeon'
import AccordeonChildTbl from '../../components/Accordeon/Accordeontbl'




function Logement() {
    

    const { id } = useParams()
    const logement = annoncesList.find((opop) => opop.id === id) 
    const equipementList = logement.equipments
    

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
                <AccordeonChild 
                    item = "Description"
                    index= {logement.id}
                    title="Description"
                    content={logement.description}                    
                    /> 
                <AccordeonChildTbl 
                    item = "Équipement"
                    index= {logement.id}
                    title="Équipement"
                    content={equipementList}                    
                    /> 

                </div>
            </div>
        </div>
    )
}

export default Logement