import Card from '../../components/Card'
import Banner from '../../components/Banner'
import {Link} from 'react-router-dom'
import dataLogement from '../../datas/annonces.json'
import bannerPicture from '../../assets/banniere_Img.jpg'





//each card has its own link url containing the logement id's
//we map the database to create one card per logement
function Home(){

    
    return ( <main>
            <section className ='banniereContainer'>
              <Banner 
              image = {bannerPicture}
              alt = "Photo de montagne"
              title = "Chez vous, partout et ailleurs"/>
            </section>

              <div className="gallery">
                <ul className ='gallery_list'>
                    {dataLogement.map(({id, title, cover, pictures}) => (
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