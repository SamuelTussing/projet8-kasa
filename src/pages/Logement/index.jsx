
import Slider from '../../components/Carrousel'
import Host from '../../components/Host'
import RatingStar from '../../components/RatingStar'
import { useParams } from 'react-router-dom'
import Tag from '../../components/Tag/index';
import AccordeonChild from '../../components/Accordeon'
import { useEffect, useState } from 'react';




function Logement() {
    
    
    
    const { id } = useParams() 

    

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
        data.find((item) => item.id === id ? setData(item) : null)
       

    })
    .catch((error) => {
        console.error("error fetching", error);
        setError(error);
    })
    .finally(() => {
        setLoading(false);
    });
}, [id]  );
if (loading) return "Loading ....";
if (error) {
    return "Fetching error !! =( ";
  }


const carrouselPics = data.pictures




    return (
        
        <section className='container'>
         
            <Slider data={carrouselPics} />
            <article className='logementDescription'>
                <div className ="column1">
                    <h1 className='logementDescription_title'>{data.title}</h1>
                    <span className='logementDescription_location'>{data.location}</span>
                    <div className='logementDescription_stats'>
                        <div className ="tag">
                            {data.tags.map((tag, index) => (
                            <Tag key={index} content={tag} />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="column2">
                    <RatingStar
                    rating={data.rating} />
                    

                 
                    <Host
                    hostInfos= {data.host.name}
                    hostPic = {data.host.picture}
                    />
                </div>
                
            </article>

                <div className='infos'>
                <AccordeonChild 
                    item = "Description"
                    index= {data.id}
                    title="Description"
                    content={data.description}
                    isColumn= {false}                    
                    /> 
                <AccordeonChild 
                    item = "Équipement"
                    index= {data.id}
                    title="Équipement"
                    content={data.equipments} 
                    isColumn= {true}                  
                    /> 

                </div>
              
        </section>
    )
}

export default Logement