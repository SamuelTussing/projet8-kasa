

function handleClick(Card) {
	alert(`test`)
}


function Card({ id, title, cover, pictures }) {
	return (
		<li className='card' onClick={() => handleClick(title)}>
			<img className='card_picture' src={pictures[0]} alt={`${title} cover`} />
			<div className='card_overlay'></div>
			<h2 className='card_title'>{title}</h2>
			

		</li>
	)
}

export default Card