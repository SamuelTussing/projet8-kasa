//import { Link } from 'react-router-dom'
//import { annoncesList } from '../../datas/annonces'

function handleClick(Card) {
	//<Link to={`/logement/${id}`}></Link>
	//alert ("hello")
}


function Card({ index, id, title, cover, pictures }) {
	return (
		
		<li className='card' id={id} onClick={() => handleClick(Card)}>
			<img className='card_picture' src={cover} alt={{title}} />
			<div className='card_overlay'></div>
			<h2 className='card_title'>{title}</h2>
			

		</li>
	)
}

export default Card