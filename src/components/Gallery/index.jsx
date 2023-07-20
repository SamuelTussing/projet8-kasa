import { annoncesList } from '../../datas/annonces'
import Card from '../Card/index'





function Gallery(){
    return (<div className="gallery">
                <ul className ='gallery_list'>
                    {annoncesList.map(({id, title, cover, pictures}) => (
                        <div key={id} className='gallery_list_cards'>
						<Card
							cover={cover}
							title={title}
							id={id}
							pictures={pictures}
						/>
					</div>
                    ))}
                </ul>
            </div>
)}

export default Gallery