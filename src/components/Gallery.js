import { annoncesList } from '../datas/annonces'
import Card from './Card'





function Gallery(){
    return (<div className="gallery">
                <ul className ='gallery_list'>
                    {annoncesList.map(({id, title, cover, pictures}) => (
                        <div key={id}>
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