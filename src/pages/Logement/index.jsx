
import Slider from '../../components/Carrousel'
import Host from '../../components/Host'
import RatingStar from '../../components/RatingStar'
import { useParams } from 'react-router-dom'
import Tag from '../../components/Tag/index';
import AccordeonChild from '../../components/Accordeon'
import { useEffect, useState } from 'react';



function Logement() {
    
    
    
    const { id } = useParams() 
    //const [logements, setLogements] = useState([])
    //const equipementList = logement.equipments
    

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect (() => {
    fetch("/api/annonces.json")
    .then((response) => {
    if (response.ok) {
        return response.json();
    }
    throw response;
    })
    .then((data) =>{
       setData(data)
        //console.log("setData", data)
    })
    .catch((error) => {
        console.error("error fetching", error);
        setError(error);
    })
    .finally(() => {
        setLoading(false);
    });
}, []  );
if (loading) return "Loading ....";
if (error) return "Error ! "

const logement = data.find((item) => item.id === id)
const carrouselPics = logement.pictures




    return (
        
        <section className='container'>
         
            <Slider data={carrouselPics} />
            <article className='logementDescription'>
                <div className ="column1">
                    <h1 className='logementDescription_title'>{logement.title}</h1>
                    <span className='logementDescription_location'>{logement.location}</span>
                    <div className='logementDescription_stats'>
                        <div className ="tag">
                            {logement.tags.map((tag, index) => (
                            <Tag key={index} content={tag} />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="column2">
                    <RatingStar
                    rating={logement.rating} />
                    

                 
                    <Host
                    hostInfos= {logement.host.name}
                    hostPic = {logement.host.picture}
                    />
                </div>
                
            </article>

                <div className='infos'>
                <AccordeonChild 
                    item = "Description"
                    index= {logement.id}
                    title="Description"
                    content={logement.description}
                    isColumn= {false}                    
                    /> 
                <AccordeonChild 
                    item = "Équipement"
                    index= {logement.id}
                    title="Équipement"
                    content={logement.equipments} 
                    isColumn= {true}                  
                    /> 

                </div>
              
        </section>
    )
}

export default Logement