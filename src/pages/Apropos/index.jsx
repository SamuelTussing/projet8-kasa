import Banner from '../../components/Banner';
import AccordeonChild from '../../components/Accordeon/index';
import bannerPicture from '../../assets/Image source 2.png'
import { useEffect,useState } from 'react'
import aPData from '../../../public/api/apropos.json'

function APropos() {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

   /*useEffect to fetch json file and later the API*/
   useEffect (() => {
    fetch("/api/apropos.json")
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
  if (error) {
    setData(aPData)
  }


    return (
      <div className='apcontainer'>
        <Banner 
              image = {bannerPicture}
              alt = "Photo de montagne"
              title = ""/>
              <div className = 'apAccordion'>
                {data.map((data, index) => (
                  <AccordeonChild 
                  key={data.id} 
                  title={data.title} 
                  content={data.content} />
                ))}
                  
        </div>
      </div>
  
  );
  }
  
  export default APropos;