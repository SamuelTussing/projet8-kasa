import { annoncesList } from '../../datas/annonces'
import Card from '../../components/Card'
import Banner from '../../components/Banner'
import {Link} from 'react-router-dom'





function Home(){
    

    
    return ( <div>
              <Banner />
              <div className="gallery">
                <ul className ='gallery_list'>
                    {annoncesList.map(({id, title, cover, pictures}) => (
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
            </div>
)}

export default Home