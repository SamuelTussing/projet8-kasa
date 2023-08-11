

function Banniere(image, alt, title){
    return <div className='banniere'>
                <div className='banniere_background'>
                    <img src={image} alt={alt} />
                </div>
                <h1>{title}</h1>
            </div>
}

export default Banniere