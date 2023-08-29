import Card from '../../components/Card'
import Banner from '../../components/Banner'
import {Link} from 'react-router-dom'
//import dataLogement from '../../datas/annonces.json'
import bannerPicture from '../../assets/banniere_Img.jpg'
import { useEffect,useState } from 'react'




//each card has its own link url containing the logement id's
//we map the database to create one card per logement
function Home(){

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  /*useEffect to fetch json file and later the API*/
  useEffect (() => {
  fetch("api/annonces.json")
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
if (error) return "Fetching error !! =( "


    
    return ( <main>
            <section className ='banniereContainer'>
              <Banner 
              image = {bannerPicture}
              alt = "Photo de montagne"
              title = "Chez vous, partout et ailleurs"/>
            </section>

              <div className="gallery">
                <ul className ='gallery_list'>
                    {data.map(({id, title, cover, pictures}) => (
                        <div key={id} className='gallery_list_cards'>
                            <Link to={`/logement/${id}`} className='gallery_list_cards_link'>
						        <Card
							        cover={cover}
							        title={title}
							        id={id}
							        pictures={pictures}
						        />
                            </Link>
					    </div>
                        
                    ))}
                </ul>
            </div>
            </main>
)}

export default Home