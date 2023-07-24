
import Slider from '../../components/Slider'
import CategoryButton from '../../components/CategoryButton'
//import{useState} from 'react'
import { useParams } from 'react-router-dom'

import { annoncesList } from '../../datas/annonces'




function Logement() {
    

    const { id } = useParams()
    const logement = annoncesList.find((opop) => opop.id === id)
    
        console.log(logement.pictures.length)
        console.log(annoncesList)
        



   

    return (
        <div className='container'>
            <Slider data={annoncesList} />
            <div className='logementDescription'>
                <h1 className='logementDescription_title'>{logement.title}</h1>
                <span className='logementDescription_location'>{logement.location}</span>
                <CategoryButton />
            </div>
        </div>
    )
}

export default Logement