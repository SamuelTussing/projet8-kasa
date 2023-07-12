

function handleClick(Card) {
	alert(`test`)
}


function Card({ id, title, cover, pictures }) {
	return (
		<li className='card' onClick={() => handleClick(title)}>
			<h2 className='card_title'>{title}</h2>
			<img className='card_picture' src={pictures[0]} alt={`${title} cover`} />

		</li>
	)
}

export default Card