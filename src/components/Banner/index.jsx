

function Banniere(image, alt, title){
    return <div className='banniere'>
                <div className='banniere_background'>
                    <img src={image.image} alt={image.alt} />
                </div>
                <h1>{image.title}</h1>
            </div>
}

export default Banniere