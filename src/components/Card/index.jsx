

function handleClick(Card) {

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