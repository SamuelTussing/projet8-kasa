import { useParams } from 'react-router-dom'
import { annoncesList } from '../../datas/annonces'

function Host(){

    const { id } = useParams()
    const logement = annoncesList.find((opop) => opop.id === id) 
    console.log(logement.host.picture)
    const hostName = logement.host.name
    const hostPicture = logement.host.picture

    return(
        <div className='host' key={"id"}>
            <p className='host_name'>{hostName}</p>
            <img src={hostPicture} alt={`${hostName}`} className='host_img'/>
        </div>
    )
}

export default Host