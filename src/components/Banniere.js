import banniereImg from '../assets/banniere_Img.jpg'

function Banniere(){
    return <div className='banniere'>
                <div className='banniere_background'>
                    <img src={banniereImg} alt="banniere" />
                </div>
                <h1>Chez vous, partout et ailleurs</h1>
            </div>
}

export default Banniere